import image from "../assets/oilProduct.svg";
import barFilter from "../assets/bars-filter.svg";
import groundling2 from "../assets/groundling2.svg";
import oilBottleSlider from "../assets/oilBottleSlider.svg";
import parrot2 from "../assets/productParrot.svg";
import { useParallax } from "react-scroll-parallax";
function SaleCarousel() {
  return (
    <>
      <h2 className="text-[44px] font-bold my-5 text-center text-white montserrat">
        Grab The Sale
      </h2>
      <div className="bg-[#FFFFFF80] bgblur px-10 py-5">
        <div className="container mx-auto max-w-7xl my-20">
          <div className="relative ">
            {/* Left Button */}
            <button
              onClick={() =>
                document
                  .getElementById("carousel")
                  .scrollBy({ left: -500, behavior: "smooth" })
              }
              className="btn btn-circle absolute left-0 top-1/2  z-10 mx-3"
            >
              ❮
            </button>

            {/* Carousel */}
            <div
              id="carousel"
              className="w-full carousel carousel-center rounded-box p-4 space-x-4 overflow-x-auto scroll-smooth"
            >
              {Array.from([1, 2, 3]).map((item) => (
                <div className="carousel-item  relative mx-20">
                  <div className=" md:h-[390px] md:w-[700px] w-full  sm:px-0 px-2  bg-[#338A45B2]  shadow-sm rounded-lg  flex md:flex-row flex-col relative">
                    <figure className="w-full">
                      <img
                        className=" rounded-box w-90 md:absolute md:left-[-100px] "
                        src={oilBottleSlider}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <div className="my-5 text-center flex flex-col justify-center items-center w-90 montserrat text-white">
                        <h2 className="text-[#FF8A00] text-[32px] montserrat font-bold my-4">
                          Flat 50% OFF!
                        </h2>
                        <p className="text-[18px]  my-4 font-bold text-white">
                          Ending in 58 hours!
                        </p>
                        <h1 className=" my-4 text-[38px] font-bold leading-9 m">
                          100% natural and Fresh olive oil!
                        </h1>
                        <button className="sm:block hidden btn bg-[#F9A901] shadow-none border-0   text-white w-[140px] font-[500]">
                          <i class="fa-solid fa-cart-shopping fa-shake mr-1"></i>
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={() =>
                document
                  .getElementById("carousel")
                  .scrollBy({ left: 300, behavior: "smooth" })
              }
              className="btn btn-circle absolute right-0 top-1/2  z-10 mx-3"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SaleCarousel;
