import {combineReducers} from 'redux';

import {CategoriesReducer, UpdatedCategoryReducer, LoggedIn } from './CategoriesReducer';
import NewCategoryReducer from './NewCategoryReducer';
import DeleteCategoryReducer from './DeleteCategoryReducer';

export default combineReducers({
categories: CategoriesReducer,
newCategory: NewCategoryReducer,
deleteCategory: DeleteCategoryReducer,
updatedCategory: UpdatedCategoryReducer,
loggedIn: LoggedIn

});


