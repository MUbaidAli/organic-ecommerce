import { useParallax } from "react-scroll-parallax";
import groundling from "../assets/groundling.svg";
import jar from "../assets/glassjar.svg";
import panda from "../assets/panda.svg";
import parrot from "../assets/parrot.svg";

function SaleSection() {
  const downParallax = useParallax({
    translateY: [30, -50, "easeInQuad"],
    // move from -50px to 0px as you scroll
  });
  return (
    <>
      <div className="relative bg-[#FFFFFF80] bgblur">
        <img
          src={groundling}
          className=" absolute left-0 top-0 z-10 "
          ref={downParallax.ref}
        />
        <div className="container mx-auto max-w-6xl  px-5 py-20 ">
          <h1 className="text-center text-[#2E2E2E] text-[44px] font-bold montserrat my-8">
            Grab The Sale
          </h1>

          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="my-5">
              <img src={panda} alt="" />
            </div>
            <div className="flex md:flex-row flex-col-reverse">
              <div>
                <div className="my-5">
                  <img src={jar} alt="" />
                </div>
              </div>
              <div className="my-5 text-center flex flex-col justify-center items-center w-90 montserrat">
                <h2 className="text-[#FF8A00] text-[32px] montserrat font-bold my-4">
                  Flat 50% OFF!
                </h2>
                <p className="text-[18px] text-[#2E2E2E] my-4 font-bold">
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
      </div>
    </>
  );
}
export default SaleSection;
