import {combineReducers} from 'redux';

import CategoriesReducer from './CategoriesReducer';
import NewCategoryReducer from './CategoriesReducer';

export default combineReducers({
categories: CategoriesReducer,
newCategory: NewCategoryReducer

});


