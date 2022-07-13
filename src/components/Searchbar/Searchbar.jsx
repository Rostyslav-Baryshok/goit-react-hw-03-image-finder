import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, FormStyle, Button, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  static propsTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchParams: '',
  };

  handleSearchChange = event => {
    this.setState({ searchParams: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchParams.trim() === '') {
      return toast.error('Input search query');
    }

    this.props.onSubmit(this.state.searchParams);
    this.setState({ searchParams: '' });
  };

  render() {
    return (
      <Header>
        <Formik>
          <Form onSubmit={this.handleSubmit}>
            <FormStyle>
              <Button type="submit">
                <ImSearch style={{ width: 20, height: 20, marginTop: 5 }} />
              </Button>

              <Input
                type="text"
                name="searchParams"
                value={this.state.searchParams}
                onChange={this.handleSearchChange}
                autocomplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </FormStyle>
          </Form>
        </Formik>
        <ToastContainer />
      </Header>
    );
  }
}

// export default Searchbar;
