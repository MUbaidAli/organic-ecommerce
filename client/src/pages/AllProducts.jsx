import Navbar from "../components/Navbar";
import oilBottle from "../assets/oilbottle.svg";
import rotation1 from "../assets/rotation1.svg";
import rotation2 from "../assets/rotation2.svg";
import rotation3 from "../assets/rotation3.svg";
import rotation4 from "../assets/rotation4.svg";
function AllProducts() {
  return (
    <>
      <Navbar />
      <div className="w-full py-50">
        <div class="relative w-75 h-75 mx-auto mt-10">
          {/* Rotating wrapper */}
          <div class="absolute inset-0 animate-spin-slow z-5">
            <div class="relative w-full h-full rounded-full">
              {/* Item 1 – Top Center */}
              <div class="w-full absolute top-0 left-1/2 transform -translate-x-1/2">
                <img
                  src={oilBottle}
                  class="w-20 h-20 rounded-full object-cover counter-rotate"
                />
              </div>

              {/* Item 2 – Top Right */}
              <div class="absolute w-full" style={{ top: "5%", left: "85%" }}>
                <img
                  src={rotation1}
                  class="w-30 h-30 rounded-full object-cover counter-rotate"
                />
              </div>

              {/* Item 3 – Bottom Right */}
              <div
                class="absolute w-full"
                style={{ bottom: "0%", left: "70%" }}
              >
                <img
                  src={rotation2}
                  class="w-20 h-20 rounded-full object-cover counter-rotate"
                />
              </div>

              {/* Item 4 – Bottom Left */}
              <div class="absolute w-full" style={{ bottom: "0%", left: "0%" }}>
                <img
                  src={rotation3}
                  class="w-30 h-30 rounded-full object-cover counter-rotate"
                />
              </div>

              {/* Item 5 – Top Left */}
              <div
                class="absolute w-full z-5"
                style={{ top: "-30%", right: "-45%" }}
              >
                <img
                  src={rotation4}
                  class="w-30 h-30 rounded-full object-cover counter-rotate"
                />
              </div>
            </div>
          </div>

          {/* Center item */}
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
            <div class="w-100 h-100 bg-[#FFFFFFB2] rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
