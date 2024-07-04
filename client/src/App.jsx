import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { iconlogo } from './assets';
import { Home, CreatePost } from './page';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter >
    <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-gray-800">
      <Link to="/">
        <div className='flex flex-row items-center gap-3'>
        <div className=' bg-white rounded-md'>
          <img src={iconlogo} alt="logo" className=" w-9 object-contain " />
        </div>
          <h1 className=' text-[30px] text-white font-bold font-mono'>ArtGen-1.0</h1>
          </div>
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-blue-400  text-black px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-black min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <Footer/>
  </BrowserRouter>
);

export default App;
