import React, { Fragment } from "react";

const ServiceContainer = () => {
    return (
        <Fragment>
            {/* banner */}
            <div className="inner_page-banner one-img">
            </div>
            {/*//banner */}
            {/* short */}
            <div className="using-border py-3">
                <div className="inner_breadcrumb  ml-4">
                    <ul className="short_ls">
                        <li>
                            <a href="index.html">Home</a>
                            <span>/ /</span>
                        </li>
                        <li>Service</li>
                    </ul>
                </div>
                {/* //short*/}
                {/*service */}
                <section className="service py-lg-4 py-md-3 py-sm-3 py-3">
                    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                        <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Services</h3>
                        <div className="row text-center">
                            <div className="col-lg-4 col-md-6 abut-gride">
                                <span className="fas fa-truck" />
                                <h5>Shipping</h5>
                                <p className="mt-3"> velit sagittis vehicula. Duis posuere
                                  ex in mollis iaculis. Suspendisse tincidunt
          </p>
                            </div>
                            <div className="col-lg-4 col-md-6 abut-gride">
                                <span className="fas fa-phone-volume" />
                                <h5>Support</h5>
                                <p className="mt-3"> velit sagittis vehicula. Duis posuere
                                  ex in mollis iaculis. Suspendisse tincidunt
          </p>
                            </div>
                            <div className="col-lg-4 col-md-6 abut-gride">
                                <span className="fas fa-undo" />
                                <h5> Return</h5>
                                <p className="mt-3"> velit sagittis vehicula. Duis posuere
                                  ex in mollis iaculis. Suspendisse tincidunt
          </p>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-4 mt-3 abut-gride">
                                <span className="fas fa-money-bill-alt" />
                                <h5>Online Cash</h5>
                                <p className="mt-3"> velit sagittis vehicula. Duis posuere
                                  ex in mollis iaculis. Suspendisse tincidunt
          </p>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-4 mt-3 abut-gride">
                                <span className="fas fa-exchange-alt" />
                                <h5>Exchange</h5>
                                <p className="mt-3"> velit sagittis vehicula. Duis posuere
                                  ex in mollis iaculis. Suspendisse tincidunt
          </p>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-4 mt-3 abut-gride">
                                <span className="fas fa-thumbs-up" />
                                <h5>Quality</h5>
                                <p className="mt-3"> velit sagittis vehicula. Duis posuere
                                  ex in mollis iaculis. Suspendisse tincidunt
          </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*//service */}
            </div>
        </Fragment>
    )
}

export default ServiceContainer;