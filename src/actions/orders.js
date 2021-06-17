import * as api from '../api'

//Action creaters. functions that return actions
export const getOrders = () => async(dispatch) => {
    try {
        const {data} = await api.fetchOrders();
        dispatch ({type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
        
    }
    

    
}