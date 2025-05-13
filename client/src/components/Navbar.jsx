import { useParallax } from "react-scroll-parallax";
import logo from "../assets/logo.png";
import monkey from "../assets/monkey.svg";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const upParallax = useParallax({
    translateY: [-100, 40], // move from -50px to 0px as you scroll
  });
  return (
    <>
      <img
        ref={upParallax.ref}
        src={monkey}
        alt="monkey image"
        className="absolute top-0 right-50 z-10"
      />
      <nav className=" pt-5 fixed w-full z-50 px-3">
        <div className="container mx-auto max-w-7xl bg-[#FFFFFFCC] rounded-2xl md:px-10 px-3">
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <NavLink to={"/app-products"}>Products</NavLink>
                  </li>
                  <li>
                    <a>Shops</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                </ul>
              </div>
              <img src={logo} alt="" />
              {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
              <div className="navbar-center hidden lg:flex mx-10">
                <ul className="menu menu-horizontal px-1 text-[#2E2E2E]">
                  <li className="">
                    <a className="hover:text-[#FF8A00] hover:bg-transparent">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[#FF8A00] hover:bg-transparent">
                      About Us
                    </a>
                  </li>
                  <li>
                    <NavLink
                      className="hover:text-[#FF8A00] hover:bg-transparent"
                      to={"/all-products"}
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <a className="hover:text-[#FF8A00] hover:bg-transparent">
                      Shops
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[#FF8A00] hover:bg-transparent">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-end ">
              <button
                href="#"
                className=" btn bg-[#F9A901] shadow-none border-0   text-white  font-[500] sm:hidden block"
              >
                Login/Sell
              </button>
              <Link to={"/login"}>
                <button className="sm:block hidden btn bg-white border-0 shadow-none   text-[#338A45] mx-3 w-[140px]">
                  <i class="fa-solid fa-arrow-right-to-bracket mx-1"></i>
                  Sign In
                </button>
              </Link>
              <button className="sm:block hidden btn bg-[#F9A901] shadow-none border-0   text-white w-[140px] font-[500]">
                <i class="fa-solid fa-sheet-plastic mx-1"></i>
                Apply to Sell
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
