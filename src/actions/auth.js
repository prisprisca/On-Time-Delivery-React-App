// import * as api from '../api/index'

export const signin = (formData, history) => async (dispatch) => {
    try {
     history.push('/orderform');   
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
     history.push('/orderform');   
    } catch (error) {
        console.log(error);
    }
}