import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
} from "../Constants.js"

import axios from "axios"


const loginAction = (postdata) => async (dispatch) => {

    try {
        dispatch({type: USER_LOGIN_REQUEST})
        const res = await axios.post(process.env.REACT_APP_API_BASE_URL+"auth/login/", postdata)
        dispatch({type: USER_LOGIN_SUCCESS, payload: res.data})
    } catch (error) {
        dispatch(
            {type:USER_LOGIN_FAIL,
            payload: error.data && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}

export default loginAction;
