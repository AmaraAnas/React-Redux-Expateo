import React from 'react';
import { Container, Header, Button, Checkbox, Form } from 'semantic-ui-react';

const SimpleLogin = () => (
  <Container text>
    <Header as="h2">Header</Header>
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
);

export default SimpleLogin;
