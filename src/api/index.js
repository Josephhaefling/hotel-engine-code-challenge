import axios from 'axios';
const url = "https://api.github.com/search/repositories?q=";

export const getRetros = (queryParams) => {
  const { topicInput } = queryParams;
  return axios.get(`${url}${topicInput}`).then(res => res);
}