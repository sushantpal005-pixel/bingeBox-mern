import { useState } from "react";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "./Header";
import { API_END_POINT } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => setIsLogin(!isLogin);

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      if (isLogin) {
        const res = await axios.post(
          `${API_END_POINT}/api/v1/user/login`,
          { email, password },
          { headers: { "Content-Type": "application/json" }, withCredentials: true }
        );

        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(setUser(res.data.user));
          navigate("/browse");
        }
      } else {
        const res = await axios.post(
          `${API_END_POINT}/api/v1/user/register`,
          { fullName, email, password },
          { headers: { "Content-Type": "application/json" }, withCredentials: true }
        );

        if (res.data.success) {
          toast.success(res.data.message);
          setIsLogin(true);
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background */}
      <img
        className="absolute w-full h-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="banner"
      />

      {/* Form Container */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={getInputData}
          className="w-full sm:w-8/12 md:w-6/12 lg:w-4/12 bg-black bg-opacity-90 p-6 sm:p-10 rounded-md"
        >
          <h1 className="text-white text-2xl sm:text-3xl mb-5 font-bold text-center">
            {isLogin ? "Login" : "Signup"}
          </h1>

          <div className="flex flex-col">
            {!isLogin && (
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="Full Name"
                className="p-3 my-2 rounded bg-gray-800 text-white outline-none"
              />
            )}

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="p-3 my-2 rounded bg-gray-800 text-white outline-none"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="p-3 my-2 rounded bg-gray-800 text-white outline-none"
            />

            <button
              type="submit"
              className="bg-red-600 p-3 mt-6 text-white rounded font-medium hover:bg-red-700 transition"
            >
              {isLoading ? "Loading..." : isLogin ? "Login" : "Signup"}
            </button>

            <p className="text-white mt-4 text-sm text-center">
              {isLogin ? "New to BingeBox?" : "Already have an account?"}
              <span
                onClick={loginHandler}
                className="ml-2 text-blue-400 cursor-pointer hover:underline"
              >
                {isLogin ? "Signup" : "Login"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
