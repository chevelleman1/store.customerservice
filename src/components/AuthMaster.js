
import axios from 'axios';
import {setCookie, getCookie, checkCookie} from '../Utilities/CookieManager'
const fs   = require('fs');
const jwt  = require('jsonwebtoken');


class AuthMaster{

    constructor(props){

        
        
    }

    async Login(formValues, onSuccess, onFail){
        const returnData = await axios.post('http://localhost:3005/auth', formValues)
        .then(res => {
            console.log('success auth');
            
            return res;
        })
        .catch(error => {
            return error;
        });

        if(returnData.status == 200){
            setCookie('cs_token', returnData.data );            
            onSuccess();
        }else{
            onFail();
        }
    
    }


    logout(callback){
        console.log(`login out from authmaster`);
        setCookie('cs_token', 0);        
        callback();

    }


     isAuthenticated(callback){
        console.log('calling isauth');
        var request = new XMLHttpRequest();
        
        request.open('POST', 'http://localhost:3005/verify', false);  // `false` makes the request synchronous
        request.setRequestHeader('Authorization', "Bearer " + getCookie('cs_token'))
        request.send(null);
        
        if (request.status === 200) {
            console.log(`returning true`);
          return true;
        }
        else{
            console.log(`returning false`);
            return false;
        }
         

        /* var headersData = {
            headers: { Authorization: "Bearer " + getCookie('cs_token') }
        }

        const returnData =  axios.post('http://localhost:3000/verify', headersData)
        .then(res => {
            
            console.log('success verify');
            return true;
        })
        .catch(error => {
            console.log('success error');
            return false;       
        }); */
       
        //callback(returnData, );
    }





    
}



export default new AuthMaster();
