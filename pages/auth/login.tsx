import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import style from "../../styles/Home.module.css";

const Login = () => {
  const router = useRouter();

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
        <h1>Login</h1>

        {showPassword ? (
          <div>
            <label htmlFor="">Email Address</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <button>Login</button>
            <Link
              href={{
                pathname: router.pathname,
                query: { type: "wallet" },
              }}
              onClick={() => handleMetamask()}
            >
              Login with Wallet
            </Link>
          </div>
        ) : null}
        {showMetamask ? (
          <div>
            <button>Wallet Login</button>
            <Link
              href={{
                pathname: router.pathname,
                query: {},
              }}
              onClick={() => handlePassword()}
            >
              Login with Password
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
