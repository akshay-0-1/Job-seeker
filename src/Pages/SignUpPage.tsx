import { IconAnchor } from "@tabler/icons-react";
import React from "react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {
  const location = useLocation();
  return (
    <div className="h-screen w-full bg-mine-shaft-950 font-['poppins'] overflow-hidden">
      <div
        className={`h-[100vh] w-[100vw] transition-all duration-1000 ease-in-out flex [&>*]:flex-shrink-0 ${
          location.pathname === "/signup" ? "-translate-x-1/2" : "translate-x-0"
        }`}
      >
        <Login />
        <div
          className={`h-full w-1/2 transition-all ease-in-out duration-1000 ${
            location.pathname === "/signup"
              ? "rounded-r-[200px]"
              : "rounded-l-[200px]"
          } bg-mine-shaft-900 items-center justify-center flex flex-col gap-5`}
        >
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconAnchor className="h-16 w-16" stroke={2.5} />
            <div className="text-6xl font-semibold">JobHook</div>
          </div>
          <div className="text-2xl text-mine-shaft-200 font-semibold">
            Unlock Your Future - Discover Your Dream Job!
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
