import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const TravelDetails = () => {
  const {travelId } = useParams();
  const { data: travel, error, isPending } = useFetch(`https://blog-nest-backend.onrender.com/travel/${travelId}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`https://blog-nest-backend.onrender.com/travel/${travelId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        history.push('/travel'); // Redirect to recipes list
      } else {
        console.error('Error deleting travel:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error deleting travel:', error);
    });
  };
  const handleBack = () =>{

    history.push('/travel')

  }
  return (
    <div className="blog-details">
    <div className="blog-content">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {travel && (
        <article className="blog-article">
          <h1 className="blog-title">{travel.title}</h1>
          <p className="blog-author">Written by {travel.author}</p>
          <div className="blog-body" style={{ whiteSpace: 'pre-line' }}>{travel.body}</div>
        </article>
      )}
      {travel && ( <div>

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
 
export default TravelDetails;
