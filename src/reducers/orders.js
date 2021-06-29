// import { CREATE, DELETE, UPDATE, LIKE, FETCH_ALL} from '../components/constants/actionTypes'
const fn = (orders = [], action) => {
  switch (action.type) {
    case "DELETE":
      return orders.filter((order) => order._id !== action.payload);
    case "UPDATE":
      return orders.map((order) =>
        order._id === action.payload._id ? action.payload : order
      );
    // case "LIKE":
    //   return orders.map((order) =>
    //     order._id === action.payload._id ? action.payload : order
    //   );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...orders, action.payload];
    default:
      return orders;
  }
};
 export default fn;
