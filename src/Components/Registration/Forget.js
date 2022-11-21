import React, { useState } from 'react'
import { Link, useNavigate} from "react-router-dom";
function Forget() {
  const [email, setEmail] = useState();
  const [otp,setOtp] = useState();
  const [err, setErr ] = useState(); 

  const navigate = useNavigate();

    const forgetPass = async(e) => {
      e.preventDefault();

      if(!email){
        setErr("Please enter your email")
        return (false)
      }

      let result = await fetch("http://localhost:3000/forget",{
        method:"post",
        mode:"cors",
        body:JSON.stringify({email}),
        headers:{
          "content-type": "application/json",
        }
      })
      result = await result.json();
      console.log(result)

      if(result.email){
        setOtp(result.otp)
        setTimeout(()=>{
          navigate('/Changepassword')
        },2000)
        
      }
      else{
        setErr("Email is not vaild");
      }

      // if(result.email === email && result.otp === otp){
      //   console.log('work it');
      //   navigate('/')
      // }

      // if(result.otp === otp){
      //   navigate('/')
      // }

    }

  return (
    <div className="signContain">
      <div className="container">
        <div className="signMain">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12">
              <div className="singleFelid">
                <div className="innerform">
                  <h2 className="mb-3">Forget Password Form</h2>

                  <form action="">
                    <div className="mb-3">
                      <label htmlFor="email" className="mb-1 form-label">
                        email
                      </label>
                      <input
                        type="email"
                        value={email || ""}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className="form-control"
                        id="email"
                        placeholder="Enter Your Number"
                      />
                      <p>{err}</p>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="otp" className="mb-1 form-label">
                        OTP
                      </label>
                      <input
                        type="number"
                         value={otp || ""}
                        onChange={(e)=>{setOtp(e.target.value)}}
                        className="form-control"
                        id="otp"
                        placeholder="Enter Your Number"
                      />
                    </div>
                    <div className="flex-divSub-log d-flex justify-content-between align-items-center">
                      <div className="col-auto">
                        <button type="submit" onClick={forgetPass}  className="btn btn-primary ">
                          Submit
                        </button>
                        
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
  )
}

export default Forget