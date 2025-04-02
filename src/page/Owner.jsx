import React from 'react';

const Owner = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='mt-12 mb-12 text-3xl font-bold '>May - GenMate A - 02</h2>
      <img src="/public/mayProfile.jpg" alt="Profile" className='size'/>
      <h4 className='mt-8 mb-8 text-xl font-medium'>Short Biography</h4>
      <p className='text-lg font-normal'>
        I am a budding Junior Software Developer currently honing my skills at Generation Thailand's bootcamp.
        With a passion for both technology and tranquility, I find balance in my life by indulging in my
        favorite beverages, matcha and Thai tea. In my free time, I enjoy immersing myself in the pages
        of a good book or unwinding amidst nature's beauty in the park.
      </p>
    </div>
  );
};

export default Owner;