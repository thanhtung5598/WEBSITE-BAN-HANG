import React, { Fragment } from "react";

const CheckoutContainer = () => {
  return (
    <Fragment>
      <div>
        {/* banner */}
        <div className="inner_page-banner one-img"></div>
        {/* short */}
        <div className="using-border py-3">
          <div className="inner_breadcrumb  ml-4">
            <ul className="short_ls">
              <li>
                <a href="index.html">Home</a>
                <span>/ /</span>
              </li>
              <li>Checkout</li>
            </ul>
          </div>
        </div>
        {/* //short*/}
        {/*Checkout*/}
        {/* //banner */}
        {/* top Products */}
        <section className="checkout py-lg-4 py-md-3 py-sm-3 py-3">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="shop_inner_inf">
              <div className="privacy about">
                <h3>
                  Chec<span>kout</span>
                </h3>
                <div className="checkout-right">
                  <h4>
                    Your shopping cart contains: <span>3 Products</span>
                  </h4>
                  <table className="timetable_sub">
                    <thead>
                      <tr>
                        <th>SL No.</th>
                        <th>Product</th>
                        <th>Quality</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="rem1">
                        <td className="invert">1</td>
                        <td className="invert-image">
                          <a href="single.html">
                            <img
                              src="images/f1.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                        </td>
                        <td className="invert">
                          <div className="quantity">
                            <div className="quantity-select">
                              <div className="entry value-minus">&nbsp;</div>
                              <div className="entry value">
                                <span>1</span>
                              </div>
                              <div className="entry value-plus active">
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="invert">Bella Toes</td>
                        <td className="invert">$675.00</td>
                        <td className="invert">
                          <div className="rem">
                            <div className="close1"> </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="rem2">
                        <td className="invert">2</td>
                        <td className="invert-image">
                          <a href="single.html">
                            <img
                              src="images/f2.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                        </td>
                        <td className="invert">
                          <div className="quantity">
                            <div className="quantity-select">
                              <div className="entry value-minus">&nbsp;</div>
                              <div className="entry value">
                                <span>1</span>
                              </div>
                              <div className="entry value-plus active">
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="invert">Red Bellies</td>
                        <td className="invert">$325.00</td>
                        <td className="invert">
                          <div className="rem">
                            <div className="close2"> </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="rem3">
                        <td className="invert">3</td>
                        <td className="invert-image">
                          <a href="single.html">
                            <img
                              src="images/f3.jpg"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                        </td>
                        <td className="invert">
                          <div className="quantity">
                            <div className="quantity-select">
                              <div className="entry value-minus">&nbsp;</div>
                              <div className="entry value">
                                <span>1</span>
                              </div>
                              <div className="entry value-plus active">
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="invert">Chikku Loafers</td>
                        <td className="invert">$405.00</td>
                        <td className="invert">
                          <div className="rem">
                            <div className="close3"> </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="checkout-left">
                  <div className="col-md-6 offset-md-6 checkout-left-basket">
                    <h4>Continue to basket</h4>
                    <ul>
                      <li>
                        Product1 <i>-</i> <span>$675.00 </span>
                      </li>
                      <li>
                        Product2 <i>-</i> <span>$325.00 </span>
                      </li>
                      <li>
                        Product3 <i>-</i> <span>$405.00 </span>
                      </li>
                      <li>
                        Total Service Charges <i>-</i> <span>$55.00</span>
                      </li>
                      <li>
                        Total <i>-</i> <span>$1405.00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="checkout-right-basket">
                    <a href="payment.html">Make a Payment </a>
                  </div>
                  <div className="clearfix"> </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            {/* //top products */}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default CheckoutContainer;
