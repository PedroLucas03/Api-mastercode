import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const postReceita = async (novaReceita) => {
  try {
    const response = await api.post('/receitas', novaReceita);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar a receita:', error.response ? error.response.data : error.message);
    throw error;
  }
};