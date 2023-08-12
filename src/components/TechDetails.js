import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const TechDetails = () => {
  const {techId } = useParams();
  const { data: tech, error, isPending } = useFetch(`http://localhost:5000/tech/${techId}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:5000/tech/${techId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        history.push('/techId'); // Redirect to recipes list
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
    <div className="content-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { tech && (
        <article>
          <h2>{ tech.title }</h2>
          <p>Written by { tech.author }</p>
          <div>{ tech.body }</div>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleBack}>GO BACK?</button>
        </article>
      )}
    </div>
  );
}
 
export default TechDetails;
