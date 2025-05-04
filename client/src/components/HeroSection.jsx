import groundling from "../assets/groundling.svg";
import skeps from "../assets/skeps.svg";
import bee from "../assets/bee.svg";
import hero1 from "../assets/home-hero-img.svg";
import { useParallax } from "react-scroll-parallax";

function HeroSection() {
  const downParallax = useParallax({
    translateY: [-50, 50], // move from -50px to 0px as you scroll
  });
  const upParallax = useParallax({
    translateY: [60, -50], // move from -50px to 0px as you scroll
  });
  const beeParallax = useParallax({
    translateX: [50, -50],
    translateY: [-100, 10], // move from -50px to 0px as you scroll
  });
  const beeScaleParallax = useParallax(
    {
      scale: [0.1, 1, "easeInQuad"],
      translateX: [50, -50],
      translateY: [10, -100],
    }

    // move from -50px to 0px as you scroll
  );
  const heroScaleParallax = useParallax(
    {
      // scale: [0.1, 1, "easeInQuad"],
      // translateX: [50, -50],
      // translateY: [10, -100],
    }

    // move from -50px to 0px as you scroll
  );
  return (
    <>
      <div
        ref={heroScaleParallax.ref}
        className="hero-bg  h-full  bg-radial-[at_75%_40%] from-[#70c175] to-[#338A45] to-50% pt-30 pb-10"
      >
        <img
          src={groundling}
          className="absolute left-0 top-10 z-10"
          ref={downParallax.ref}
        />
        <img
          ref={upParallax.ref}
          src={skeps}
          className="absolute left-0 top-[-10] z-9"
        />
        <img
          src={bee}
          className="absolute left-120 top-0 z-9 floating"
          ref={beeParallax.ref}
        />
        <img
          src={bee}
          className="absolute left-100 top-0 z-9 floating w-20"
          ref={beeParallax.ref}
        />
        <img
          src={bee}
          className="absolute left-80 bottom-0 z-9 w-20 floating floating3 "
          ref={beeScaleParallax.ref}
        />
        <img
          src={bee}
          className="absolute right-100 bottom-30 z-9 w-30"
          ref={beeScaleParallax.ref}
        />
        <img
          src={bee}
          className="absolute left-140 bottom-10 z-9 floating2 floating w-20"
          ref={beeParallax.ref}
        />
        {/* <img
          src={bee}
          className="absolute left-140 bottom-40 z-9 floating"
          ref={beeParallax.ref}
        /> */}
        <div className="hero-content flex-col flex items-center lg:flex-row justify-end my-10 z-100 relative w-full">
          <div className="flex-1 md:pt-0 pt-20">
            {/* <img src={hero1} className="" /> */}
          </div>
          <div className="flex-1  text-white  ">
            <h1 className="md:text-5xl text-4xl font-bold rubik-font">
              Fresh & Organic
            </h1>
            <p className="py-6">Delivered to Your Door!</p>
            <button className="btn bg-[#F9A901] border-0 shadow-none   text-white  w-[140px]">
              {/* <i class="fa-solid fa-arrow-right-to-bracket mx-1"></i> */}
              <i class="fa-solid fa-cart-shopping fa-shake mb-1"></i>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
