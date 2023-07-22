import axios from "axios";
const baseUrl = "http://localhost:3001/persons";
const getData = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createData = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

export default {
  getData,
  createData,
};
