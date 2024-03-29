import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


function SignUp() {
  let navigate=useNavigate();
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();

      const response = await fetch("https://cafe-3-0-b5ny.vercel.app/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation 
        })
      });


      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter valid credentials");
      }
      if (json.success) {
        navigate("/");
      }
  };


  const handleChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <section className="text-center text-lg-start">

      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className=" register col-lg-6 mb-5 mb-lg-0">
            <div className="card cascading-right">
              <div className="card-body p-5 shadow-5 text-center">
                <Link to="/"> <img src={require("../images/logo3.png")} alt="My logo" style={{ "height": "162px", "width": "200px", "margin": "2%" }}></img></Link>
                <form onSubmit={handleSubmit}>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}


                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example1" placeholder="Name" className="form-control" name='name' value={credentials.name} onChange={handleChange} />
                  </div>



                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" placeholder="Email" className="form-control" name='email' value={credentials.email} onChange={handleChange} />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" placeholder="Password" className="form-control" name='password' value={credentials.password} onChange={handleChange} />
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example2" placeholder="Location" className="form-control" name='geolocation' value={credentials.geolocation} onChange={handleChange} />
                  </div>

                  {/* <!-- Submit button --> */}
                  <div className="row">
                    <div className="col-lg-6">
                      <button type="submit" className="btn btn-primary btn-block mb-4">
                        Sign Up
                      </button>
                    </div>
                    <div className="col-lg-6">
                      <Link to="/login" className="btn btn-primary btn-block mb-4">
                        Already a user?
                      </Link>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src="https://source.unsplash.com/random/450x600/?coffee" className="w-100 rounded-4 shadow-4"
              alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

