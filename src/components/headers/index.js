import React from 'react';
import HeaderInfo from "./HeaderInfo/index";
import Navbar from "./navbar/index";

const Header = ({Carousel}) => (
    <div className="header-outs" id="home">
        <div className="header-bar">
            <HeaderInfo />
            <Navbar />
        </div>
        {Carousel && <Carousel />}
    </div>
)

export default Header;