import axios from 'axios';
const url = "https://api.github.com/search/repositories?q=";

export const getRepos = (queryParams) => {
  const { filterStars, languageInput, topicInput } = queryParams;
  if (filterStars && languageInput && topicInput) {
    return axios.get(`${url}${topicInput}+language:${languageInput}&sort=stars&order=desc`)
  } else if (topicInput && languageInput) {
    return axios.get(`${url}${topicInput}+language:${languageInput}`)
    .then(res => res);
  } else {
    return axios.get(`${url}${topicInput}`).then(res => res);
  }
}