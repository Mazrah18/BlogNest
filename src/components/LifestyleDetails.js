import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const LifestyleDetails = () => {
  const {lifestyleId } = useParams();
  const { data: lifestyle, error, isPending } = useFetch(`https://blog-nest-gilt.vercel.app//lifestyle/${lifestyleId}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`https://blog-nest-gilt.vercel.app//lifestyle/${lifestyleId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        history.push('/lifestyle');
      } else {
        console.error('Error deleting lifestyle:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error deleting lifestyle:', error);
    });
  };
  const handleBack = () =>{

    history.push('/lifestyle')

  }
  return (


    <div className="blog-details">
    <div className="blog-content">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {lifestyle && (
        <article className="blog-article">
          <h1 className="blog-title">{lifestyle.title}</h1>
          <p className="blog-author">Written by {lifestyle.author}</p>
          <div className="blog-body" style={{ whiteSpace: 'pre-line' }}>{lifestyle.body}</div>
        </article>
      )}
      {lifestyle && ( <div className="details-button">

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
 
export default LifestyleDetails;
