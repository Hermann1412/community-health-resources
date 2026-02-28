import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const fetchResources = async () => {
  const response = await axios.get(`${API_URL}/resources`);
  return response.data;
}