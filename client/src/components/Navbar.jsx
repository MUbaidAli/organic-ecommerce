import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-[#FFFFFF33] shadow-sm fixed w-full z-20">
      <div className="container mx-auto max-w-7xl">
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
                  <a>Products</a>
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
              <ul className="menu menu-horizontal px-1 text-white">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Shops</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end">
            <button className="btn bg-white border-0 shadow-none   text-[#338A45] mx-3 w-[140px]">
              <i class="fa-solid fa-arrow-right-to-bracket mx-1"></i>
              Like
            </button>
            <button className="btn bg-[#F9A901] shadow-none border-0   text-white w-[140px] font-[500]">
              <i class="fa-solid fa-arrow-right-to-bracket mx-1"></i>
              Apply to Sell
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
