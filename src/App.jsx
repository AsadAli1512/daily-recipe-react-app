import { Routes, Route, Link } from 'react-router-dom';
import AddRecipe from './assets/AddRecipe';
import EditRecipe from './assets/EditRecipe';
import RecipeList from './assets/RecipeList';
//BCS223081 : ASAD ALI
function App() {
  return (
    <div className="container mt-4">
      <nav className="mb-4">
        <Link to="/" className="btn btn-primary me-2">Recipe List</Link>
        <Link to="/add" className="btn btn-success">Add Recipe</Link>
      </nav>

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
