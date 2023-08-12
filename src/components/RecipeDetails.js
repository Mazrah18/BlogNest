import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const { data: recipe, error, isPending } = useFetch(`https://blog-nest-backend.onrender.com/recipes/${recipeId}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`https://blog-nest-backend.onrender.com/recipes/${recipeId}`, {
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
  const handleBack = () =>{

    history.push('/recipes')

  }
  return (
    
    <div className="blog-details">
    <div className="blog-content">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipe && (
        <article className="blog-article">
          <h1 className="blog-title">{recipe.title}</h1>
          <p className="blog-author">Written by {recipe.author}</p>
          <div className="blog-body" style={{ whiteSpace: 'pre-line' }}>{recipe.body}</div>
        </article>
      )}
      {recipe && ( <div>

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
 
export default RecipeDetails;
