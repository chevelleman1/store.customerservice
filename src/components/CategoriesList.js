import React from 'react';
import {GetAllCategories, DeleteCategory, UpdateCategory} from '../Actions/index';
import {connect} from 'react-redux';

import '../../src/App.scss';
import EditModal from './EditModal';
import ConfirmDelete from './ConfirmDelete';
import Header from './Header';


class CategoriesList extends React.Component {


    componentDidMount(){
        this.props.GetAllCategories()
    }
    handleOnDelete = (event) => {
        event.preventDefault();
        this.props.DeleteCategory(event.target.id);        
    }
    
    handleOnEdit = (event) => {
        event.preventDefault();
       
        //this.props.UpdateCategory(event.target.id);
    }


    render(){        
        return(<div className="sixteen wide column">
                <div >
                <table  className="ui celled table">
                    <thead>
                        <tr><th>Id</th>
                        <th>Category Name</th>
                        <th>Category Description</th>
                        <th>Edit/ Delete</th>
                    </tr></thead>
                   { <tbody>
                    
                    {this.props.categories.map( apidata => ( 
                        <tr key={apidata.id}>
                            <td className="red" data-label="id">{apidata.id}</td>
                            <td data-label="name">{apidata.name}</td>
                            <td data-label="description">{apidata.description}</td>
                            <td data-label="edit">
                                <ConfirmDelete {...apidata}></ConfirmDelete>
                                {/* <button id={apidata.id} onClick={this.handleOnDelete} className="ui basic button">Delete</button>               */}                  
                                <EditModal {...apidata}></EditModal>
                                
                                
                            </td>
                        </tr> 
                            ))}

                        
                    </tbody>}
                </table>

                <div className="ui modal">
                                <i className="close icon"></i>
                                <div className="header">
                                    Profile Picture
                                </div>
                                <div className="image content">
                                    <div className="ui medium image">
                                    <img src="/images/avatar/large/chris.jpg"></img>
                                    </div>
                                    <div className="description">
                                    <div className="ui header">We've auto-chosen a profile image for you.</div>
                                    <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
                                    <p>Is it okay to use this photo?</p>
                                    </div>
                                </div>
                                <div className="actions">
                                    <div className="ui black deny button">
                                    Nope
                                    </div>
                                    <div className="ui positive right labeled icon button">
                                    Yep, that's me
                                    <i className="checkmark icon"></i>
                                    </div>
                                </div>
                                </div>
                   
                </div>


            </div>); 
    }


}

const mapStateToProps = (state) => {
    
    return {
        categories: state.categories.data !== undefined ? state.categories.data : []
    };
};

export default connect(mapStateToProps, {GetAllCategories, DeleteCategory, UpdateCategory})(CategoriesList);