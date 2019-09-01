import React, { Component } from "react";
import "../../assets/css/auth.css";
import { Link, NavLink } from "react-router-dom";
import SignupForm from "../../components/SignupForm";

class SignupPage extends Component {
  render() {
    return (
      <div id="header">
        <div id="container">
          <div className="navigation">
            <Link to="/" className="app-logo">
              <p className="logo">Banka</p>
            </Link>
            <nav id="nav">
              <ul>
                <li>
                  <NavLink className="btn" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="btn" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <main id="signup">
            <section>
              <SignupForm />
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default SignupPage;
