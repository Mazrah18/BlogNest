import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const { data: recipe, error, isPending } = useFetch(`http://localhost:5000/recipes/${recipeId}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:5000/recipes/${recipeId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        history.push('/recipes'); // Redirect to recipes list
      } else {
        console.error('Error deleting recipe:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error deleting recipe:', error);
    });
  };

  return (
    <div className="content-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { recipe && (
        <article>
          <h2>{ recipe.title }</h2>
          <p>Written by { recipe.author }</p>
          <div>{ recipe.body }</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default RecipeDetails;
