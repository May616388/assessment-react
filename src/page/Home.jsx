import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
        <h1 className='text-5xl font-bold flex item-center justify-center mt-12 mb-12'>
            Generation Thailand<br /> 
            React - Assessment
        </h1>
        <div className='flex items-center justify-center gap-8'>
          <Link to= "/User">
        <button className='px-6 py-4 bg-pink-300 text-black font-medium text-lg rounded-md hover:bg-pink-400 transition p-4'>User Home Sector</button>
          </Link>
          <Link to= "/admin">
        <button className='px-6 py-4 bg-pink-300 text-black font-medium text-lg rounded-md hover:bg-pink-400 transition p-4'>Admin Home Sector</button>
          </Link>
        </div>
    </div>
  )
}

export default Home;