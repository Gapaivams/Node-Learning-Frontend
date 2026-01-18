import { useState, useEffect } from 'react' 
import api from '../services/api';


export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);


  useEffect(() => {
    const getUsuarios = async () => {
    try{
      const response = await api.get('/users');
      setUsuarios(response.data);
    } catch(err) {
      console.log(`Erro ao pegar o usuario: ${err}`);      
    }
  }
    getUsuarios();
  }, []);

  return (
    <div className="mt-4 table-container">
      <h2>Lista de Usuários</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(u => (
            <tr key={u.id}>
              <td>{u.nome}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}