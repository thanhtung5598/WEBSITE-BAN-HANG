import React, { Component } from 'react';

// components
import Layout from './../../components/layouts/index';
import SingleContainer from './../../containers/SingleContainer';

class SinglePage extends Component {
  render() {
    return (
      <Layout>
        <SingleContainer />
      </Layout>
    );
  }
}

export default SinglePage;
