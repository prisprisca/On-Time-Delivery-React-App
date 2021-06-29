import axios from "axios";

const API = axios.create({
  baseURL: "https://bestontimedelivery.herokuapp.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchOrders = () => API.get("/parcels");
export const createOrder = (newOrder) => API.post("/parcels", newOrder);
export const updateOrder = (id, updatedOrder) =>
  API.patch(`${"/parcels"}/${id}`, updatedOrder);
export const deleteOrder = (id) => API.delete(`${"/parcels"}/${id}`);

export const signIn = (formData) => API.post("/auth/signin", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);
