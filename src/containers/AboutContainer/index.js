import React, { Fragment } from 'react';

const AboutContainer = () => {
  return (
    <Fragment>
      {/* banner */}
      <div className="inner_page-banner one-img"></div>
      {/*//banner */}
      {/* short */}
      <div className="using-border py-3">
        <div className="inner_breadcrumb  ml-4">
          <ul className="short_ls">
            <li>
              <a href="index.html">Home</a>
              <span>/ /</span>
            </li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div>
        {/* //short*/}
        {/*About */}
        <section className="about py-lg-4 py-md-3 py-sm-3 py-3">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              About Us
            </h3>
            <div className="about-innergrid-agile text-center">
              <h4>Welcome To Our Store</h4>
              <p className="mb-3">
                {' '}
                velit sagittis vehicula. Duis posuere ex in mollis iaculis.
                Suspendisse tincidunt velit sagittis vehicula. Duis posuere
                velit sagittis vehicula. Duis posuere ex in mollis iaculis.
                Suspendisse tincidunt velit sagittis vehicula. Duis posuere
              </p>
              <div className=" img-toy-w3l-top"></div>
            </div>
            <div className="about-sub-inner text-center mt-lg-4 mt-3">
              <h4>A faster and better best to shop</h4>
              <div className="row">
                <div className="col-lg-4 col-md-4 abut-gride">
                  <span className="fas fa-truck" />
                  <h5>Shipping</h5>
                  <p className="mt-3">
                    {' '}
                    velit sagittis vehicula. Duis posuere ex in mollis iaculis.
                    Suspendisse tincidunt
                  </p>
                </div>
                <div className="col-lg-4 col-md-4 abut-gride">
                  <span className="fas fa-phone-volume" />
                  <h5>Support</h5>
                  <p className="mt-3">
                    {' '}
                    velit sagittis vehicula. Duis posuere ex in mollis iaculis.
                    Suspendisse tincidunt
                  </p>
                </div>
                <div className="col-lg-4 col-md-4 abut-gride">
                  <span className="fas fa-undo" />
                  <h5> Return</h5>
                  <p className="mt-3">
                    {' '}
                    velit sagittis vehicula. Duis posuere ex in mollis iaculis.
                    Suspendisse tincidunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//about */}
        {/*Customers Review */}
        <section className="clients py-lg-4 py-md-3 py-sm-3 py-3" id="clients">
          <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 className="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              Customers Review
            </h3>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-lg-6 clients-w3layouts-row">
                      <div className="least-w3layouts-text-gap">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 news-img">
                            <img
                              src="images/t1.jpg"
                              alt=""
                              className="image-fluid"
                            />
                          </div>
                          <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                            <h4>Milky Deo</h4>
                            <span className="mt-2">Duis posuere</span>
                          </div>
                          <div className="mt-3 news-agile-text">
                            <img
                              src="images/tt1.jpg"
                              alt=""
                              className="image-fluid"
                            />
                            <p className="mt-3">
                              <span className="fas fa-quote-left" /> velit
                              sagittis vehicula. Duis posuere ex in mollis
                              iaculis. Suspendisse tincidunt velit sagittis
                              vehicula. Duis posuere velit sagittis vehicula.
                              Duis posuere{' '}
                              <span className="fas fa-quote-right" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 clients-w3layouts-row">
                      <div className="least-w3layouts-text-gap">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 news-img">
                            <img
                              src="images/t2.jpg"
                              alt=""
                              className="image-fluid"
                            />
                          </div>
                          <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                            <h4>Sam Deo</h4>
                            <span className="mt-2">Duis posuere</span>
                          </div>
                          <div className="mt-3 news-agile-text">
                            <img
                              src="images/tt2.jpg"
                              alt=""
                              className="image-fluid"
                            />
                            <p className="mt-3">
                              <span className="fas fa-quote-left" /> velit
                              sagittis vehicula. Duis posuere ex in mollis
                              iaculis. Suspendisse tincidunt velit sagittis
                              vehicula. Duis posuere velit sagittis vehicula.
                              Duis posuere{' '}
                              <span className="fas fa-quote-right" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-6 clients-w3layouts-row">
                      <div className="least-w3layouts-text-gap">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 news-img">
                            <img
                              src="images/t1.jpg"
                              alt=""
                              className="image-fluid"
                            />
                          </div>
                          <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                            <h4>Milky Deo</h4>
                            <span className="mt-2">Duis posuere</span>
                          </div>
                          <div className="mt-3 news-agile-text">
                            <img
                              src="images/tt1.jpg"
                              alt=""
                              className="image-fluid"
                            />
                            <p className="mt-3">
                              <span className="fas fa-quote-left" /> velit
                              sagittis vehicula. Duis posuere ex in mollis
                              iaculis. Suspendisse tincidunt velit sagittis
                              vehicula. Duis posuere velit sagittis vehicula.
                              Duis posuere{' '}
                              <span className="fas fa-quote-right" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 clients-w3layouts-row">
                      <div className="least-w3layouts-text-gap">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 news-img">
                            <img
                              src="images/t3.jpg"
                              alt=""
                              className="image-fluid"
                            />
                          </div>
                          <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                            <h4>Sam Deo</h4>
                            <span className="mt-2">Duis posuere</span>
                          </div>
                          <div className="mt-3 news-agile-text">
                            <img
                              src="images/tt1.jpg"
                              alt=""
                              className="image-fluid"
                            />
                            <p className="mt-3">
                              <span className="fas fa-quote-left" /> velit
                              sagittis vehicula. Duis posuere ex in mollis
                              iaculis. Suspendisse tincidunt velit sagittis
                              vehicula. Duis posuere velit sagittis vehicula.
                              Duis posuere{' '}
                              <span className="fas fa-quote-right" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-6 clients-w3layouts-row">
                      <div className="least-w3layouts-text-gap">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 news-img">
                            <img
                              src="images/t2.jpg"
                              alt=""
                              className="image-fluid"
                            />
                          </div>
                          <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                            <h4>Milky Deo</h4>
                            <span className="mt-2">Duis posuere</span>
                          </div>
                          <div className="mt-3 news-agile-text">
                            <img
                              src="images/tt2.jpg"
                              alt=""
                              className="image-fluid"
                            />
                            <p className="mt-3">
                              <span className="fas fa-quote-left" /> velit
                              sagittis vehicula. Duis posuere ex in mollis
                              iaculis. Suspendisse tincidunt velit sagittis
                              vehicula. Duis posuere velit sagittis vehicula.
                              Duis posuere{' '}
                              <span className="fas fa-quote-right" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 clients-w3layouts-row">
                      <div className="least-w3layouts-text-gap">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 news-img">
                            <img
                              src="images/t3.jpg"
                              alt=""
                              className="image-fluid"
                            />
                          </div>
                          <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                            <h4>Sam Deo</h4>
                            <span className="mt-2">Duis posuere</span>
                          </div>
                          <div className="mt-3 news-agile-text">
                            <img
                              src="images/tt1.jpg"
                              alt=""
                              className="image-fluid"
                            />
                            <p className="mt-3">
                              <span className="fas fa-quote-left" /> velit
                              sagittis vehicula. Duis posuere ex in mollis
                              iaculis. Suspendisse tincidunt velit sagittis
                              vehicula. Duis posuere velit sagittis vehicula.
                              Duis posuere{' '}
                              <span className="fas fa-quote-right" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/*//Customers Review */}
      </div>
    </Fragment>
  );
};

export default AboutContainer;
