import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/session";
import './Signup.css';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

const Login = ({ errors, login }) => {

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    login(user);
  }

  // return (
  //   <>
  //     <h1>Login</h1>
  //     <p>{errors}</p>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Email:
  //         <input type="email" name="email" />
  //       </label>
  //       <label>
  //         Password:
  //         <input type="password" name="password" />
  //       </label>
  //       <input type="submit" value="Submit" />
  //     </form>
  //     <Link to="/signup">Signup</Link>
  //   </>
  // );
  return (
    <div className="container pt-5 login">
      <form onSubmit={handleSubmit} className="col-lg-6 offset-lg-3 sketchy ">
        <h1>Login</h1>
        <hr />
       <p>{errors}</p>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            placeholder="Email"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <div className="form-group text-center">
          <button className="btn btn-success" type="submit">
            Login
          </button>
        </div>
      </form>
      <p className="text-center">
        {" "}
        Not a member?{" "}
        <Link to="/signup">
          <button className="btn btn-sm btn-success">Signup</button>
        </Link>{" "}
      </p>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);