import { useState } from "react";
import useAuthStore from "../store/authStore";
// src/pages/Register.jsx

import regMonkey from "../assets/reg-monkey.svg";
import logo from "../assets/logo.png";
import google from "../assets/google.svg";
import Link from "daisyui/components/link";
import { NavLink } from "react-router-dom";
function Login() {
  const { isLoading, error, login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleChange = (e) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Login successful");
    } catch (err) {
      // Error is already stored in Zustand, optionally show more
      alert(err.message);
    }
  };

  return (
    <>
      <div className="regbg">
        <div className="container max-w-7xl mx-auto  ">
          <div className="flex items-center justify-between py-10">
            <form onSubmit={handleSubmit} className="flex-1">
              <div className="flex flex-col bg-[#FFFFFF4D] bgblur px-10 py-10 rounded w-100">
                <div className="text-center ">
                  <img src={logo} alt="" className="" />
                  <h1 className="">Login </h1>
                </div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="outline-0 border-b-1 border-white text-white py-1 text-[16px] capitalize montserrat my-4 "
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="outline-0 border-b-1 border-white text-white py-1 text-[16px] capitalize montserrat my-4 "
                />
                <div className="flex items-center justify-between">
                  <label className="label text-[12px] font-bold text-white tracking-wider">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox outline-0 border-b-1 border-white text-white py-1 text-[16px] capitalize montserrat my-4 "
                    />
                    Remember Me
                  </label>
                  <NavLink className="text-white py-1 text-[12px] font-bold text-white tracking-wider capitalize montserrat my-4">
                    Forgot Password?
                  </NavLink>
                  {/* <Link></Link> */}
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn bg-[#338A45]  border-0 text-white shadow-none my-6"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <span className="text-center text-white">
                  -------- Or signIn using --------
                </span>

                <div className="flex items-center justify-center">
                  <img
                    src={google}
                    alt=""
                    className="border rounded-4xl p-1 cursor-pointer hover:scale-110 border-white m-2 w-9 h-9"
                  />
                  {/* <i class="fa-brands fa-facebook text-[20px] text-[#1877f2] border rounded-4xl p-1 m-2 cursor-pointer hover:scale-110 border-white"></i> */}
                  <div className="border w-9 h-9 border-white rounded-3xl text-center flex items-center hover:scale-110 justify-center m-2">
                    <i class="fa-brands fa-apple text-[26px] text-[#1877f2]  p-1 cursor-pointer  "></i>
                  </div>
                  <div className="border w-9 h-9 border-white rounded-4xl text-center flex items-center justify-center m-2 hover:scale-110">
                    <i class="fa-brands fa-facebook text-[25px] text-center text-[#1877f2]  p-1 cursor-pointer   "></i>
                  </div>
                </div>
              </div>
            </form>
            <div className="imgsec w-100 flex-1">
              <h1 className="text-[76px] montserrat font-bold">
                Shop Fresh & Organic
              </h1>
              <h3>Delivered to Your Door!</h3>
              <div className="w-80">
                <img src={regMonkey} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
