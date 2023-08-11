// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

// const Tech = () => {
//   const { error, isPending, data: tech } = useFetch('http://localhost:5000/tech');

//   return (
//     <div className="home">
//       <h1 style={{ textAlign: 'center' }}> Tech and Games</h1>

      
//       {error && <div>{error}</div>}
//       {isPending && <div>Loading...</div>}
//       {tech && <BlogList blogs={tech} category="tech" />}
//     </div>
//   );
// }

// export default Tech;
import React from 'react';
import FilteredBlogs from './FilteredBlogs';

const Tech = () => {
  return (
    <div className="home">
      <h1 style={{ textAlign: 'center' }}> Tech and Games</h1>
      <FilteredBlogs category="tech" />
    </div>
  );
};

export default Tech;