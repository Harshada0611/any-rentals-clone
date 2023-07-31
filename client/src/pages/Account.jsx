import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const Account = ({ auth, setAuth }) => {
  const [login, setLogin] = useState(true);

  return (
    <div className="h-[55rem] sm:h-[50rem] bg-[url('https://wallpapercave.com/wp/wp9981253.jpg')] bg-center  pt-2 sm:pt-8">
      {login ? (
        <Login setLogin={setLogin} auth={auth} setAuth={setAuth} />
      ) : (
        <Register setLogin={setLogin} />
      )}
    </div>
  );
};

export default Account;
