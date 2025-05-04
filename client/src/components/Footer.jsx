import logo from "../assets/logo.png";
function Footer() {
  return (
    <>
      <div className=" footer-bg  ">
        <div className=" footer-overlay py-20">
          <div>
            <div className=" ">
              <div className="hero-content max-w-6xl text-left">
                <div className="max-w-lg text-white">
                  <h1 className="text-[27px] font-bold">
                    Grow Your Organic Business with Us!
                  </h1>
                  <p className="py-6 text-[16px]">
                    Join a trusted global marketplace for organic products. Sell
                    directly to eco-conscious customers worldwide.
                  </p>

                  <div>
                    <div className="flex items-baseline">
                      <i class="fa-solid fa-chart-line text-white mr-5"></i>
                      <div>
                        <p className="font-bold text-[16px] ">
                          Increase Global Sales
                        </p>
                        <p className="my-2">
                          Reach millions of conscious consumers worldwide
                        </p>
                      </div>
                    </div>
                    <div className="flex items-baseline">
                      <i class="fa-solid fa-store text-white mr-5"></i>
                      <div>
                        <p className="font-bold text-[16px] ">
                          Easy Store Management
                        </p>
                        <p className="my-2">
                          Powerful tools to manage your products and orders
                        </p>
                      </div>
                    </div>
                    <div className="flex items-baseline">
                      <i class="fa-solid fa-tag text-white mr-5"></i>
                      <div>
                        <p className="font-bold text-[16px] ">
                          Transparent Pricing
                        </p>
                        <p className="my-2">
                          No hidden fees, competitive commission rates
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="sm:block hidden btn bg-[#FF8A00] shadow-none border-0   text-white w-[140px] font-[500] my-3">
                    <i class="fa-solid fa-arrow-right-to-bracket mx-1"></i>
                    Apply to Sell
                  </button>
                </div>
              </div>
            </div>
          </div>
          <footer className="container mx-auto max-w-7xl footer sm:footer-horizontal  text-white p-10 items-center ">
            <aside className="w-40 text-center">
              <img src={logo} alt="" className="w-30" />
              <p>Your trusted marketplace for certified organic products.</p>
            </aside>
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="w-80">
                  <label>
                    Subscribe to get updates on new products and special offers.
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="input input-bordered rounded text-black"
                    />
                    <button className="btn btn-primary mx-3 rounded  bg-white text-black outline-0 shadow-none border-0">
                      Subscribe
                    </button>
                  </div>
                </fieldset>
              </form>
            </nav>
          </footer>
        </div>{" "}
      </div>
    </>
  );
}

export default Footer;
