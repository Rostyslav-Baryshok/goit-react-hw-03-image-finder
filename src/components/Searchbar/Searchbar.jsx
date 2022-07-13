import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  FormStyle,
  Button,
  BtnContent,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  handleInputChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      alert('Typing something!');
      return;
    }

    onSubmit(query);
  };

  render() {
    return (
      <Header>
        <Formik initialValues={{ query: '' }}>
          <Form onSubmit={this.handleSubmit}>
            <FormStyle>
              <Button type="submit">
                <ImSearch style={{ width: 20, height: 20, marginTop: 5 }} />
                <BtnContent>Search</BtnContent>
              </Button>

              <Input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handleInputChange}
              />
            </FormStyle>
          </Form>
        </Formik>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
