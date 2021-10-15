import axios from 'axios';
const url = "https://api.github.com/search/repositories?q=dynavox";

export const getRetros = () => {
  return axios.get(url).then(res => res);
}