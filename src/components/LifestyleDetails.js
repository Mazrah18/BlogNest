import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const LifestyleDetails = () => {
  const {lifestyleId } = useParams();
  const { data: lifestyle, error, isPending } = useFetch(`http://localhost:5000/lifestyle/${lifestyleId}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:5000/lifestyle/${lifestyleId}`, {
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

  return (
    <div className="content-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { lifestyle && (
        <article>
          <h2>{ lifestyle.title }</h2>
          <p>Written by { lifestyle.author }</p>
          <div>{ lifestyle.body }</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default LifestyleDetails;
