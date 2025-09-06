import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../api';

const Signup = ({ setUser }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signUp(form);
      localStorage.setItem('profile', JSON.stringify(data));
      setUser(data);
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="font-extrabold text-[#222328] text-[32px]">Sign Up</h1>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3" />
        </div>
        <div className="mt-5">
          <button type="submit" className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signup;