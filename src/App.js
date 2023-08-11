import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './NotFound';
import Recipes from './recipes';
import Tech from './Tech';
import Travel from './Travel';
import Lifestyle from './Lifestyle';
import RecipeDetails from './components/RecipeDetails';
import TravelDetails from './components/TravelDetails';
import TechDetails from './components/TechDetails';
import LifestyleDetails from './components/LifestyleDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/recipes">
              <Recipes/>
            </Route>
            <Route exact path="/tech">
              <Tech />
            </Route>
            <Route exact path="/travel">
              <Travel />
            </Route>
            <Route exact path="/lifestyle">
              <Lifestyle/>
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
            <BlogDetails />
            </Route>
            <Route path="/recipes/:recipeId">
            < RecipeDetails />
            </Route>

            <Route path="/tech/:techId">
            < TechDetails />
            </Route>


            <Route path="/travel/:travelId">
            < TravelDetails />
            </Route>


            <Route path="/lifestyle/:lifestyleId">
            < LifestyleDetails />
            </Route>



            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}



export default App;