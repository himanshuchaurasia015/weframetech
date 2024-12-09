import ProductCard from "../app/(Home page Components)/ProductCard";

function Slider() {
  return (
    <div className="relative min-w-full max-w-lg overflow-hidden">
      <div className="flex transition-transform duration-300 ease-in-out gap-5">
        <div className="min-w-[330px]">
          <ProductCard />
        </div>
        <div className="min-w-[330px]">
          <ProductCard />
        </div>
        <div className="min-w-[330px]">
          <ProductCard />
        </div>
        <div className="min-w-[330px]">
          <ProductCard />
        </div>
        <div className="min-w-[330px]">
          <ProductCard />
        </div>
        <div className="min-w-[330px]">
          <ProductCard />
        </div>
        <div className="min-w-[330px]">
          <ProductCard />
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#5CD2DD] text-white p-2 "
        id="prevButton"
      >
        ←
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#5CD2DD] text-white p-2"
        id="nextButton"
      >
        →
      </button>
    </div>
  );
}

export default Slider;
