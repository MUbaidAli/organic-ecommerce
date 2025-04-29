function ProductCarousel() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() =>
            document
              .getElementById("carousel")
              .scrollBy({ left: -300, behavior: "smooth" })
          }
          className="btn btn-circle absolute left-0 top-1/2  z-10 mx-3"
        >
          ❮
        </button>

        {/* Carousel */}
        <div
          id="carousel"
          className="w-full carousel carousel-center rounded-box p-4 space-x-4 overflow-x-auto scroll-smooth"
        >
          {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((item) => (
            <div className="carousel-item">
              <div className="w-64 bg-base-100  shadow-sm ">
                <figure>
                  <img
                    className="w-64 rounded-box"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() =>
            document
              .getElementById("carousel")
              .scrollBy({ left: 300, behavior: "smooth" })
          }
          className="btn btn-circle absolute right-0 top-1/2  z-10 mx-3"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
export default ProductCarousel;
