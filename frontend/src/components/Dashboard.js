import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session";
import "./Dashboard.css";

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

// const Dashboard = ({ logout, session }) => (
//   <>
//     <h1>Hi {session.username}!</h1>
//     <p>You are logged in</p>
//     <button onClick={logout}>Logout</button>
//   </>
// );

function Dashboard({ logout, session }) {
  let role = session.role;
  let permissions = 0;
  switch (role) {
    case "admin":
      permissions = 3;
      break;
    case "receptionist":
      permissions = 1;
      break;
    case "storemanager":
      permissions = 2;
      break;
    default:
      permissions = 0;
  }

  return (
    <div className="container pt-5">
      <div className="row text-right">
        <div className="col-6 col-md-3"></div>
        <div className="col-0 col-md-3"></div>
        <div className="col-0 col-md-3"></div>
        <div className="col-6 col-md-3">
          <div className="tile text-center">
            <h2>{session.username}</h2>
            <p>{session.role}</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-md-4 mb-3">
            <div className="tile text-center">
              <h5 className="text-center">Requests</h5>
              <div className="pb-2">
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <div className="tile text-center">
              <h5 className="text-center">Bills</h5>
              <div className="pb-2">
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <div className="tile text-center">
              <h5 className="text-center">Customer Info</h5>
              <div className="pb-2">
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <div className="tile text-center">
              <h5 className="text-center">Order</h5>
              <div className="pb-2">
                <button
                  disabled={permissions < 2 ? true : false}
                  className="btn btn-primary"
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <div className="tile text-center">
              <h5 className="text-center">Store Logs</h5>
              <div className="pb-2">
                <button
                  disabled={permissions < 2 ? true : false}
                  className="btn btn-primary"
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <div className="tile text-center">
              <h5 className="text-center">Salaries</h5>
              <div className="pb-2">
                <button disabled={permissions<3?true:false} className="btn btn-primary">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <button className="btn btn-lg btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
