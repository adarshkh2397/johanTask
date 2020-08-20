import React from "react";
import { Link } from "react-router-dom";
import loginLogo from "../images/login.png"
import signupLogo from "../images/signup.png"
import dashboardLogo from "../images/dashboard.png"


import './Welcome.css'

export default () => (
  // <>
  //   <h1>Welcome!</h1>
  //   <Link to="/login">Login</Link>
  //   <Link to="/signup">Signup</Link>
  //   <Link to="/dashboard">Dashboard</Link>
  // </>
<div className="container pt-5">

<div className="jumbotron">
  <div className="container">
    <h1 className="display-4"> Johan Bookstore</h1>
    <p className="lead">A room without books is like a body without a soul.</p>
  </div>
</div>

  <div className="row">
    <div className = "col-12 col-md-4 pb-4">
      <div className="card">
        <div className="text-center">
        <img className="img-responsive rounded mx-auto mt-3 d-block" src={loginLogo}  alt="login logo" height="100" width="100"  />
        </div>
        <div className="card-body text-center">
          <p className="card-title">Already a Member ?</p>
          <Link to="/login">
          <button className="btn btn-outline-success"><strong>Login</strong></button>
        </Link>
        </div>  
      </div>
    </div>

    <div className = "col-12 col-md-4 pb-4">
      <div className="card">
        <img className="img-responsive rounded mx-auto mt-3 d-block" src={signupLogo}  alt="login logo" height="100" width="100" />
        <div className="card-body text-center">
          <p className="card-title">New Member</p>
          <Link to="/signup">
          <button className="btn btn-outline-warning"><strong>Signup</strong></button>
        </Link>
        </div>  
      </div>
    </div>

    <div className = "col-12 col-md-4 pb-4">
      <div className="card">
        <img className="img-responsive rounded mx-auto mt-3 d-block" src={dashboardLogo}  alt="login logo" height="100" width="100" />
        <div className="card-body text-center">
          <p className="card-title">Already Logged In !</p>
          <Link to="/dashboard">
          <button className="btn btn-outline-info"><strong>Dashboard</strong></button>
        </Link>
        </div>  
      </div>
    </div>
</div>
</div>
);