import axios from "axios";
const URL_ROOT = import.meta.env.VITE_API_URL;

const getCategories = async (data) => {
  const response = await axios.get(`${URL_ROOT}/api/categories/readall`);
  return response.data;
};

export { getCategories };
