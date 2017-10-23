import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { name } = this.state;
    this.setState({ name: '' })
    this.props.handleSubmit({ name });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          label='نام'
          placeholder='نام'
          onChange={e => this.setState({name: e.target.value}) } />
        <Button type="submit" positive fluid>ایجاد</Button>
      </Form>
    );
  }
};

export default SurveyForm;
