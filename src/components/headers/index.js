import React from 'react';
import HeaderInfo from "./HeaderInfo/index";
import Navbar from "./../navbar/index";
import Carousel from "./../carousel/index";

const Header = () => (
    <div className="header-outs" id="home">
        <div className="header-bar">
            <HeaderInfo />
            <Navbar />
        </div>
        <Carousel />
    </div>
)

export default Header;