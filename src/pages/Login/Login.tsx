import { useEffect, useRef } from 'react';
import { useActionData, useNavigate, Form } from 'react-router-dom';

import "./Login.css";

function Login() {
  // initialize hooks
  const actionData = useActionData();
  const userRef:any = useRef('');
  let navigate = useNavigate();

  // initialize login response from action data
  const loginResponse = actionData || { success: false, message: '' };

  // check if login was successful, if so, navigate to the home page
  if (loginResponse.success) {
    navigate('/'); 
  }

  // focus on username field on component load
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // initialize login message
  let loginMessage = <></>;

  // show the login message if it exists
  if (loginResponse.message !== '') {
    loginMessage = (
      <div className="row mb-2">
        <div className="col-md-12">
          <p className={"login-message p-2 alert " + (loginResponse.success ? "alert-success" : "alert-danger")}>{ loginResponse.message }</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="card shadow my-auto mx-auto login-card">
        <div className="card-body">
          <Form method="post">
            <div className="form-group row mb-3">
              <div className="col-md-12">
                <img className="img-fluid mx-auto d-block" src={"https://techlint.com/assets/icon-long.svg"} alt="Techlint" title="Techlint"/>
              </div>
            </div>
            <div className="form-group row mb-2">
              <div className="col-md-12">
                <label htmlFor="username">Username</label>
                <input className="form-control form-control-sm" type="text" name="username" ref={userRef}/>
              </div>
            </div>
            <div className="form-group row mb-4">
              <div className="col-md-12">
                <label htmlFor="username">Password</label>
                <input className="form-control form-control-sm" type="password" name="password"/>
              </div>
            </div>
            { loginMessage }
            <div className="form-group row">
              <div className="col-md-12">
                  <button className="btn btn-primary btn-sm float-start">Login</button>
                  <a className="btn btn-link float-end px-0 forgot-password" href="">Forgot Password?</a>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Login;

export async function action({ request } : { request:any }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  // Here you would typically send a request to your backend to authenticate the user
  // For now, we will just return a dummy response
  if (username === "test" && password === "password") {
    return { success: true, message: "Login successful!" };
  } else {
    return { success: false, message: "Invalid credentials." };
  }
}