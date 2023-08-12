import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const TechDetails = () => {
  const {techId } = useParams();
  const { data: tech, error, isPending } = useFetch(`https://blog-nest-backend.onrender.com/tech/${techId}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`https://blog-nest-backend.onrender.com/tech/${techId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        history.push('/tech'); 
      } else {
        console.error('Error deleting tech:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error deleting tech:', error);
    });
  };

  const handleBack = () =>{

    history.push('/tech')

  }
  return (
    <div className="blog-details">
    <div className="blog-content">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {tech && (
        <article className="blog-article">
          <h1 className="blog-title">{tech.title}</h1>
          <p className="blog-author">Written by {tech.author}</p>
          <div className="blog-body" style={{ whiteSpace: 'pre-line' }}>{tech.body}</div>
        </article>
      )}
      {tech && ( <div className="details-button">

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
 
export default TechDetails;
