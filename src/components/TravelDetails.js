import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const TravelDetails = () => {
  const {travelId } = useParams();
  const { data: travel, error, isPending } = useFetch(`http://localhost:5000/travel/${travelId}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:5000/travel/${travelId}`, {
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
        </article>
      )}
    </div>
  );
}
 
export default TravelDetails;
