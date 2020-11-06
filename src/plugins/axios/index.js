import axios from 'axios';
import interceptors from './interceptors';
import { OMDB_API_URL } from '../../config';

console.log(OMDB_API_URL);

const instance = axios.create({
  baseURL: OMDB_API_URL,
});

interceptors(instance);

export default instance;
