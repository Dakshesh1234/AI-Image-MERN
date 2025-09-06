import express from 'express';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch'; // Import the fetch library

dotenv.config();

const router = express.Router();

// Define the Stability AI API endpoint and a variable for the API key
const STABILITY_API_KEY = process.env.STABILITY_API_KEY;
const STABILITY_API_URL = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from Stability AI!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!STABILITY_API_KEY) {
      throw new Error('Missing Stability AI API Key.');
    }

    // Make a POST request to the Stability AI API
    const response = await fetch(STABILITY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${STABILITY_API_KEY}`,
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: prompt,
          },
        ],
        cfg_scale: 7,
        clip_guidance_preset: "FAST_BLUE",
        height: 1024,
        width: 1024,
        samples: 1, // Number of images to generate (e.g., 1)
        steps: 30,
      }),
    });

    if (!response.ok) {
        throw new Error(`API response error: ${await response.text()}`);
    }

    const responseJSON = await response.json();
    const imageBase64 = responseJSON.artifacts[0].base64;

    res.status(200).json({ photo: imageBase64 });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.message || 'Something went wrong');
  }
});

export default router;