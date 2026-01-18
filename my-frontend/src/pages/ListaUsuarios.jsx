// import { useState } from 'react' 


export default function ListaUsuarios() {
  const usuarios = [
    { id: 1, nome: "João Silva", email: "joao@email.com" }
  ];

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