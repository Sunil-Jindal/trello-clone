import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState(false);
  const [apierro, setApierro] = useState(false);
  const navigate = useNavigate();


  useEffect(()=>{
    const authCheck = localStorage.getItem('user');
    if(authCheck){
      navigate("/Borad")
    }
  })

  const loginhandler = async (e) => {
    e.preventDefault();

    console.log(email, password);
    if (!email || !password) {
      setErr(true);
      return(false)
    }

    try {
      let result = await fetch("http://localhost:3000/login", {
      method: "post",
      mode: "cors",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
    });

    result = await result.json();
    // console.log(result.result);

    if(result.result){
      setApierro(true)
      console.log("api error");
    }else{
      if(result.email === email){
        localStorage.setItem("user", JSON.stringify(result));
        
          navigate("/Borad")
        
      }else{
        console.log('email not valid and passowrs!');
      }
    }
    } catch (error) {
      console.log(error);
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
                    <h2 className="mb-3">Login Form</h2>
                    {apierro && <p>Invalid Id and password</p>}
                    <form action="">
                      <div className="mb-3">
                        <label htmlFor="email" className="mb-1 form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          value={email || ""}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          id="email"
                          placeholder="Enter Your Email address"
                        />
                        {err && !email && <p>Plase Enter your email </p>}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="password" className="mb-1 form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          value={password || ""}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          id="password"
                          placeholder="Enter Your Password"
                        />
                        {err && !password && <p>Plase Enter your password </p>}
                      </div>
                      <div className="flex-divSub-log d-flex justify-content-between align-items-center">
                        <div className="col-auto">
                          <button
                            type="submit"
                            onClick={loginhandler}
                            className="btn btn-primary "
                          >
                            Login
                          </button>
                          <Link to="/Forget" className="forget">
                            Forget Password
                          </Link>
                        </div>
                        <div className="col-auto loginbtn  ">
                          <Link to="/" className="btn btn-outline-primary ">
                            signin
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

export default Login;
