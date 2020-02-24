import React from 'react';
import { Link } from 'react-router-dom';

const menus = [
    {
        name: "Home",
        to: "/"
    },
    {
        name: "About",
        to: "/product-list"
    },
    {
        name: "Service",
        to: "/product-list"
    },
    {
        name: "Shop Now",
        to: "/product-list"
    },
    {
        name: "Contact",
        to: "/product-list"
    }
];

const MenuCustom = ({ label, to }) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={to}>
                {label}
            </Link>
        </li>

    )
}

const showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
        result = menus.map((menu, index) => {
            return (
                <MenuCustom
                    key={index}
                    label={menu.name}
                    to={menu.to}
                />
            )
        });
    }
    return result;
}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                    {showMenu(menus)}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;