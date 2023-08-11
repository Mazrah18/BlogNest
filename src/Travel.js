// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

// const Travel = () => {
//   const { error, isPending, data: travel } = useFetch('http://localhost:5000/travel');

//   return (
//     <div className="home">
//       <h1 style={{ textAlign: 'center' }}> Travel</h1>
//       {error && <div>{error}</div>}
//       {isPending && <div>Loading...</div>}
//       {travel && <BlogList blogs={travel} category="travel" />}
//     </div>
//   );
// }

// export default Travel;


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
