import React from 'react';
import logo from '.././logo.svg';
import '.././App.scss';

import SearchForm from './SearchForm'
import CategoriesList from './CategoriesList'
import AddNewCategory from './AddNewCatagory';


class App extends React.Component {
  render()
  {
      return (
        <div className="ui grid container">
          <SearchForm>Google Auth</SearchForm>
        <CategoriesList></CategoriesList>
        <AddNewCategory></AddNewCategory>
          </div>
        
      )
  };
  
}


export default App;