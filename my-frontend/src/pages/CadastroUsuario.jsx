import { useState } from 'react' 
import api from '../services/api';

const CadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const novoUsuario = {nome:nome, email:email};

        try{
            console.log(`dados para enviar ao node: ${nome}, ${email}`);
            const response = await api.post('/add', novoUsuario);
            alert(response.data);
            setNome("")
            setEmail("")
            
        } catch(err) {
            alert(`erro ao cadastrar o usuario: ${err}`)
            console.log(`erro ao cadastrar o usuario: ${err}`);
        }

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

export default CadastroUsuario;