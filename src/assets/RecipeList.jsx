
//BCS223081 : ASAD ALI : SEC 2
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RecipeList() {
  const [recipe, setRecipe] = useState([]);

const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:3002/recipes');
    setRecipe(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    if (confirm('Are you sure?')) {
      await axios.delete(`http://localhost:3002/recipes/${id}`);
      fetchUsers();
    }
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
      <h3 style={{ color: 'white', textDecoration:'underline', textAlign:'center'}}>Recipe List</h3>

      <div className="input-group mb-3" style={{ maxWidth: '400px', margin: '0 auto' }}>
  <input
    type="text"
    className="form-control"
    placeholder="Search recipe by name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button className="btn btn-outline-light" onClick={fetchUsers}>
    Search
  </button>
</div>

      <table className="table table-bordered table-striped mt-3" >
        <thead  >
          <tr ><th style={{ backgroundColor:'pink'}}>ID</th>
          <th style={{ backgroundColor:'pink'}}>Name</th>
          <th style={{ backgroundColor:'pink'}}>How to preapre?</th>
          <th style={{ backgroundColor:'pink'}}>Actions</th></tr>
        </thead>
        <tbody>
          {recipe.filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.prepare}</td>
              <td>
                <Link to={`/edit/${u.id}`} className="btn btn-sm btn-primary me-2" style={{ backgroundColor:'yellowgreen',color:'white'}}>
                  <i className="bi bi-pencil"></i> Edit
                </Link>
                <button onClick={() => deleteUser(u.id)} className="btn btn-sm btn-danger">
                  <i className="bi bi-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
