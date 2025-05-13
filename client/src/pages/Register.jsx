// src/pages/Register.jsx
import React, { useState } from "react";
import useAuthStore from "../store/authStore"; // remove if not using Zustand
import regMonkey from "../assets/reg-monkey.svg";
import logo from "../assets/logo.png";
import google from "../assets/google.svg";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  // console.log(formData);
  const [error, setError] = useState(null);
  const { register, loading } = useAuthStore(); // remove if not using Zustand

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await register(
        formData.name,
        formData.email,
        formData.password,
        formData.role
      );
      // alert("Registration successful!");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="regbg">
      <div className="container max-w-7xl mx-auto  ">
        <div className="flex items-center justify-between py-10">
          <form onSubmit={handleSubmit} className="flex-1">
            <div className="flex flex-col bg-[#FFFFFF4D] bgblur px-10 py-10 rounded w-100">
              <div className="text-center ">
                <img src={logo} alt="" className="" />
                <h1 className="">Sign Up</h1>
              </div>
              <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                required
                className="outline-0 border-b-1 border-white text-white py-1 text-[16px] capitalize montserrat my-4 "
              />
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="outline-0 border-b-1 border-white text-white py-1 text-[16px] capitalize montserrat my-4 "
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
                className="outline-0 border-b-1 border-white text-white py-1 text-[16px] capitalize montserrat my-4 "
              />
              <select
                name="role"
                onChange={handleChange}
                className="outline-0 border-b-1 border-white text-white py-1 text-[16px] capitalize montserrat my-4 "
              >
                <option value="user" className="text-black">
                  User
                </option>
                <option value="admin" className="text-black">
                  Admin
                </option>{" "}
                {/* If allowed */}
              </select>
              <label className="label text-[12px] font-bold text-white tracking-wider">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox outline-0 border-b-1 border-white text-white py-1 text-[16px] capitalize montserrat my-4 "
                />
                I agree to the Terms & Conditions & Privacy Policy
              </label>
              <button
                type="submit"
                disabled={loading}
                className="btn bg-[#338A45]  border-0 text-white shadow-none my-6"
              >
                {loading ? "Registering..." : "Register"}
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <span className="text-center text-white">
                -------- Or sign up with --------
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
  );
};

export default Register;
