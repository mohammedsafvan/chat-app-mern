import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto min-w-96">
      <div className="p-6 w-full bg-clip-padding bg-gray-400 bg-opacity-0 rounded-3xl shadow-md backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-400"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full h-10 input input-bordered"
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full h-10 input input-bordered"
            />
          </div>
          <a
            href="#"
            className="inline-block mt-2 text-sm hover:text-blue-600 hover:underline"
          >
            Don't have and Account
          </a>
          <button className="mt-2 btn btn-block btn-sm">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
