import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <div
        className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="stats"
        role="tabpanel"
        aria-labelledby="stats-tab"
      >
        <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">
              Public repositories
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
            <dd className="text-gray-500 dark:text-gray-400">
              Open source projects
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">90+</dt>
            <dd className="text-gray-500 dark:text-gray-400">
              Top Forbes companies
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Organizations</dd>
          </div>
        </dl>
      </div> */}
      {/* <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Pizza"
          />
        </div>
      </div> */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() =>
            document
              .getElementById("carousel")
              .scrollBy({ left: -300, behavior: "smooth" })
          }
          className="btn btn-circle absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          ❮
        </button>

        {/* Carousel */}
        <div
          id="carousel"
          className="carousel carousel-center rounded-box p-4 space-x-4 overflow-x-auto scroll-smooth"
        >
          <div className="carousel-item">
            <div className="card bg-base-100  shadow-sm ">
              {/* <figure> */}
              <img
                className="w-64 rounded-box"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
              {/* </figure> */}
              {/* <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div> */}
            </div>
          </div>

          {/* <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Pizza"
              className="w-64 rounded-box"
            />
          </div> */}
        </div>

        {/* Right Button */}
        <button
          onClick={() =>
            document
              .getElementById("carousel")
              .scrollBy({ left: 300, behavior: "smooth" })
          }
          className="btn btn-circle absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          ❯
        </button>
      </div>
    </>
  );
}

export default App;
