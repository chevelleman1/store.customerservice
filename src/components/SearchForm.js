import React from 'react';
import { Button, Modal, Form, Message } from 'semantic-ui-react'
import {connect} from 'react-redux';

import {GetFilteredCategories, GetAllCategories} from '../Actions/index';


class SearchForm extends React.Component {
    showFilteredMsg = false;

    constructor(props){
        super(props);
        this.state = {searchTerm: '', showFilteredMsg: false};
        
      }

      handleOnSubmit = (event) => {
        event.preventDefault();
    
        this.props.GetFilteredCategories(this.state.searchTerm);
        this.setState({showFilteredMsg: true});
        
      }

      handlerOnClick = (event) => {
        event.preventDefault();
        this.setState({showFilteredMsg: false});
    
        this.props.GetAllCategories();
        
      }

      onChange = (e) => {
       this.setState({ [e.target.name]: e.target.value });
      }

    render(){      
        return(
        <div className="sixteen wide column">
            <h1>Search For Categories</h1>
            
            <Form className={"ui form"} onSubmit={this.handleOnSubmit}>
            
                <div className="field">
                    <label><p>Current Category Name: <i>{this.props.name}</i></p></label>
                    <input value={this.state.searchTerm}  type="text" name="searchTerm" placeholder="Enter Search Term"  onChange={this.onChange} ></input>
                </div>
                
                <button className="ui button" type="submit">Submit</button>
                <button disabled={this.state.showFilteredMsg ? '': 'disabled'}  className="ui button" type="submit" onClick={this.handlerOnClick}>Clear</button>
                <h2 style={{display: this.state.showFilteredMsg ? 'block': 'none'}}>Filtered Results:</h2>
                
                </Form>

            
        </div>        
        ) 
    }


}

const mapStateToProps = (state) => {

     return {
         success: state.updatedCategory
     };
   };
   
   export default connect(mapStateToProps, {GetFilteredCategories, GetAllCategories})(SearchForm)