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
    <div className="content-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { travel && (
        <article>
          <h2>{ travel.title }</h2>
          <p>Written by { travel.author }</p>
          <div>{ travel.body }</div>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleBack}>GO BACK?</button>
        </article>
      )}
    </div>
  );
}
 
export default TravelDetails;
