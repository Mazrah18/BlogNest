import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const LifestyleDetails = () => {
  const {lifestyleId } = useParams();
  const { data: lifestyle, error, isPending } = useFetch(`https://blog-nest-backend.onrender.com/lifestyle/${lifestyleId}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`https://blog-nest-backend.onrender.com/lifestyle/${lifestyleId}`, {
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
    <div className="content-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { lifestyle && (
        <article>
          <h2>{ lifestyle.title }</h2>
          <p>Written by { lifestyle.author }</p>
          <div>{ lifestyle.body }</div>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleBack}>GO BACK?</button>
        </article>
      )}
    </div>
  );
}
 
export default LifestyleDetails;
