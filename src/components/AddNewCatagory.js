import React from 'react';
import {connect} from 'react-redux';

import {GetData} from '../Actions/index';


class AddNewCategory extends React.Component {

    
    constructor(props){
        super(props);
        this.state = {name: '', description: ''};

    }
   
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.GetData(this.state);
    }

    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
       this.setState({ [e.target.name]: e.target.value });
      }


    render(){
        



        return(
        <div className="sixteen wide column">
            <h1>Add New Category</h1>
             <form className="ui form" onSubmit={this.handleOnSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input value={this.state.name} type="text" name="name" placeholder="Category Name" onChange={this.onChange}></input>
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea onChange={this.onChange} value={this.state.description}  name="description" rows="3"  placeholder="Enter an appropriate category description, please."></textarea>
                </div>           
                <button className="ui button" type="submit">Submit</button>
                </form>
        </div>        
        ) 
    }


}

const mapStateToProps = (state) => {
    console.log(state.categories);
    return {
        categories: state.categories
    };
};

export default  connect(mapStateToProps, {GetData})(AddNewCategory);