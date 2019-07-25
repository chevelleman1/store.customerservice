import React from 'react';
import {LoginAction} from '../Actions/index';
import {connect} from 'react-redux';

import axios from 'axios';



class Auth extends React.Component{
    constructor(props){
        super(props);
        this.Authenticated = false;
        
    }

    Login(data, callback){
    this.props.LoginAction(data);
    this.Authenticated = true;

    callback();
    }

    logout(callback){
        this.Authenticated = false;
        callback();

    }


    isAuthenticated(){
        return this.Authenticated;
    }
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


export default connect(mapStateToProps, {LoginAction})(Auth);
