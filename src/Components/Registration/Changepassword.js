import React from "react";
import { Link } from "react-router-dom";

function Changepassword() {
  return (
    <div className="signContain">
      <div className="container">
        <div className="signMain">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12">
              <div className="singleFelid">
                <div className="innerform">
                  <h2 className="mb-3">Change Your Password</h2>

                  <form action="">
                    <div className="mb-3">
                      <label htmlFor="newpass" className="mb-1 form-label">
                        New Password 
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="newpass"
                        placeholder="Enter Your New Password"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="otp" className="mb-1 form-label">
                      confirm password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="otp"
                        placeholder="Enter Your confirm password"
                      />
                    </div>
                    <div className="flex-divSub-log d-flex justify-content-between align-items-center">
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary ">
                          Submit
                        </button>
                      </div>
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
