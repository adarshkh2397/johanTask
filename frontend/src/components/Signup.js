import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../actions/session";
import './Signup.css'

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

const Signup = ({ errors, signup }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: e.target[0].value,
      email: e.target[1].value,
      role: e.target[3].value,
      password: e.target[2].value
    };
    
    signup(user);
  };

  // return (
  //   <>
  //     <h1>Signup</h1>
  //     <p>{errors}</p>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Username:
  //         <input type="text" name="username" />
  //       </label>
  //       <label>
  //         Email:
  //         <input type="email" name="email" />
  //       </label>
  //       <label>
  //         Role:
  //         <input type="text" name="role" />
  //       </label>
  //       <label>
  //         Password:
  //         <input type="password" name="password" />
  //       </label>
  //       <input type="submit" value="Submit" />
  //     </form>
  //     <Link to="/login">Login</Link>
  //   </>
  // );
  return (
    <div className="container pt-5">
      <form onSubmit={handleSubmit} className="col-lg-6 offset-lg-3 sketchy" id="one">
        <div className="form-group">
        <h1>Signup</h1>
        <hr />
        <p>{errors}</p>
          <label htmlFor="exampleInputLabel1">Username</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="exampleInputLabel1"
            placeholder="Username"
          ></input>
        </div>
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

        <div className="form-group mt-4">
            <select name="role" id="role" className="form-control" defaultValue="receptionist">
             <option value="" disabled>Role</option>
              <option value="admin">Admin</option>
              <option value="storemanager">Store Manager</option>
              <option value="receptionist">Receptionist</option>
            </select>
        </div>
        <div className="form-group text-right">
          <button type="submit" value="Submit" className="btn btn-success">
            Sign Up{" "}
          </button>
        </div>
      </form>
      <p className="text-center">
        {" "}
        Already Signed Up?{" "}
        <Link to="/login">
          <button className="btn btn-sm btn-success">Login</button>
        </Link>{" "}
      </p>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);