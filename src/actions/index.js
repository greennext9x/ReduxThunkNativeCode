import {FETCH_USER,FETCH_USER_SUCCESS,CANCEL_FETCHING_USER} from './type'

export const fetchUserApi = () => async dispatch => {
    dispatch({type:FETCH_USER});
    const data = await fakeDataApi();
    console.log(data);
    dispatch({type: FETCH_USER_SUCCESS,payload:data})

};
export const cancelRequestApi = () => ({type: CANCEL_FETCHING_USER});

// const delay = (time) => new Promise(resolve => setTimeout(() => {
//     resolve(true)
// },time));

const fakeDataApi = () => new Promise(resolve => setTimeout(() => {
    resolve({
        name: "Green Love",
        position: "JS Dev",
        email: "hcuongbn@gmail.com"
    })
},1000));
