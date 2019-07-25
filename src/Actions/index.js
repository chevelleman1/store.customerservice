import axios from 'axios';

//Action Creator 



export const LoginAction = (formValues) => async (dispatch, getState) =>{
    
    const token = await axios.post('http://localhost:3000/auth', formValues).then(res => {return res}).catch(error => {});
    
    dispatch({type: 'LOGGED_IN', payload: {data:token} });

}


export const AddCategory = (formValues) => async (dispatch, getState) =>{
    
    const addedNew = await axios.post('https://localhost:5001/api/categories', formValues).then(res => {return res}).catch(error => {});

    const apiResponse = await axios.get('https://localhost:5001/api/categories').then(res => {return res}).catch(error => {return error});
    
    dispatch({type: 'FETCH_API', payload: {success:false, data:apiResponse.data} });

}

export const DeleteCategory = (id) => async (dispatch, getState) =>{
    const addedNew = await axios.delete(`https://localhost:5001/api/categories/${id}`).then(res => {return res}).catch(error => {});

    const apiResponse = await axios.get('https://localhost:5001/api/categories').then(res => {return res}).catch(error => {return error});
  
    dispatch({type: 'FETCH_API', payload: {success:true, data:apiResponse.data} });
}

export const UpdateCategory = (data) => async (dispatch, getState) =>{

    const addedNew = await axios.put(`https://localhost:5001/api/categories/${data.id}`, data).then(res => {return res}).catch(error => {});
    var success = addedNew.status == 204 ? true : false;
    const apiResponse = await axios.get('https://localhost:5001/api/categories').then(res => {return res}).catch(error => {return error});
    dispatch({type: 'FETCH_API', payload: {success:false, data:apiResponse.data} });
    dispatch({type: 'UPDATED_CATEGORY', payload: success});
    
}


export const GetAllCategories = () => async  (dispatch, getState) => {
    //const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {return res});

    
    /* const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(resolve => {return resolve.json()}, reject => {console.log(`bobs error: ${reject}`)})
    .catch(err =>  {console.log(`bobs catch: ${err}`)});
    console.log(`apiresonse.data is : ${apiResponse.data} `);  */        
    
    
    const apiResponse = await axios.get('https://localhost:5001/api/categories').then(res => {return res}).catch(error => {return error});
    dispatch({type: 'FETCH_API', payload: {success:false, data:apiResponse.data} });
   
}

export const GetFilteredCategories = (searchTerm) => async  (dispatch, getState) => {    
    const apiResponse = await axios.get(`https://localhost:5001/api/categories/getfilteredcategories/${searchTerm}`).then(res => {return res}).catch(error => {return error});
    dispatch({type: 'FETCH_API', payload: {success:false, data:apiResponse.data} });
}

//For REDUX-THUNK
//Using thunk, action creators can now return a function which 
//gets invoked by thunk which passes dispatch and getState arguments.  We can change or get info from the redux store.
//when making an api call, we'll use redux-thunk.