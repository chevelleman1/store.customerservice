import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'
import {connect} from 'react-redux';

import {DeleteCategory} from '../Actions/index';

class ConfirmDelete extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })

  close = () => this.setState({ open: false })

  handleDelete = (id) => {
    console.log(id)
    this.props.DeleteCategory(id)
  };

  render() {
    return (
      <div>
        <Button style={{float:"left"}} onClick={this.open}>Delete</Button>
        <Confirm confirmButton="Yes" 
        content='Are you sure you want to delete this category?  This cannot be undone.' open={this.state.open} onCancel={this.close} onConfirm={() => this.props.DeleteCategory(this.props.id)} />
      </div>
    )
  }
} 

export default connect(null, {DeleteCategory})(ConfirmDelete);