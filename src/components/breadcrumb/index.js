import React from "react";
import { Link } from 'react-router-dom';

const Breadcrumb = ({ current }) => {
  return (
    <>
      {/* banner */}
      <div className="inner_page-banner one-img"></div>
      {/*//banner */}
      {/* short */}
      <div className="using-border py-3">
        <div className="inner_breadcrumb  ml-4">
          <ul className="short_ls">
            <li>
              <Link to="/">Home</Link>
              <span>/ /</span>
            </li>
            <li>{current}</li>
          </ul>
        </div>
      </div>
      {/* //short*/}
    </>
  );
};

export default Breadcrumb;
