import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signup } = useSignup();
  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col justify-center items-center mx-auto min-w-96">
      <div className="p-6 w-full bg-clip-padding bg-opacity-40 rounded-3xl shadow-md bg-black-400 backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-400"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
              type="text"
              placeholder="Enter FullName"
              className="w-full h-10 input input-bordered"
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              type="password"
              placeholder="Enter Password"
              className="w-full h-10 input input-bordered"
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              type="password"
              placeholder="Confirm Password"
              className="w-full h-10 input input-bordered"
            />
          </div>
          <GenderCheckBox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="inline-block mt-2 text-sm hover:text-blue-600 hover:underline"
          >
            Already have an account?
          </Link>
          <button className="mt-2 btn btn-block btn-sm">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
