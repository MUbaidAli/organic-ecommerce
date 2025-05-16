import img from "../assets/IMG.svg";
function ProductAboutSaller() {
  return (
    // bg-[#FFFFFF80]
    <div className="max-w-7xl container mx-auto bg-[#ffffff80] px-10 my-10  py-15 flex items-center justify-between md:flex-row  flex-col">
      <div className="img-sec relative  -bottom-12 flex items-center justify-center flex-col  ">
        <img
          src={img}
          alt=""
          className="w-[367px] h-[231px] object-cover relative rounded-xl"
        />

        <div className="text bg-white relative bottom-15 w-[268px] rounded-xl px-10 py-7 text-center ">
          <h1>Pak Organic</h1>
          <span className="flex my-1  justify-center items-center">
            <i class="fa-solid fa-star text-[#FACC15]"></i>
            <i class="fa-solid fa-star text-[#FACC15]"></i>
            <i class="fa-solid fa-star text-[#FACC15]"></i>
            <i class="fa-solid fa-star text-[#FACC15]"></i>
            <i class="fa-solid fa-star text-[#FACC15]"></i>
            <span className="text-[14px] text-[#4B5563]">(124)</span>
          </span>
          <p className=" text-[#2E2E2E]">
            <i class="fa-solid fa-location-dot mr-1 text-[#338A45]"></i> UAE
          </p>
        </div>
      </div>
      <div className="desc  montserrat mx-10 px-20 flex-2 ">
        <div className="w-md">
          <h1 className="text-[#338A45] text-[46px] font-bold mb-4">
            About the Seller
          </h1>
          <h2 className="text-[#2E2E2E] text-[32px] font-bold mb-8">
            Pak Organics
          </h2>
          <p className="text-[24px] text-[#2E2E2E] ">
            Pak Organics Provide all kinds of organic and natural products
            specifically farmed in Pakistan.
          </p>
          <button className="btn bg-[#338A45] text-white py-[8px] px-[28px] w-60 my-5 ">
            {" "}
            View Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductAboutSaller;
