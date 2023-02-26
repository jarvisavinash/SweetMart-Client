import axios, { Axios } from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Login.css';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            password: '',
            emailId: '',
            custId: '',
            checkEmailId: '',
            test: ''
        }
    }

    Handler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    SubmitHandler = e => {
        e.preventDefault()
        console.log(this.state.password);
        console.log(this.state.emailId);

        axios
            .post("Backend", this.state)
            .then(res => {

                localStorage.setItem('customerLoginDetails', JSON.stringify(res.data));
                var xyz = JSON.parse(localStorage.getItem("customerLoginDetails"));

                console.log("Check");
                console.log(typeof (xyz));

                if (xyz.length === 0) {
                    this.state.test = 0;
                } else {
                    this.state.test = 1;
                }

                console.log(this.state.test)

                this.state.password = xyz[0].password;
                this.state.checkEmailId = xyz[0].emailId;

                this.check();
            }
        );
    }

    check() {
        if (this.state.test == 1) {
            alert("Valid User");
            window.location = 'send somewhere';
        }
        else if (this.state.test == 0) {
            alert("Invalid User");
        }
    }

    render() {

        const { password, emailId } = this.state

        return (
          <section class="vh-100">
            <div class="container-fluid h-custom">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                  <img src="../images/Login.jpg" class="img-fluid" />
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                  <form onSubmit={this.SubmitHandler}>

                    <div class="form-outline mb-4">
                      <input type="email" onChange={this.Handler} value={emailId} name="emailId" id="form3Example3" class="form-control form-control-lg" placeholder="Email ID" />
                    </div>

                    <br />

                    <div class="form-outline mb-3">
                      <input type="password" onChange={this.Handler} value={password} name="password" id="form3Example4" class="form-control form-control-lg" placeholder="Password" />
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                      <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3"> {" "} Remember me{" "} </label>
                      </div>
                      <a href="#!" class="text-body"> Forgot password? </a>
                    </div>

                    <div class="text-center text-lg-start mt-4 pt-2">
                      <button type="submit" class="btn btn-primary btn-lg" style={{ "padding-left": "2.5rem", "padding-right": "2.5rem"}} > Login </button>
                      <p class="small fw-bold mt-2 pt-1 mb-0"> Don't have an account?{" "} <a class="link-danger"> {" "} <Link to="/signup"> Register </Link> </a></p>
                    </div>

                  </form>
                
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Login;

