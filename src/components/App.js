import React from 'react';
import {BrowserRouter, Route, Link, Redirect, withRouter, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginAction} from '../Actions/index';


import '.././App.scss';
import Header from './Header'
import Login from './Login';
import MainCSPortal from './MainCSPortal';
import authMaster from './AuthMaster';
import GetAuthInfo from './AuthenticatedRoute';


/* function AuthenticatedRoute({component: Component, ...rest}) {
<Route {...rest} render={ props => {
  
  if(authMaster.isAuthenticated()){
    return <Component {...props}/>;
  }
  else{
    return (<Redirect to={{pathname: "/login", state:{from: props.location}}}/>
  }
  }}
/>
    
}; */

function AuthenticatedRoute({component: Component, ...rest}) {
  return (<Route {...rest} render={ props => {

    if(authMaster.isAuthenticated()){
      return <Component {...props}/>;
    }
    else{
      return <Redirect to={{pathname: "/login", state:{from: props.location}}}/>
    }


    }
  } />)
  }


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {authenticated: false};
    
  }
  

  render()
  {
    
 
      return (
        
        <BrowserRouter>
 
        <div className="ui container">
          <Header></Header>
          <Switch>
          
          <AuthenticatedRoute exact path="/categories" component={MainCSPortal}/>
            <Route path='/login' component={Login}></Route>
            <Route path='/' component={Login}></Route>
            <Route exact path='*' component={() => <h1>This Page Does Not Exist.</h1>}></Route> 
          </Switch>         
        </div>
      
        </BrowserRouter>


        
      )
  };
  
}

const mapStateToProps = (state) => {
  try {
    console.log(state.loggedIn.data.request.status);
  } catch (error) {
    
  }
   
   return {
        
       loginState:  state.loggedIn.data !== undefined ? state.loggedIn.data.request.status : 401
   };
 };

export default connect(mapStateToProps, {LoginAction})( App);