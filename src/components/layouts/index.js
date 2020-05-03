import React, { Fragment } from 'react';
import Proptypes from 'prop-types';

// Component
import Header from './../headers/index';
import Footer from './../footers/index';

const Layout = props => {
  return (
    <Fragment>
      <Header {...props} />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;

Layout.propTypes = {
  children: Proptypes.element
};
