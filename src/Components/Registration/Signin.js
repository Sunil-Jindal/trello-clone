import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [otp, setOtp] = useState();

  // navigate state
  const navigate = useNavigate();

  //   error show start
  const [error, setError] = useState(false);
  const [nameApiErr, setNameApiErr] = useState();
  const [phoneApiErr, setPhoneApiErr] = useState();
  const [addressApiErr, setAddressApiErr] = useState();
  const [emailApiErr, setemailApiErr] = useState(); 
  const [passApiErr, setPassApiErr] = useState();
  //   error show end

  // if user already exits then redireact to home/ dashborad
  useEffect(() => {
    const authCheck = localStorage.getItem("user");

    if (authCheck) {
      navigate("/Borad");
    }
  });

  //   setError(true)
  const formHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !address || !password) {
      setError(true);
      return false;
    } else {
      if (!(phone.length >= 10 && phone.length <= 13)) {
        setPhoneApiErr("Phone must be at least 10 and most 13 characters long");
        return false;
      } else if(name.length <= 3){
        setNameApiErr("Name must be at least 3 characters long")
      }else if(address.length <= 5){
        setAddressApiErr("Address must be at least 5 characters long")
      }else if(password.length <= 3){
        setPassApiErr("Password must be at least 4 characters long")
      }
      else {
        let otprendom = Math.floor(1000 + Math.random() * 9000);
        setOtp(otprendom);

        try {
          let collectData = await fetch("http://localhost:3000/adduser", {
            method: "post",
            mode: "cors", // or without this line
            body: JSON.stringify({
              name,
              email,
              phone,
              address,
              password,
              otp,
            }),
            headers: {
              "content-type": "application/json",
            },
          });
          // console.log(collectData.ok);
          collectData = await collectData.json();

          console.log(collectData);
          localStorage.setItem("users", JSON.stringify(collectData));
          // set api error in state star
          // console.log(collectData.errors.email.message);
          if (collectData.errors.email.message) {
            setemailApiErr(collectData.errors.email.message);
          }

          if (!collectData.errors) {
            navigate("/login");
          }

          
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <>
      <div className="signContain">
        <div className="container">
          <div className="signMain">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-6">
                <div className="formD">
                  <div className="innerform">
                    <h2 className="mb-3">Registration Form</h2>

                    <form action="">
                      <div className="mb-3">
                        <label htmlFor="name" className="mb-1 form-label">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={name || ""}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          id="name"
                          placeholder="Enter Your Name"
                        />
                        {error && !name && <p>Please Enter The Name </p>}
                        <p>{nameApiErr}</p>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="mb-1 form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email || ""}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          id="email"
                          required={true}
                          placeholder="Enter Your Email address"
                        />
                        {error && !email && <p>Please Enter The Email </p>}
                        <p>{emailApiErr}</p>
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="phoneNumber"
                          className="mb-1 form-label"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          value={phone || ""}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-control"
                          id="phoneNumber"
                          placeholder="Enter Your Phone Number"
                        />
                        {error && !phone && <p>Please Enter The Phone </p>}
                        <p>{phoneApiErr}</p>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="address" className="mb-1form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          value={address || ""}
                          onChange={(e) => setAddress(e.target.value)}
                          className="form-control"
                          id="address"
                          placeholder="Enter Your Address"
                        />
                        {error && !address && <p>Please Enter The Address </p>}
                        <p>{addressApiErr}</p>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="password" className="mb-1 form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          value={password || ""}
                          autoComplete="current-password"
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          id="password"
                          placeholder="Enter your password"
                        />
                        {error && !password && (
                          <p className="errorMsg">Please Enter The Password </p>
                        )}
                        <p>{passApiErr}</p>
                      </div>
                     

                      <div className="flex-divSub-log d-flex justify-content-between align-items-center">
                        <div className="col-auto loginbtn  ">
                          <button
                            type="submit"
                            onClick={formHandler}
                            className="btn btn-primary "
                          >
                            Signin
                          </button>
                        </div>
                        <div className="col-auto loginbtn  ">
                          <Link
                            to="/Login"
                            className="btn btn-outline-primary "
                          >
                            Login
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="uiImagessign">
                  <img src="./images/ui-images/signUp.png" alt="photo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
