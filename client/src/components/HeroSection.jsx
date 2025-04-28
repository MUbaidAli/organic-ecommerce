import honeyStick from "../assets/honeystick.png";
import hero1 from "../assets/hero1.png";
function HeroSection() {
  return (
    <>
      <img src={honeyStick} className="absolute right-0 top-30 z-10" />
      <div className="hero  h-full  bg-radial-[at_75%_40%] from-[#70c175] to-[#338A45] to-50% pt-30 pb-10">
        <div className="hero-content flex-col flex items-center lg:flex-row-reverse justify-between my-10">
          <div className="flex-1 md:pt-0 pt-20">
            <img src={hero1} className="" />
          </div>
          <div className="flex-1  text-white ">
            <h1 className="md:text-5xl text-4xl font-bold">
              Shop Fresh, Shop Organic Delivered to Your Door!
            </h1>
            <p className="py-6">
              Fresh, Healthy, and Sustainable – Delivered to Your Doorstep!
            </p>
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
