import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://blognest-backend.adaptable.app/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`https://blognest-backend.adaptable.app/blogs/${id}`, {
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
  const handleBack = () =>{

    history.push('/')

  }
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
      {blog && ( <div className="details-button">

        <button className="delete-button" onClick={handleDelete}>
        Delete
        </button>
       <button className= "back-button" onClick={handleBack}>GO BACK?</button>

      </div>
      
      )}
    </div>
  </div>
    
  );
}
 
export default BlogDetails;


