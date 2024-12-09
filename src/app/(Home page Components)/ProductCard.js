import Image from "next/image";

function ProductCard({ maxWidth }) {
  return (
    <div
      className={`group max-h-[438px] gap-[8px] ${
        maxWidth ? `min-w-[${maxWidth}]` : "min-w-[330px]"
      }`}
    >
      <div className="bg-[#F9F7F5] p-[20px]">
        <div className="flex mx-3 justify-between mb-5">
          <div className="bg-[#F9F7F5] ">
            <Image alt="pic" src="/heart2.png" width={27.64} height={25.34} />
          </div>
          <div className="flex gap-[2px] items-center ">
            <p className="font-[500] text-[10px] leading-[15px]  bg-white py-[0.5px] px-[3px] text-center rounded-[4px]">
              Art de la table
            </p>
            <div className="hidden group-hover:block">
              <p className="font-[500] text-[10px] leading-[15px] bg-white py-[0.5px] px-[3px] text-center rounded-[4px] ">
                LOT
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F7F5] flex flex-col items-center">
          <img
            alt="pic"
            className="bg-[#F9F7F5] group transition-transform duration-300 ease-out transform group-hover:scale-105"
            src="/Table ronde 165cm Festi 1.png "
          />
          {/* Quantity increase/decrease buttons */}
          <div className="flex justify-center max-w-[310px] max-h-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white items-center py-[5px] px-[8px] gap-[8px] rounded-md">
            <div className="flex justify-center items-center h-[49px]  rounded-sm px-2 gap-[5px]">
              <div>
                <p className="text-[12px] leading-[18px] font-[400]">QTÉ</p>
              </div>
              <div className="h-[40px] w-[184px] rounded-[4px] flex justify-between bg-[#F3F3F366] py-[8px] px-[6px]">
                <button
                  type="button"
                  className=" text-center h-[12px] w-[12px] "
                >
                  -
                </button>
                <input
                  type="number"
                  value="1"
                  readOnly
                  className="outline-none text-center w-[80px] bg-[#F3F3F366]"
                />
                <button
                  type="button"
                  className="text-center h-[12px] w-[12px] "
                >
                  +
                </button>
              </div>
            </div>
            <button
              type="button"
              className="bg-[#EE4197] text-white w-[74px] h-[39px] rounded-md py-[9px] px-[12px] text-[14px] leading-[21px] font-[500]"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
      {/* Title and price */}
      <div className="pb-[20px] px-[10px] p-[10px] space-y-[10px]">
        <div className="flex justify-between">
          <p className="text-[24px] leading-[30px] font-[400]">Title</p>
          <p className="text-[24px] leading-[30px] font-[500]">0€</p>
        </div>
        {/* Details */}
        <div className="flex justify-between">
          <p className="text-[14px] leading-[17.5px] font-[400] text-[#9C9C9C]">
            0,35€/Pièce ·{" "}
            <span className="text-[10px] leading-[12.5px] font-[400]">
              RÉF : VABGN5
            </span>
          </p>
          <div className="py-[6px] px-[8px] rounded-[20px] bg-[#F1F4F6]">
            <p className="text-[11px] leading-[13.75px] font-[500] text-[#546A7D]">
              20 pièces
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
