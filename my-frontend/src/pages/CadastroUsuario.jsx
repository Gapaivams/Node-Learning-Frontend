import { useState } from 'react' 

export default function CadastroUsuario(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`dados para enviar ao node: ${nome}, ${email}`);
    } 

    return (
        <div className="card">
            <h2>Cadastrar Usuário</h2>
            <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control" onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success">Salvar</button>
      </form>
    </div>
    )
}