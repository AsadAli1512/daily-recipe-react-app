
//BCS223081 : ASAD ALI
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddRecipe() {
  const [recipe, setRecipe] = useState({ name: '', prepare: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3002/recipes', recipe);
    navigate('/');
  };

  return (
    <div
    style={{
      backgroundImage: "url('/recipe.jpeg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      fontFamily: 'Times New Roman, Times, serif',
      minHeight: '100vh',
      padding: '20px',
      color: 'white',
    }} >
      <h3 className="mb-3">Add New Recipe</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" onChange={(e) => setRecipe({ ...recipe, name: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label>Prepare</label>
          <input type="text" className="form-control" onChange={(e) => setRecipe({ ...recipe, prepare: e.target.value })} required />
        </div>
        <button className="btn btn-success">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
