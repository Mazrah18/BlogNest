
// export default Lifestyle;
import React from 'react';
import FilteredBlogs from './FilteredBlogs';

const Lifestyle = () => {
  return (
    <div className="home">
      <h1 style={{ textAlign: 'center' }}> Lifestyle</h1>
      <FilteredBlogs category="lifestyle" />
    </div>
  );
};

export default Lifestyle;
