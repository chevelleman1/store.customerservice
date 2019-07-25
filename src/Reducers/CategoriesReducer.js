

export const CategoriesReducer = (state = {}, action) => {
    var returnData =  (action.payload !== undefined? action.payload : {});
    switch(action.type){

        case 'FETCH_API':
        return returnData;
        default: 
        return state
    }

}


export const UpdatedCategoryReducer = (state = false, action) => {
    
    switch(action.type){

        case 'UPDATED_CATEGORY':
        return action.payload;
        default: 
        return state
        }

}


export const LoggedIn = (state = {}, action) => {
    
    switch(action.type){

        case 'LOGGED_IN':    
        return action.payload;
        default: 
        return state
        }

}