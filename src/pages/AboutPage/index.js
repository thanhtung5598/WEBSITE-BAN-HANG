import React, { Component } from 'react';

// components
import Layout from './../../components/layouts/index';
import AboutContainer from './../../containers/AboutContainer/index';

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <AboutContainer />
      </Layout>
    );
  }
}

export default AboutPage;
