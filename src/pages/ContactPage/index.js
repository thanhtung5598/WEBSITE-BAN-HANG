import React, { Component } from 'react';

// components
import Layout from './../../components/layouts/index';
import ContactContainer from './../../containers/ContactContainer/index';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <ContactContainer />
      </Layout>
    );
  }
}

export default IndexPage;
