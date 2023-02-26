import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      mobileNo: "",
      password: "",
      completeAddress: "",
    };
  }

  Handler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  SubmitHandler = e => {
    e.preventDefault()
    // console.log(this.state) ;
    console.log(this.state);
    //  var abc =this.state;
    console.log(this.state);

    axios
        .post("http://localhost:8045/sweetmart/customer/save", this.state)
        .then(res => {
            console.log(res);
            window.location = 'http://localhost:3000/login';
        }
    );
}

    render() {

      const { firstName, lastName, emailId, mobileNo, password, completeAddress } = this.state

        return (
          <section class="vh-100" style={{"background-color": "#eee;"}}>
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{"border-radius": "25px;"}}>
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"> Sign up </p>

                        <form class="mx-1 mx-md-4"  onSubmit={this.SubmitHandler} >

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i> &nbsp;
                            <div class="form-outline flex-fill mb-0">
                              <input onChange={this.Handler} value={firstName} name="firstName" type="text" id="form3Example1c" class="form-control" placeholder="First Name" />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i> &nbsp;
                            <div class="form-outline flex-fill mb-0">
                              <input onChange={this.Handler} value={lastName} name="lastName" type="text" id="form3Example1c" class="form-control" placeholder="Last Name" />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i> &nbsp;
                            <div class="form-outline flex-fill mb-0">
                              <input onChange={this.Handler} value={emailId} name="emailId" type="email" id="form3Example3c" class="form-control" placeholder="Email ID"/>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i> &nbsp;
                            <div class="form-outline flex-fill mb-0">
                              <input onChange={this.Handler} value={mobileNo} name="mobileNo" type="text" id="form3Example1c" class="form-control" placeholder="Mobile No." />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i> &nbsp;
                            <div class="form-outline flex-fill mb-0">
                              <input onChange={this.Handler} value={password} name="password" type="password" id="form3Example4c" class="form-control" placeholder="Password"/>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i> &nbsp;
                            <div class="form-outline flex-fill mb-0">
                              <input onChange={this.Handler} value={completeAddress} name="completeAddress" type="text" id="form3Example4c" class="form-control" placeholder="Address"/>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i> &nbsp;
                            <div class="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4cd" class="form-control" placeholder="Repeat Password"/>                              
                            </div>
                          </div>

                          <div class="d-flex justify-content-center mx-3 mb-3 mb-lg-4">
                            <button type="submit" class="btn btn-primary btn-lg"> Register </button>
                          </div>

                          <div class="text-center">
                            <p><Link to="/" style={{ color: "black", textDecoration: 'none' }} > Already have an account ?</Link></p>
                          </div>

                        </form>
                      
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
    }
}

export default Signup;