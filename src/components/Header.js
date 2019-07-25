import React from 'react';
import {Link, HashRouter} from 'react-router-dom';

import authMaster from './AuthMaster';

const HandleClick = (e) => {
    e.preventDefault(e);
    authMaster.logout(
      ()=>{ this.props.history.push("/login")}
    );
  }


const Header = (props) => {
    return (

        <div className="ui secondary pointing menu">
            <Link to="/categories" className="item">
                Category Manager
            </Link>        
            <div className="right menu">
            {/* <button className="ui button" onClick={HandleClick}> {(authMaster.isAuthenticated() == true ? 'Log Lout': 'Log In')}</button> */}
            
            </div>

        </div>

    ); 



}

export default Header;