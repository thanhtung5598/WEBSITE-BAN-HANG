import React, { Component } from 'react';

// components
import Layout from './../../components/layouts/index';
import ProductContainer from './../../containers/ProductContainer/index';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <ProductContainer />
      </Layout>
    );
  }
}

export default IndexPage;
