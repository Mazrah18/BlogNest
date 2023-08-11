// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

// const Home = () => {
//   const { error, isPending, data: blogs } = useFetch('http://localhost:5000/blogs');

//   return (
//     <div className="home">
//       <h1 style={{ textAlign: 'center' }}> Blogs</h1>
//       {error && <div>{error}</div>}
//       {isPending && <div>Loading...</div>}
//       {blogs && <BlogList blogs={blogs} category='blogs'/>}
//     </div>
//   );
// }

// export default Home;



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
