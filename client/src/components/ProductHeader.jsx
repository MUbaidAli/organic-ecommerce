import singleProductImage from "../assets/singleProductImage.svg";
import groundling from "../assets/groundling.svg";
import { useParallax } from "react-scroll-parallax";
function ProductHeader() {
  const downParallax = useParallax({
    translateY: [-50, 50, "easeInOutQuad"], // move from -50px to 0px as you scroll
  });

  return (
    <>
      <div className="py-60 relative">
        <img
          src={groundling}
          alt=""
          className="absolute "
          ref={downParallax.ref}
        />
        <div className="max-w-7xl contiainer mx-auto">
          <div className="flex items-center justify-between md:flex-row flex-col ">
            <div className="image  w-full flex items-center justify-center relative flex-1">
              <div className="circle  bg-[#FFFFFF80] md:w-100 md:h-100 w-80 h-80 rounded-full bgblur absolute z-1 items-center justify-center"></div>
              <img
                src={singleProductImage}
                alt=""
                className="absolute w-120 z-5"
              />
            </div>
            <div className="description flex-1 md:w-full sm:w-md w-full px-10 md:mt-1 mt-20">
              <div className="hero-content flex-col flex items-center lg:flex-row  my-10 z-100 relative w-full">
                <div className=" md:pt-0 pt-20">
                  {/* <img src={hero1} className="" /> */}
                </div>
                <div className="  text-white  ">
                  <h1 className="md:text-5xl text-4xl font-bold montserrat">
                    100% Natural and Organic Olive Oil Extract!
                  </h1>
                  <p className="py-6 montserrat text-[24px] font-bold">
                    Freshly Extracted and Perfect for all type of purposes
                  </p>
                  <button className="btn bg-[#F9A901] border-0 shadow-none   text-white  w-[140px]">
                    {/* <i class="fa-solid fa-arrow-right-to-bracket mx-1"></i> */}
                    <i class="fa-solid fa-cart-shopping fa-shake mb-1"></i>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductHeader;
