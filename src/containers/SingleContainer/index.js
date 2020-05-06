import React from "react";
import Breadcrumb from './../../components/breadcrumb';

const SingleContainer = () => {
  return (
    <div>
      <Breadcrumb current="Single Page" />
      {/*/shop*/}
      <section className="banner-bottom py-lg-5 py-3">
        <div className="container">
          <div className="inner-sec-shop pt-lg-4 pt-3">
            <div className="row">
              <div className="col-lg-4 single-right-left ">
                <div className="grid images_3_of_2">
                  <div className="flexslider1">
                    <ul className="slides">
                      <li data-thumb="images/f2.jpg">
                        <div className="thumb-image">
                          {" "}
                          <img
                            src="images/f2.jpg"
                            data-imagezoom="true"
                            className="img-fluid"
                            alt=" "
                          />{" "}
                        </div>
                      </li>
                    </ul>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 single-right-left simpleCart_shelfItem">
                <h3>Soft Teddy Bear (Brown)</h3>
                <p>
                  <span className="item_price">$650</span>
                  <del>$1,199</del>
                </p>
                <div className="rating1">
                  <ul className="stars">
                    <li>
                      <a href="./" alt="" >
                        <i className="fa fa-star" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="." alt="">
                        <i className="fa fa-star" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="." alt="">
                        <i className="fa fa-star" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="." alt="">
                        <i className="fa fa-star-half-o" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="." alt="">
                        <i className="fa fa-star-o" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="description">
                  <h5>
                    Check delivery, payment options and charges at your location
                  </h5>
                  <form action="#" method="post">
                    <input
                      className="form-control"
                      type="text"
                      name="Email"
                      placeholder="Please enter..."
                      required
                    />
                    <input type="submit" defaultValue="Check" />
                  </form>
                </div>
                <div className="color-quality">
                  <div className="color-quality-right">
                    <h5>Size :</h5>
                    <select
                      id="country1"
                      onchange="change_country(this.value)"
                      className="frm-field required sect"
                    >
                      <option value="null">2 Feet</option>
                      <option value="null">3 Feet</option>
                      <option value="null">4 Feet</option>
                      <option value="null">5 Feet</option>
                    </select>
                  </div>
                </div>
                <div className="occasion-cart">
                  <div className="toys single-item singlepage">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="toys_item"
                        defaultValue="Farenheit"
                      />
                      <input type="hidden" name="amount" defaultValue={575.0} />
                      <button
                        type="submit"
                        className="toys-cart ptoys-cart add"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleContainer;
