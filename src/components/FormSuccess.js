import React from 'react'
import { Form, Message } from 'semantic-ui-react'

const FormSuccess = () => (
  <Form success>
    <Form.Input label='Email' placeholder='joe@schmoe.com' />
    <Message success header='Edit Successful!' content="The category has been updated." />
    <Button>Submit</Button>
  </Form>
)

export default FormSuccess
