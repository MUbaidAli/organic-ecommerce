import image from "../assets/oilProduct.svg";
import barFilter from "../assets/bars-filter.svg";
import groundling2 from "../assets/groundling2.svg";
import parrot1 from "../assets/parrot1.svg";
import parrot2 from "../assets/productParrot.svg";
import { useParallax } from "react-scroll-parallax";
function FeatureProducts() {
  const downParallax = useParallax({
    translateX: [-100, 10], // move from -50px to 0px as you scroll
  });

  return (
    <>
      <div className="relative  h-70">
        {/* <img
          src={groundling2}
          alt=""
          className="absolute right-0 flip rotate-350"
        /> */}
        <img
          src={parrot1}
          alt=""
          className="absolute sm:right-90 top-0 left-10 floating  w-40 sm:hidden block"
        />
        <img
          src={parrot1}
          alt=""
          className="absolute sm:right-90 top-30 right-30  w-40 sm:block hidden"
          ref={downParallax.ref}
        />
      </div>
      <div className="container mx-auto max-w-7xl my-20">
        <h2 className="text-[32px] font-bold md:hidden block text-center text-white">
          Featured Products
        </h2>
        <div className=" filter-area flex sm:flex-row flex-col justify-between items-center mx-2 my-5 text-white">
          {/* <i class="fa-solid fa-bars-filter"></i> */}
          <p className="flex font-bold cursor-pointer text-[18px] my-3">
            <img
              src={barFilter}
              alt="bar filter icon"
              className="filter-icon w-4 mr-3 "
            />{" "}
            Filters
          </p>

          <h2 className="text-[32px] font-bold md:block hidden">
            Featured Products
          </h2>
          <div className="search bg-[#FF8A00] my-3 ">
            <label className="input bg-[#FF8A00] outline-0">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Search"
                className="bg-[#FF8A00]"
              />
            </label>
          </div>
        </div>

        <div className=" ">
          {/* Left Button */}

          {/* Carousel */}
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center   rounded-box p-4      scroll-smooth">
            {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((item) => (
              <div className="carousel-item  relative m-3">
                <img src={parrot2} alt="" className="absolute top-[-18px]" />
                <div className="sm:w-full md:w-[300px] lg:w-full sm:px-0 px-2  bg-[#FFFFFF80]  shadow-sm rounded-lg ">
                  <figure className="w-full">
                    <img
                      className=" rounded-box w-full"
                      src={image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="heading">
                      <div className="title flex justify-between items-center w-full">
                        <h2 className="card-title text-[#2E2E2E] text-1xl">
                          Extra Virgin Olive Oil
                        </h2>
                        <span className="text-[#338A45] font-bold text-[20px]">
                          $12.99
                        </span>
                      </div>
                      <span className="flex">
                        <i class="fa-solid fa-star text-[#FACC15]"></i>
                        <i class="fa-solid fa-star text-[#FACC15]"></i>
                        <i class="fa-solid fa-star text-[#FACC15]"></i>
                        <i class="fa-solid fa-star text-[#FACC15]"></i>
                        <i class="fa-solid fa-star text-[#FACC15]"></i>
                        <span className="text-[14px] text-[#4B5563]">
                          (124)
                        </span>
                      </span>
                    </div>

                    <p className="text-[#2E2E2E]">
                      Cold-pressed, unrefined, and rich in healthy fats. Perfect
                      for cooking
                    </p>
                    <div className="location flex items-center">
                      <p className=" text-[#2E2E2E]">
                        <i class="fa-solid fa-location-dot mr-1 text-[#338A45]"></i>{" "}
                        UAE
                      </p>
                      <p className=" text-[#2E2E2E] flex justify-end items-center">
                        <i class="fa-solid fa-store mr-1 text-[#338A45]"></i>{" "}
                        UAE Oil
                      </p>
                    </div>
                    <div className="heading"></div>
                    <div className="card-actions justify-end">
                      <button className="btn w-full text-white bg-[#338A45] hover:bg-[#529760]">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default FeatureProducts;
