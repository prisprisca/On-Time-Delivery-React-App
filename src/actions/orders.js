import { CREATE} from '../components/constants/actionTypes'
import * as api from "../api";

//Action creaters. functions that return actions
export const getOrders = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrders();
    console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createOrder = (order) => async (dispatch) => {
  try {
    const { data } = await api.createOrder(order);
    dispatch({ type: CREATE, payload: data });
    // history.push(`/parcels/${data._id}`)
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = (id, order) => async (dispatch) => {
  try {
    const { data } = await api.updateOrder(id, order);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    await api.deleteOrder(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

// export const likeOrder = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likeOrder(id);
//     dispatch({ type: "UPDATE", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
