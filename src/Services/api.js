import Axios from 'axios';
//require('custom-env').env(true);

const api = Axios.create({ baseURL: 'http://localhost:3001/api'});

export default api;

