import { useState } from "react";
import "./FormStyle.css"

function Form() {
  const [action, setAction] = useState("Sign Up");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="form-container">
          <h2>{action}</h2>
          <div className="underline"></div>
          <form action="">
            <div className="inputs">
              {action === "Sign Up" && <div className="input">
                <i className="fa-solid fa-user"></i>
                <input type="text" name="" placeholder='Name' />
              </div>}
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" name="" placeholder='Email' />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input className={passwordVisible ? "visible" : "hidden"} type={passwordVisible ? "text" : "password"} name="" placeholder='Password' />
                <i className={`fa-solid fa-eye${passwordVisible ? "-slash" : ""}`} onClick={() => setPasswordVisible(!passwordVisible)}></i>
              </div>
            </div>
            {action === "Login" && <div className="forget-password">
              <p>Lost Password <span>Click Here</span></p>
            </div>}
            <div className="btn-container">
              <div className={action === "Sign Up" ? "btn active" : "btn"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
              <div className={action === "Login" ? "btn active" : "btn"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form
