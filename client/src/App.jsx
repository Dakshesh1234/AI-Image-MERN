import React, { useState, useEffect } from 'react';
import {
 BrowserRouter, Link, Route, Routes, useNavigate,
} from 'react-router-dom';
import { logo } from './assets';
import {
 Home, CreatePost, Login, Signup,
} from './page';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

  return (
    <div>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
          {user ? (
            <>
              <p className="font-inter font-medium text-gray-700">{user.result.name}</p>
              <button type="button" onClick={logout} className="font-inter font-medium bg-gray-500 text-white px-4 py-2 rounded-md">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="font-inter font-medium bg-gray-500 text-white px-4 py-2 rounded-md">
                Login
              </Link>
              <Link to="/signup" className="font-inter font-medium bg-gray-500 text-white px-4 py-2 rounded-md">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
        </Routes>
      </main>
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;