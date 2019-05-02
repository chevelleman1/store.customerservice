import React from 'react';
import {CallApi} from '../Actions/index';
import {connect} from 'react-redux';

import '../../src/App.scss';


class CategoriesList extends React.Component {


    componentDidMount(){
        this.props.CallApi()
    }


    render(){        
        return(<div className="sixteen wide column">


                <div >
                <table  className="ui celled table">
                    <thead>
                        <tr><th>Id</th>
                        <th>Category Name</th>
                        <th>Category Description</th>
                    </tr></thead>
                    <tbody>

                    {this.props.categories.map( apidata => ( 
                        <tr key={apidata.id}>
                            <td className="red" data-label="id">{apidata.id}</td>
                            <td data-label="name">{apidata.name}</td>
                            <td data-label="description">{apidata.description}</td>
                        </tr> 
                            ))}

                        
                    </tbody>
                </table>
                   
                </div>


            </div>); 
    }


}

const mapStateToProps = (state) => {
    console.log(state.categories);
    return {
        categories: state.categories
    };
};

export default connect(mapStateToProps, {CallApi})(CategoriesList);