//BCS223081 : ASAD ALI: SEC 2
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditRecipe() {
  const [recipe, setRecipe] = useState({ name: '', prepare: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3002/recipes/${id}`).then((res) => setRecipe(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3002/recipes/${id}`, recipe);
    navigate('/');
  };

  return (
    <div className="card p-4">
      <h3 className="mb-3">Edit Recipe</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" value={recipe.name} onChange={(e) => setRecipe({ ...recipe, name: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label>Prepare</label>
          <input type="email" className="form-control" value={recipe.prepare} onChange={(e) => setRecipe({ ...recipe, prepare: e.target.value })} required />
        </div>
        <button className="btn btn-warning">Update Recipe</button>
      </form>
    </div>
  );
}

export default EditRecipe;
