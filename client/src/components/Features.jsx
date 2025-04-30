import { useParallax } from "react-scroll-parallax";
import groundling from "../assets/groundling.svg";
import parrot from "../assets/parrot.svg";
function Features() {
  const downParallax = useParallax({
    translateY: [30, -50],
    scale: [0.5, 1], // move from -50px to 0px as you scroll
  });
  // const upParallax = useParallax({
  //   translateY: [50, -50], // move from -50px to 0px as you scroll
  // });
  return (
    <>
      <div className="relative mt-10 mb-20">
        <img
          src={groundling}
          className="flip absolute right-0 top-[-5] z-10 w-60 "
          // ref={downParallax.ref}
        />
        <img
          src={parrot}
          className="absolute right-0 top-[-5] z-10 w-60 "
          ref={downParallax.ref}
        />
        <div className="mx-5">
          <div
            className=" mx-auto container max-w-7xl my-20 bg-[#FFFFFF80] bgblur rounded-lg md:px-8 dark:bg-gray-800 relative py-10"
            id="stats"
            role="tabpanel"
            aria-labelledby="stats-tab"
          >
            <h1 className="montserrat text-center text-4xl font-bold my-5">
              Why Organics?
            </h1>
            <dl className=" grid max-w-screen-xl grid-cols-1 place-items-center  gap-8 p-4 mx-auto text-[#2E2E2E] sm:grid-cols-2 xl:grid-cols-4 dark:text-white sm:p-8">
              <div className="flex flex-col items-center justify-center text-center w-60">
                {/* <i class="fa-solid fa-users"></i> */}
                <i class="fa-solid fa-star-of-life text-[#5BAB60] text-4xl my-5"></i>
                <dt className="mb-2 text-[#2E2E2E] text-[20px] font-extrabold">
                  Certified Organic
                </dt>
                <dd className="text-[#2E2E2E] text-[16px]">
                  100% certified organic products from verified sources
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center text-center w-60">
                <i class="fa-solid fa-users text-[#5BAB60] text-4xl my-5"></i>
                {/* <i class="fa-solid fa-star-of-life "></i> */}
                <dt className="mb-2 text-[20px] font-extrabold text-[#2E2E2E]">
                  Direct from Farmers
                </dt>
                <dd className="text-[#2E2E2E] text-[16px] ">
                  Support local farmers and ethical brands
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center text-center w-60">
                <i class="fa-solid fa-leaf text-[#5BAB60] text-4xl my-5"></i>
                {/* <i class="fa-solid fa-star-of-life "></i> */}
                <dt className="mb-2 text-[20px] font-extrabold text-[#2E2E2E]">
                  Eco-Friendly
                </dt>
                <dd className="text-[#2E2E2E] text-[16px]">
                  Sustainable packaging and shipping methods
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center text-center w-60">
                <i class="fa-solid fa-shield-halved text-[#5BAB60] text-4xl my-5"></i>
                {/* <i class="fa-solid fa-star-of-life "></i> */}
                <dt className="mb-2 text-[20px] font-extrabold text-[#2E2E2E]">
                  Secure Checkout
                </dt>
                <dd className="text-[#2E2E2E] text-[16px]">
                  Safe and secure payment processing
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
