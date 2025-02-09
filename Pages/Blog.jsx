import React from 'react';
import BlogSection from '../components/BlogSection'
import NavBar from '../components/NavBar';


const Blog = () => {
  return (
    <div
      className="w-screen min-h-screen bg-cover bg-center bg-repeat bg-gray-100 flex flex-col bg-contain"
      style={{ backgroundImage: "url('/sailor-moon-cat.gif')",
        backgroundAttachment:'fixed',
       }}
    >
      <div className='flex justify-center py-10'><NavBar/></div>
      <div className='mt-auto p-4'>
      <BlogSection/>
      </div>
      
      
    </div>
  );
};

export default Blog;