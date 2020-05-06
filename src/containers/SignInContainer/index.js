import React from "react";
import { Link } from "react-router-dom";
const SignInContainer = () => {
  return (
    <>
      <div className="inner_page-banner one-img"></div>
      {/*//banner */}
      {/* short */}
      <div className="using-border py-3">
        <div className="inner_breadcrumb  ml-4">
          <ul className="short_ls">
            <li>
              <Link to="/">Home</Link>
              <span className="mx-2"> / /</span>
            </li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
      <div>
        {/* //short*/}
        {/*Sign In */}
        <section className="signin py-lg-4 py-md-3 py-sm-3 py-3">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <section className="signup py-lg-4 py-md-3 py-sm-3 py-3">
              <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                <form style={{ border: "1px solid #ccc" }}>
                  <div className="container">
                    <div
                      className="form__header text-center"
                      style={{ backgroundColor: "#ee9ca7", padding: "20px" }}
                    >
                      <h1>Sign In</h1>
                      <p>Please fill in this form to create an account.</p>
                    </div>
                    <hr />
                    <label htmlFor="email">
                      <b>Email</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      name="email"
                      required
                    />
                    <label htmlFor="psw">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="psw"
                      required
                    />

                    <label>
                      <input
                        type="checkbox"
                        name="remember"
                        style={{ marginBottom: 15 }}
                      />{" "}
                      Remember me
                    </label>
                    <div className="clearfix">
                      <button type="submit" className="signinbtn">
                        Sign In
                      </button>
                      <p className="text-center p-3">
                        If you don't have an account,{" "}
                        <Link to="signup" style={{ color: "#f953c6" }}>
                          register your account
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignInContainer;
