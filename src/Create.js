import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('John Doe');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    const category = e.target.category.value; // Get the selected category from the form

    fetch(`http://localhost:5000/${category}`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      if(category === 'recipes'){
        history.push('/recipes');
      }
        else if(category === 'tech'){
          history.push('/tech');
        }
        else if(category ==='travel'){
          history.push('/travel');
        }
        else if(category === 'lifestyle'){
          history.push('/lifestyle');
        }
        else{
          history.push('/');
        }
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form style={{ maxWidth : '400px' , textAlign : 'center' , margin : '0 auto'}} onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={ {height : '400px'}}
        ></textarea>
       <label>Blog author:</label>
        <textarea
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
        </textarea>
        <label>Category:</label>
        <select name="category">
          <option value="blogs">Blogs</option>
          <option value="recipes">Recipes</option>
          <option value="tech">Technology</option>
          <option value="travel">Travel</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
        <button>Add Blog</button>
      </form>
      <div className="create1">

      </div>
      
    </div>
  );
}
 
export default Create;

