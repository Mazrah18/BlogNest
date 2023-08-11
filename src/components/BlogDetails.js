import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:5000/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:5000/blogs/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        history.push('/');
      } else {
        console.error('Error deleting blog:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error deleting blog:', error);
    });
  };

  return (

    <div className="blog-details">
    <div className="blog-content">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {blog && (
        <article className="blog-article">
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-author">Written by {blog.author}</p>
          <div className="blog-body" style={{ whiteSpace: 'pre-line' }}>{blog.body}</div>
        </article>
      )}
      {blog && (
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  </div>
    
  );
}
 
export default BlogDetails;


// import React from 'react';

// const BlogDetails = ({ blog, isPending, error, handleDelete }) => {
//   return (
   
//   );
// }

// export default BlogDetails;
