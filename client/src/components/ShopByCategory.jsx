import category from "../assets/category1.svg";
import groundling2 from "../assets/groundling2.svg";
import butterfly from "../assets/butterfly1.svg";
import { useParallax } from "react-scroll-parallax";
function ShopByCategory() {
  const parallax = useParallax({
    translateX: [-60, 10], // move from -50px to 0px as you scroll
  });
  const parallax2 = useParallax({
    translateX: [-60, 10], // move from -50px to 0px as you scroll
  });
  return (
    <>
      <div>
        <div className="relative bg-[#FFFFFF80] bgblur">
          <img
            src={groundling2}
            alt=""
            className="absolute top-[-220px] sm:block hidden"
            ref={parallax.ref}
          />
          <img
            src={groundling2}
            alt=""
            className="absolute top-[-100px] sm:hidden block"
            ref={parallax.ref}
          />
          <img
            src={butterfly}
            alt=""
            className="absolute top-[-80px] sm:left-100 left-30 floating floating1"
            ref={parallax2.ref}
          />
          <div className="container mx-auto max-w-6xl  px-5 py-30 ">
            <h1 className="text-center text-3xl font-bold Montserrat my-5">
              Shop By Category
            </h1>

            <div className="grid md:grid-cols-4 gap-8 sm:grid-cols-2  grid-cols-1  place-items-center">
              {Array.from([1, 2, 3, 4]).map((item) => (
                <div className="text-center md:w-full m-2">
                  <figure className="px-2 pt-2">
                    <img
                      src={category}
                      alt="Shoes"
                      className="rounded-sm w-[269px] h-[247px] object-cover"
                    />
                  </figure>
                  <div className="card-body items-center text-center pt-1">
                    <h2 className="card-title text-[24px] text-[#338A45]">
                      Wellness
                    </h2>
                    <p className="text-[14px] text-[#2E2E2E]">150+ Products</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ShopByCategory;
