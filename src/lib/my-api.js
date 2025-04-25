import axios from "axios";
export const getProducts = () => {
  return axios
    .get(
      "https://backend-final-g1-955g.onrender.com/api/products/list?page=1&pageSize=9"
    )
    .then((response) => response.data);
};

export const getProduct = (productId) => {
  return axios
    .get(`https://backend-final-g1-955g.onrender.com/api/products/${productId}`)
    .then((res) => res.data);
};

export const getProductsByCate = (category) => {
  return axios.get(
    `https://backend-final-g1-955g.onrender.com/api/products/list?page=1&pageSize=9&categories=${category}`
  );
};

export const getBrands = () => {
  return axios
    .get("https://backend-final-g1-955g.onrender.com/api/brands/list")
    .then((response) => response.data);
};
export const getProductsByBrand = (brand) => {
  return axios.get(
    `https://backend-final-g1-955g.onrender.com/api/products/list?page=1&pageSize=9&brand=${brand}`
  );
};

export const getCart = () => {
  const token = localStorage.getItem("token");
  return axios
    .get("https://backend-final-g1-955g.onrender.com/api/carts/get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);
};

export const getHandPicked = () => {
  return axios
    .get(
      "https://backend-final-g1-955g.onrender.com/api/products/list?page=1&pageSize=9&minRating=4.5&maxPrice=100"
    )
    .then((res) => res.data);
};
