

import React from 'react';
import FilteredBlogs from './FilteredBlogs';

const Recipes = () => {
  return (
    <div className="home">
      <h1 style={{ textAlign: 'center' }}> Food Recipes</h1>
      <FilteredBlogs category="recipes" />
    </div>
  );
};

export default Recipes;
