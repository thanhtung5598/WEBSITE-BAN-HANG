import React, { Fragment } from "react";
import Breadcrumb from './../../components/breadcrumb';
import { Link } from 'react-router-dom';

const ProductContainer = () => {
    return (
        <Fragment>
            <Breadcrumb current="Shop Now" />
            <section className="contact py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Toys Shop</h3>
                    <div className="row">
                        <div className="side-bar col-lg-3">
                            <div className="search-hotel">
                                <h3 className="agileits-sear-head">Search Here..</h3>
                                <form action="#" method="post">
                                    <input type="search" placeholder="Product name..." name="search" required />
                                    <input type="submit" defaultValue=" " />
                                </form>
                            </div>
                            {/* price range */}
                            <div className="range">
                                <h3 className="agileits-sear-head">Price range</h3>
                                <ul className="dropdown-menu6">
                                    <li>
                                        <div id="slider-range" />
                                        <input type="text" id="amount" style={{ border: 0, color: '#ffffff', fontWeight: 'normal' }} />
                                    </li>
                                </ul>
                            </div>
                            {/* //price range */}
                            {/*preference */}
                            <div className="left-side">
                                <h3 className="agileits-sear-head">Occasion</h3>
                                <ul>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Gift</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Kid Play</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Dolls</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Remot</span>
                                    </li>
                                </ul>
                            </div>
                            {/* // preference */}
                            {/* discounts */}
                            <div className="left-side">
                                <h3 className="agileits-sear-head">Discount</h3>
                                <ul>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">5% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">10% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">20% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">30% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">50% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">60% or More</span>
                                    </li>
                                </ul>
                            </div>
                            {/* //discounts */}
                            {/* reviews */}
                            <div className="customer-rev left-side">
                                <h3 className="agileits-sear-head">Customer Review</h3>
                                <ul>
                                    <li>
                                        <a href="./">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <span>5.0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="far fa-star" />
                                            <span>4.0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half" />
                                            <i className="far fa-star" />
                                            <span>3.5</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="far fa-star" />
                                            <i className="far fa-star" />
                                            <span>3.0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half" />
                                            <i className="far fa-star" />
                                            <i className="far fa-star" />
                                            <span>2.5</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* //reviews */}
                            {/* deals */}
                            <div className="deal-leftmk left-side">
                                <h3 className="agileits-sear-head">Special Deals</h3>
                                <div className="row special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="images/g1.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>toys(barbie)</h3>
                                        <a href="single.html">$575.00</a>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                <div className="row special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="images/g2.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>toy(todos)</h3>
                                        <a href="single.html">$480.00</a>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                <div className="row special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="images/g3.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>toys (Grey)</h3>
                                        <a href="single.html">$165.00</a>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                <div className="row special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="images/g2.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>Soft teddy </h3>
                                        <a href="single.html">$225.00</a>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                <div className="row special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="images/g4.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>pink bear</h3>
                                        <a href="single.html">$169.00</a>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            {/* //deals */}
                        </div>
                        <div className="left-ads-display col-lg-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                                    <div className="product-toys-info">
                                        <div className="men-pro-item">
                                            <div className="men-thumb-item">
                                                <img src="images/a1.jpg" className="img-thumbnail img-fluid" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <Link to="single" className="link-product-add-cart">Quick View</Link>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product">
                                                <div className="info-product-price">
                                                    <div className="grid_meta">
                                                        <div className="product_price">
                                                            <h4>
                                                                <a href="single.html">toys(barbie)</a>
                                                            </h4>
                                                            <div className="grid-price mt-2">
                                                                <span className="money ">$575.00</span>
                                                            </div>
                                                        </div>
                                                        <ul className="stars">
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="far fa-star-half-o" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="toys single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <input type="hidden" name="cmd" defaultValue="_cart" />
                                                            <input type="hidden" name="add" defaultValue={1} />
                                                            <input type="hidden" name="toys_item" defaultValue="toys(barbie)" />
                                                            <input type="hidden" name="amount" defaultValue={575.00} />
                                                            <button type="submit" className="toys-cart ptoys-cart">
                                                                <i className="fas fa-cart-plus" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                                    <div className="product-toys-info">
                                        <div className="men-pro-item">
                                            <div className="men-thumb-item">
                                                <img src="images/a2.jpg" className="img-thumbnail" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product">
                                                <div className="info-product-price">
                                                    <div className="grid_meta">
                                                        <div className="product_price">
                                                            <h4>
                                                                <a href="single.html">toy(todos)</a>
                                                            </h4>
                                                            <div className="grid-price mt-2">
                                                                <span className="money ">$480.00</span>
                                                            </div>
                                                        </div>
                                                        <ul className="stars">
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="far fa-star-half-o" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="toys single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <input type="hidden" name="cmd" defaultValue="_cart" />
                                                            <input type="hidden" name="add" defaultValue={1} />
                                                            <input type="hidden" name="toys_item" defaultValue="toy(todos)" />
                                                            <input type="hidden" name="amount" defaultValue={480.00} />
                                                            <button type="submit" className="toys-cart ptoys-cart">
                                                                <i className="fas fa-cart-plus" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                                    <div className="product-toys-info">
                                        <div className="men-pro-item">
                                            <div className="men-thumb-item">
                                                <img src="images/a3.jpg" className="img-thumbnail" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product">
                                                <div className="info-product-price">
                                                    <div className="grid_meta">
                                                        <div className="product_price">
                                                            <h4>
                                                                <a href="single.html">toys (Grey)</a>
                                                            </h4>
                                                            <div className="grid-price mt-2">
                                                                <span className="money ">$265.00</span>
                                                            </div>
                                                        </div>
                                                        <ul className="stars">
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star-half-o" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="toys single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <input type="hidden" name="cmd" defaultValue="_cart" />
                                                            <input type="hidden" name="add" defaultValue={1} />
                                                            <input type="hidden" name="toys_item" defaultValue="toys (Grey)" />
                                                            <input type="hidden" name="amount" defaultValue={265.00} />
                                                            <button type="submit" className="toys-cart ptoys-cart">
                                                                <i className="fas fa-cart-plus" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                                    <div className="product-toys-info">
                                        <div className="men-pro-item">
                                            <div className="men-thumb-item">
                                                <img src="images/a4.jpg" className="img-thumbnail" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product">
                                                <div className="info-product-price">
                                                    <div className="grid_meta">
                                                        <div className="product_price">
                                                            <h4>
                                                                <a href="single.html">toys (red)</a>
                                                            </h4>
                                                            <div className="grid-price mt-2">
                                                                <span className="money ">$67.00</span>
                                                            </div>
                                                        </div>
                                                        <ul className="stars">
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star-half-o" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="toys single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <input type="hidden" name="cmd" defaultValue="_cart" />
                                                            <input type="hidden" name="add" defaultValue={1} />
                                                            <input type="hidden" name="toys_item" defaultValue="toys (red)" />
                                                            <input type="hidden" name="amount" defaultValue={67.00} />
                                                            <button type="submit" className="toys-cart ptoys-cart">
                                                                <i className="fas fa-cart-plus" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                                    <div className="product-toys-info">
                                        <div className="men-pro-item">
                                            <div className="men-thumb-item">
                                                <img src="images/a3.jpg" className="img-thumbnail" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product">
                                                <div className="info-product-price">
                                                    <div className="grid_meta">
                                                        <div className="product_price">
                                                            <h4>
                                                                <a href="single.html">toys(blue)</a>
                                                            </h4>
                                                            <div className="grid-price mt-2">
                                                                <span className="money ">$340.00</span>
                                                            </div>
                                                        </div>
                                                        <ul className="stars">
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star-half-o" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="toys single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <input type="hidden" name="cmd" defaultValue="_cart" />
                                                            <input type="hidden" name="add" defaultValue={1} />
                                                            <input type="hidden" name="toys_item" defaultValue="toys(blue)" />
                                                            <input type="hidden" name="amount" defaultValue={340.00} />
                                                            <button type="submit" className="toys-cart ptoys-cart">
                                                                <i className="fas fa-cart-plus" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                                    <div className="product-toys-info">
                                        <div className="men-pro-item">
                                            <div className="men-thumb-item">
                                                <img src="images/a1.jpg" className="img-thumbnail" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product">
                                                <div className="info-product-price">
                                                    <div className="grid_meta">
                                                        <div className="product_price">
                                                            <h4>
                                                                <a href="single.html">toys(pink)</a>
                                                            </h4>
                                                            <div className="grid-price mt-2">
                                                                <span className="money ">$160.00</span>
                                                            </div>
                                                        </div>
                                                        <ul className="stars">
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star-half-o" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="toys single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <input type="hidden" name="cmd" defaultValue="_cart" />
                                                            <input type="hidden" name="add" defaultValue={1} />
                                                            <input type="hidden" name="toys_item" defaultValue="toys(pink)" />
                                                            <input type="hidden" name="amount" defaultValue={160.00} />
                                                            <button type="submit" className="toys-cart ptoys-cart">
                                                                <i className="fas fa-cart-plus" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                                    <div className="product-toys-info">
                                        <div className="men-pro-item">
                                            <div className="men-thumb-item">
                                                <img src="images/a2.jpg" className="img-thumbnail" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product">
                                                <div className="info-product-price">
                                                    <div className="grid_meta">
                                                        <div className="product_price">
                                                            <h4>
                                                                <a href="single.html">toy(todos)</a>
                                                            </h4>
                                                            <div className="grid-price mt-2">
                                                                <span className="money ">$480.00</span>
                                                            </div>
                                                        </div>
                                                        <ul className="stars">
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star-half-o" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="toys single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <input type="hidden" name="cmd" defaultValue="_cart" />
                                                            <input type="hidden" name="add" defaultValue={1} />
                                                            <input type="hidden" name="toys_item" defaultValue="toy(todos)" />
                                                            <input type="hidden" name="amount" defaultValue={480.00} />
                                                            <button type="submit" className="toys-cart ptoys-cart">
                                                                <i className="fas fa-cart-plus" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                                    <div className="product-toys-info">
                                        <div className="men-pro-item">
                                            <div className="men-thumb-item">
                                                <img src="images/a3.jpg" className="img-thumbnail" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product">
                                                <div className="info-product-price">
                                                    <div className="grid_meta">
                                                        <div className="product_price">
                                                            <h4>
                                                                <a href="single.html">toys (Grey)</a>
                                                            </h4>
                                                            <div className="grid-price mt-2">
                                                                <span className="money ">$265.00</span>
                                                            </div>
                                                        </div>
                                                        <ul className="stars">
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star-half-o" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="toys single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <input type="hidden" name="cmd" defaultValue="_cart" />
                                                            <input type="hidden" name="add" defaultValue={1} />
                                                            <input type="hidden" name="toys_item" defaultValue="toys (Grey)" />
                                                            <input type="hidden" name="amount" defaultValue={265.00} />
                                                            <button type="submit" className="toys-cart ptoys-cart">
                                                                <i className="fas fa-cart-plus" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                                    <div className="product-toys-info">
                                        <div className="men-pro-item">
                                            <div className="men-thumb-item">
                                                <img src="images/a4.jpg" className="img-thumbnail" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product">
                                                <div className="info-product-price">
                                                    <div className="grid_meta">
                                                        <div className="product_price">
                                                            <h4>
                                                                <a href="single.html">toys (Grey)</a>
                                                            </h4>
                                                            <div className="grid-price mt-2">
                                                                <span className="money ">$67.00</span>
                                                            </div>
                                                        </div>
                                                        <ul className="stars">
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fas fa-star" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="./">
                                                                    <i className="fa fa-star-half-o" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="toys single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <input type="hidden" name="cmd" defaultValue="_cart" />
                                                            <input type="hidden" name="add" defaultValue={1} />
                                                            <input type="hidden" name="toys_item" defaultValue="toys (Grey)" />
                                                            <input type="hidden" name="amount" defaultValue={67.00} />
                                                            <button type="submit" className="toys-cart ptoys-cart">
                                                                <i className="fas fa-cart-plus" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //show Now*/}
        </Fragment>
    )
}

export default ProductContainer;
