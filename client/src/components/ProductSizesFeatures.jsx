import productRev from "../assets/productRev.svg";
function ProductSizesFeatures() {
  return (
    <>
      <div className="relative bg-[#EFFAF280] bgblur h-full  ">
        <div className="relative">
          <div className="lg:mr-auto ml-0 lg:grid flex-row-reverse lg:max-w-8xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:pr-8 ">
            <div className=" px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2 flex-2">
              <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-9 font-sans text-3xl font-bold leading-none tracking-tight text-[#338A45] sm:text-4xl md:mx-auto">
                    Available in All Sizes
                  </h2>
                </div>
                <div className=" max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
                  <div className="space-y-6 sm:px-10">
                    <div className="flex  max-w-md ">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded bg-[#338A45]">
                          <p className="montserrat font-bold  text-[32px] text-white">
                            S
                          </p>
                        </div>
                      </div>
                      <div className="montserrat ml-3">
                        <h6 className="mb-1 mt-1 text-[24px] font-bold leading-5">
                          The deep ocean
                        </h6>
                        <p className="text-sm text-gray-900">
                          Webtwo ipsum orkut reddit meebo skype
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded bg-[#338A45]">
                          <p className="montserrat font-bold  text-[32px] text-white">
                            S
                          </p>
                        </div>
                      </div>
                      <div className="montserrat ml-3">
                        <h6 className="mb-1 mt-1 text-[24px] font-bold leading-5">
                          The deep ocean
                        </h6>
                        <p className="text-sm text-gray-900">
                          Webtwo ipsum orkut reddit meebo skype
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded bg-[#338A45]">
                          <p className="montserrat font-bold  text-[32px] text-white">
                            S
                          </p>
                        </div>
                      </div>
                      <div className="montserrat ml-3">
                        <h6 className="mb-1 mt-1 text-[24px] font-bold leading-5">
                          The deep ocean
                        </h6>
                        <p className="text-sm text-gray-900">
                          Webtwo ipsum orkut reddit meebo skype
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded bg-[#338A45]">
                          <p className="montserrat font-bold  text-[32px] text-white">
                            S
                          </p>
                        </div>
                      </div>
                      <div className="montserrat ml-3">
                        <h6 className="mb-1 mt-1 text-[24px] font-bold leading-5">
                          The deep ocean
                        </h6>
                        <p className="text-sm text-gray-900">
                          Webtwo ipsum orkut reddit meebo skype
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 flex-1 ">
              <div className="-ml-0 pr-6 md:-ml-16 lg:relative lg:m-0  lg:px-0">
                <img
                  alt="Inbox user interface"
                  loading="lazy"
                  //   width={647}
                  //   height={486}
                  className="w-full h-full  shadow-xl  ring-opacity-5 lg:reltaive static lg:right-0  lg:max-w-none "
                  style={{
                    color: "transparent",
                    // width: "592px",
                    // height: "658px",
                  }}
                  //   src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
                  src={productRev}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSizesFeatures;
