import React, { useState } from "react";
import style from "../../styles/Home.module.css";

const Signup = () => {
  const [showMetamask, setShowMetamask] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const handleMetamask = function () {
    setShowPassword(false);
    setShowMetamask(true);
  };
  const handlePassword = function () {
    setShowMetamask(false);
    setShowPassword(true);
  };

  return (
    <div>
      <div className={style.container}>
        <h1>Sign up</h1>

        {showPassword ? (
          <div>
            <label htmlFor="">Email Address</label>
            <input type="text" />
            <label htmlFor="">First Name</label>
            <input type="text" />
            <label htmlFor="">Last Name</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <br />
            <button>Sign up</button>
            <br />
            <button onClick={() => handleMetamask()}>
              Sign up with Metamask
            </button>
          </div>
        ) : null}
        {showMetamask ? (
          <div>
            <label htmlFor="">Email Address</label>
            <input type="text" />
            <label htmlFor="">First Name</label>
            <input type="text" />
            <label htmlFor="">Last Name</label>
            <input type="text" />
            <br />
            <button>Connect</button>
            <br />
            <button onClick={() => handlePassword()}>
              Sign up with Password
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Signup;
