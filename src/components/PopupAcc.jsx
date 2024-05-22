import { useState } from "react";
import closeIcon from "../assets/close.svg";

const PopupAcc = ({ isPopupAcc, setIsPopupAcc, name, setName }) => {
  const [isLog, setIsLog] = useState("Login");
  const [pass, setPass] = useState("");
  const [log, setLog] = useState("");
  const [accounts, setAccounts] = useState([{ name: "Danil", pass: "123" }]);

  const authUser = (e, log, pass) => {
    e.preventDefault();
    for (let account of accounts) {
      if (account.name === log && account.pass === pass) {
        setName(log);
        console.log(log);
      } else {
        setAccounts([
          ...accounts,
          {
            name: log,
            pass: pass,
          },
        ]);
      }
    }
    setIsPopupAcc(false);
  };

  const logoutUser = () => {
    setName("");
    setIsPopupAcc(false);
  };

  const handleToggleLog = (text) => {
    if (text === "Login") {
      setIsLog((prev) => "Login");
    } else {
      setIsLog((prev) => "SignIn");
    }
  };

  return (
    <div className={`account ${isPopupAcc ? "" : "none"}`}>
      <div className="account__wrapper">
        <div className="account__buttons">
          <button onClick={() => handleToggleLog("Login")}>Login</button>
          <button onClick={() => handleToggleLog("SignIn")}>SignIn</button>
          <button onClick={() => logoutUser()}>Logout</button>
        </div>
        <div
          className={`account__wrapper--login ${
            isLog === "Login" ? "" : "none"
          }`}
        >
          <form className="account__wrapper--login-form">
            <input
              onChange={(e) => setLog(e.target.value)}
              type="text"
              placeholder="login"
            />
            <input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button onClick={(e) => authUser(e, log, pass)}>Login</button>
          </form>
        </div>
        <div
          className={`account__wrapper--signin ${
            isLog === "SignIn" ? "" : "none"
          }`}
        >
          <form className="account__wrapper--signin-form">
            <input
              onChange={(e) => setLog(e.target.value)}
              type="text"
              placeholder="login"
            />
            <input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="password"
            />
            <input type="file" />
            <button onClick={(e) => authUser(e, log, pass)}>Sign In</button>
          </form>
        </div>
      </div>
      <button
        onClick={() => setIsPopupAcc(false)}
        className="account__button account__button--close"
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Edit / Close_Circle">
            <path
              id="Vector"
              d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default PopupAcc;
