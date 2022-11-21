import React from "react";
import { Link } from "react-router-dom";

function Forget() {
  return (
    <div className="signContain">
      <div className="container">
        <div className="signMain">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12">
              <div className="singleFelid">
                <div className="innerform">
                  <h2 className="mb-3">OTP Form</h2>

                  <form action="">
                    <div className="mb-3">
                      <label htmlFor="opt" className="mb-1 form-label">
                        
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="otp"
                        placeholder="Enter Your OPT"
                      />
                    </div>

                    
                    <div className="flex-divSub-log d-flex justify-content-between align-items-center">
                      <div className="col-auto">
                        <Link to="/Login" className="btn btn-primary ">
                          Submit
                        </Link>
                        
                      </div>
                      <div className="col-auto loginbtn  ">
                        <Link to="/Login" className="btn btn-outline-primary ">
                          Back
                        </Link>
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

export default Forget;
