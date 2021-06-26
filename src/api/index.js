import axios from "axios";

const API = axios.create({ baseURL: 'https://bestontimedelivery.herokuapp.com'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))}`
    }
    return req;
});


// https://bestontimedelivery.herokuapp.com/parcels


// const url = " https://bestontimedelivery.herokuapp.com/parcels";

export const fetchOrders = () => API.get('/parcels');
export const createOrder = (newOrder) => API.post('/parcels', newOrder);
export const updateOrder = (id, updatedOrder) =>
API.patch(`${'/parcels'}/${id}`, updatedOrder);
export const deleteOrder = (id) => API.delete(`${'/parcels'}/${id}`);
export const likeOrder = (id) => API.patch(`${'/parcels'}/${id}/likeOrder`);

export const signIn = (formData) => API.post('user/signin', formData);
export const signUp = (formData) => API.post('user/signup', formData);
