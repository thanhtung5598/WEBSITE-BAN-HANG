import React, { Component } from 'react';

// components
import Layout from './../../components/layouts/index';
import Carousel from './../../components/carousel/index';
import IndexContainer from './../../containers/IndexContainer/index';

class IndexPage extends Component {
  render() {
    return (
      <Layout Carousel={Carousel}>
        <IndexContainer />
      </Layout>
    );
  }
}

export default IndexPage;
