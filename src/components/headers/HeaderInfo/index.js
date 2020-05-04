import React from "react";
import { Link } from "react-router-dom";

const HeaderInfo = () => (
  <div>
    <div className="info-top-grid">
      <div className="info-contact-agile">
        <ul>
          <li>
            <span className="fas fa-phone-volume" />
            <p>+(000)123 4565 32</p>
          </li>
          <li>
            <span className="fas fa-envelope" />
            <p>
              <a href="mailto:info@example.com">info@example1.com</a>
            </p>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
    <div className="container-fluid">
      <div className="hedder-up row">
        <div className="col-lg-3 col-md-3 logo-head">
          <h1>
            <a className="navbar-brand" href="index.html">
              Toys-Shop
            </a>
          </h1>
        </div>
        <div className="col-lg-5 col-md-6 search-right">
          <form className="form-inline my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-lg-4 d-flex flex-row-reverse col-md-3 right-side-cart">
          <div className="cart-icons">
            <ul>
              <li className="toyscart toyscart2 cart cart box_1">
                <form action="checkout" method="post" className="last">
                  <input type="hidden" name="cmd" defaultValue="_cart" />
                  <input type="hidden" name="display" defaultValue={1} />
                  <button
                    className="top_toys_cart rounded"
                    type="submit"
                    name="submit"
                    value
                  >
                    <Link to="checkout">
                      <span className="fas fa-cart-arrow-down" />
                      <Link href="#" className="badge badge-danger">
                        10
                      </Link>
                    </Link>
                  </button>
                </form>
              </li>
              <li>
                <button
                  id="login"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Đăng Nhập
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderInfo;
