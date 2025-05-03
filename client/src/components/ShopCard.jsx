import img1 from "../assets/IMG.svg";
function ShopCard() {
  return (
    <div className="cont">
      <div className="container mx-auto max-w-7xl  px-5 py-20 ">
        <h1 className="text-center text-white text-[44px] font-bold montserrat md:my-15 my-20">
          Popular Shops
        </h1>
        <div className="flex flex-wrap items-center justify-center">
          {Array.from([1, 2, 3, 4]).map((item) => (
            <div className="shopcard  bgblur">
              <div className="image">
                <img src={img1} />
              </div>
              <div className="content text-center flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold my-1">US Honey</h3>
                <span className="flex my-1">
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <i class="fa-solid fa-star text-[#FACC15]"></i>
                  <span className="text-[14px] text-[#4B5563]">(124)</span>
                </span>
                <p className=" text-[#2E2E2E]">
                  <i class="fa-solid fa-location-dot mr-1 text-[#338A45]"></i>{" "}
                  UAE
                </p>
                <p className="my-2">
                  100% pure, raw, and unfiltered wildflower honey sourced from
                  organic farms.
                </p>
                <button className="btn bg-[#338A45] text-white w-full shadow-none outline-0 border-0">
                  View Shop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
