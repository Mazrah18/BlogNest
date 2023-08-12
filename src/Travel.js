
import React from 'react';
import FilteredBlogs from './FilteredBlogs';

const Travel = () => {
  return (
    <div className="home">
      <h1 style={{ textAlign: 'center' }}> Travel</h1>
      <FilteredBlogs category="travel" />
    </div>
  );
};

export default Travel;
