import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:8085/usuarios"
});

export default api;