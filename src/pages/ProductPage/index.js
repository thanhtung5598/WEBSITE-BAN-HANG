import React, { Component } from 'react';

// components
import Layout from './../../components/layouts/index';
import ProductContainer from './../../containers/ProductContainer/index';

class ProductPage extends Component {
  render() {
    return (
      <Layout>
        <ProductContainer />
      </Layout>
    );
  }
}

export default ProductPage;
