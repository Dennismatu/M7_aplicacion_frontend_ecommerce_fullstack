import axios from "axios";
const URL_ROOT = import.meta.env.VITE_API_URL;

const getProducts = async () => {
  const response = await axios.get(`${URL_ROOT}/api/product/readall`);
  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(
    `${URL_ROOT}/api/product/readone/:id?id=${id}`
  );
  return response.data;
};

export { getProducts, getProduct };
