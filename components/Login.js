import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';



const FormPage = () => {
    return (
        <div
        // style={{
        //     backgroundImage:
        //       "url('/images/main.jpg')"
        //   }}
        style = {{marginTop: "10px",
        backgroundImage: "url('/images/main1.jpg')",
        width: "100%",
        height: "50vw",
        backgroundSize: 'cover',
            backgroundRepeat  : 'no-repeat',
        }}
        >
    
              
          <MDBContainer >
        <MDBRow>
          <MDBCol md="6">
          
            <form style = {{marginTop: "15vw"}}>
              <p className="h5 text-center mb-4">Login</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn>Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    )
};


 export default FormPage;
