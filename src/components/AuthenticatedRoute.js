import React from 'react';
import {BrowserRouter, Route, Link, Redirect, withRouter, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginAction} from '../Actions/index';


import '.././App.scss';
import Header from './Header'
import Login from './Login';
import MainCSPortal from './MainCSPortal';
import authMaster from './AuthMaster';


export default async function  GetAuthInfo() {


    var x = await authMaster.isAuthenticated();
  
  
  //return (<Redirect to={{pathname: "/login", state:{from: props.location}}}/>);
  }


