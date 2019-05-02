import axios from 'axios';

//Action Creator 



export const GetData = (formValues) => async (dispatch, getState) =>{
    console.log(formValues);

    const addedNew = await axios.post('https://localhost:5001/api/categories', formValues).then(res => {return res}).catch(error => {});
    dispatch({type: 'ADDED_CATEGORY', payload: addedNew.data});
}



export const CallApi = () => async  (dispatch, getState) => {
    //const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {return res});

    
    /* const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(resolve => {return resolve.json()}, reject => {console.log(`bobs error: ${reject}`)})
    .catch(err =>  {console.log(`bobs catch: ${err}`)});
    console.log(`apiresonse.data is : ${apiResponse.data} `);  */        
    
    
    const apiResponse = await axios.get('https://localhost:5001/api/categories').then(res => {return res}).catch(error => {});

    dispatch({type: 'FETCH_API', payload: apiResponse.data });
   
}

//For REDUX-THUNK
//Using thunk, action creators can now return a function which 
//gets invoked by thunk which passes dispatch and getState arguments.  We can change or get info from the redux store.
//when making an api call, we'll use redux-thunk.