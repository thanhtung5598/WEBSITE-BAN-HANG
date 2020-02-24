import React, { Fragment } from 'react';

// Component
import Header from "./../headers/index";
import Footer from "./../footers/index";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
        {props.children}
      <Footer />
    </Fragment>
  )
}

export default Layout;