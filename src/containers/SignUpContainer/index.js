import React from "react";
import Breadcrumb from './../../components/breadcrumb';

const SignUpContainer = () => {
  return (
    <>
      <Breadcrumb current="Sign Up" />
      <section className="signup py-lg-4 py-md-3 py-sm-3 py-3">
        <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
          <form style={{ border: "1px solid #ccc" }}>
            <div className="container">
              <div
                className="form__header text-center"
                style={{ backgroundColor: "#ee9ca7", padding: "20px" }}
              >
                <h1>Sign Up</h1>
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
              <label htmlFor="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                required
              />
              <div className="clearfix">
                <button type="button" className="cancelbtn">
                  Cancel
                </button>
                <button type="submit" className="signupbtn">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUpContainer;
