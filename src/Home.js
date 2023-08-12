


import React from 'react';
import FilteredBlogs from './FilteredBlogs';

const Home = () => {
  return (
    <div className="home">
      <h1 style={{ textAlign: 'center' }}> Blogs</h1>
      <FilteredBlogs category="blogs" />
    </div>
  );
};

export default Home;
