import { LOADING_STATUS, SET_TASKS } from "./types";
import { executeGetRequest } from '../Utils/FetchUtils'

export const getTasks = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const apiResponse = await executeGetRequest('https://my-json-server.typicode.com/vijaysharma0207/demo/posts');
            dispatch(setLoading(false));
            if (apiResponse.code != 200) {
                throw apiResponse.error;
            }
            dispatch({ type: SET_TASKS, payload: apiResponse.response.data.data })
            connsole.log(apiResponse)
            return apiResponse

        } catch (err) {
            dispatch(setLoading(false));
            return { error: err };
        }
    };
};


export function setLoading(loading) {
    return {
        type: LOADING_STATUS,
        payload: loading
    };
}