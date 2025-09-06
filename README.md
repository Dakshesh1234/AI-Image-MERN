# ✨ MERN AI Image Generation App ✨

<img width="1024" height="1024" alt="AI-Image" src="https://github.com/user-attachments/assets/5f21bdf2-bf32-423d-b03f-40ddfdeefd7e" />

This is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that allows users to generate imaginative images from text prompts using the Stability AI API. Users can then share these images with the community and browse through a gallery of all the generated images.

---

## Features

-   **Image Generation:** Create unique images by providing a text prompt.
-   **Surprise Me:** Get random prompts to spark your creativity.
-   **Community Showcase:** Browse a gallery of images created by other users.
-   **Search:** Find specific images in the gallery by searching for prompts or usernames.
-   **Download:** Save your favorite generated images.

---

## Tech Stack

### Frontend

-   React
-   Vite
-   Tailwind CSS
-   React Router

### Backend

-   Node.js
-   Express.js

### Database

-   MongoDB

### APIs and Services

-   **Stability AI:** For generating images from text prompts.
-   **Cloudinary:** For storing and managing the generated images.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js and npm (or yarn) installed on your machine.
-   A MongoDB account and your connection string.
-   A Cloudinary account to get your `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.
-   A Stability AI API key.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/dakshesh1234/mern-ai-image.git](https://github.com/dakshesh1234/mern-ai-image.git)
    cd mern-ai-image
    ```

2.  **Install backend dependencies:**
    ```sh
    cd server
    npm install
    ```

3.  **Install frontend dependencies:**
    ```sh
    cd ../client
    npm install
    ```

### Configuration

Create a `.env` file in the `server` directory and add the following environment variables:

```env
MONGODB_URL=YOUR_MONGODB_CONNECTION_STRING
CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
STABILITY_API_KEY=YOUR_STABILITY_AI_API_KEY
```
4.  **Running the Application:**
-   Backend
    ```sh
    cd server
    npm start
    ```
-   Frontend
    ```sh
    cd client
    npm run dev
    ```
