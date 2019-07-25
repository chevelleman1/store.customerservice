import React from 'react';

import '.././App.scss';
import SearchForm from './SearchForm'
import CategoriesList from './CategoriesList'
import AddNewCategory from './AddNewCatagory';

import authMaster from './AuthMaster';

class MainCSPortal extends React.Component {

  constructor(props){
    super(props);
  }

  HandleLogLogout = (event) => {
    event.preventDefault(event);
    authMaster.logout(
      ()=>{ this.props.history.push("/login")}
    );
  }

  render()
  {
    console.log('returning console');
      return (

        
        <div className="ui grid container">
          <button style={{marginTop:'10px'}}className="ui button" onClick={this.HandleLogLogout}>Log Out</button>
          <SearchForm></SearchForm>
          <CategoriesList></CategoriesList>
          <AddNewCategory></AddNewCategory>          
        </div>
       
      )
  };
  
}


export default MainCSPortal;