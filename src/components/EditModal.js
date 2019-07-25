import React from 'react'
import { Button, Modal, Form, Message } from 'semantic-ui-react'
import {UpdateCategory} from '../Actions/index';
import {connect} from 'react-redux';


var showMsg = false;


class EditModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {name: '', description: '', id: this.props.id, success: false};
    
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.UpdateCategory(this.state);
    
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
   this.setState({ [e.target.name]: e.target.value });
  }
  onload = (e) => {

   this.setState({ id: e.target.value});
  }
  onOpenModal = (e) => {

   this.setState({ success: false});
  }
  onModalOpen =() =>{
      //hack to remove the 'successfully upated' message
    this.setState({name: '', description: '', success:false});
    showMsg = false;
    
  }

  static getDerivedStateFromProps(props, state) { 

    
    if (props.success !== state.success) {
      console.log('getDerived set state to success=true');
      return {
        success: props.success
      };
    }
    return null;
  }
  

render(){
  return(
    <Modal onMount={this.onModalOpen} closeIcon closeOnEscape={false} closeOnDimmerClick={false} trigger={<Button>Edit</Button>}>
    <Modal.Header>Edit The Category</Modal.Header>
    <Modal.Content>
    
    

    <div className="sixteen wide column">
             <Form id={"editForm"} className={"ui form " + (this.props.success == true && showMsg == true ? 'success': '')} onSubmit={this.handleOnSubmit}>
             <input value={this.props.id} type="hidden" name="id" onLoad={this.onload}></input>
                <div className="field">
                    <label><p>Current Category Name: <i>{this.props.name}</i></p></label>
                    <input value={this.state.name} type="text" name="name" placeholder="Category Name"  onChange={this.onChange} ></input>
                </div>
                <div className="field">
                    <label><p>Current Category Description: {this.props.description}</p></label>
                    <textarea value={this.state.description} onChange={this.onChange}  name="description" rows="3"  placeholder="Enter an appropriate category description, please."></textarea>
                </div>           
                <Message success header='Updated Successfully!' content="The category has been updated." />
                <button className="ui button" type="submit">Submit</button>
                
                
                
               {/*  <div style={{visibility: this.props.success1 == true ? 'visible': 'hidden'}} > 
                <i aria-hidden="true" className="check circle outline big icon"></i>
                  <h2>Successfully Saved.</h2>
                </div> */}
                </Form>
        </div>    


    </Modal.Content>
  </Modal>

  )
}


}

const mapStateToProps = (state) => {
 showMsg = true;
  return {
      success: state.updatedCategory
  };
};

export default connect(mapStateToProps, {UpdateCategory})(EditModal)
