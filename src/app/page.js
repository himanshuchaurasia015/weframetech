import Description from "@/app/(Home page Components)/Description";
import ProductCard from "@/app/(Home page Components)/ProductCard";
import Productdetails from "@/app/(Home page Components)/Productdetails";
import Slider from "@/Components/Slider";

export default function Home() {
  return (
    <div className="">
      <div className="h-[45px] w-[159px] ml-[34px] mt-[17px] flex gap-[8px]">
        <div>
          <p className=" text-[14px] leading-[21px] font-[500]">Home</p>
        </div>
        <div>
          <p className="text-[#9C9C9C] text-[14px] leading-[21px] font-[500]">
            •
          </p>
        </div>
        <div>
          <p className="text-[#9C9C9C] text-[14px] leading-[21px] font-[500]">
            Art de la table
          </p>
        </div>
      </div>

      <Productdetails />
      <Description />
      <div className="p-[30px] bg-[#FBF9F899] space-y-[30px]">
        <div className="flex justify-between">
          <h2 className="text-[35px] leading-[43.4px] text-[500]">
            Articles similaires
          </h2>
          <p className="text-[16px] leading-[19.84px] text-[500] decoration-solid underline">
            Voir toute la collection
          </p>
        </div>
        <Slider />
      </div>
      <div className="p-[30px] space-y-[30px]">
        <div className="flex justify-between">
          <h2 className="text-[35px] leading-[43.4px] text-[500]">
            Ces produits pourraient vous intéresser
          </h2>
          <p className="text-[16px] leading-[19.84px] text-[500] decoration-solid underline">
            Voir toute la collection
          </p>
        </div>
        <div className="flex gap-[12px] justify-center overflow-hidden ">
          <div className="min-w-[450px] ">
            <ProductCard maxWidth={"450px"} />
          </div>
          <div className="min-w-[450px]">
            <ProductCard maxWidth={"450px"} />
          </div>
          <div className="min-w-[450px]">
            <ProductCard maxWidth={"450px"} />
          </div>
        </div>
      </div>
      {/* ON s'occupe */}
      <div className=" bg-gradient-to-t from-[#FFFFFF] to-[#fbeff5] min-h-[500px] min-w-full flex flex-col gap-[50px] justify-center items-center text-center">
        <div className="space-y-[10px]">
          <div>
            <h3 className="font-[500] text-[35px] leading-[43.4px]">
              On s’occupe de{" "}
              <span className="text-[#5CD2DD] font-[800] text-[35px] leading-[43.4px]">
                tout
              </span>
            </h3>
          </div>
          <p className="font-[400] text-[14px] leading-[17.36px] text-[#9C9C9C]">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>
        <div className=" ">
          <img
            alt="pic"
            className="min-w-[928px] h-[139px]"
            src="Frame 116.png"
          />
        </div>
      </div>
      {/* contactform */}
      <div className="flex  mx-[20px] gap-[12px]">
        {/* image */}
        <div className="  ">
          <img
            alt="pic"
            src="BUFFET_037 1.png"
            className="rounded-[20px] min-w-[703px] min-h-[300px]"
          />
        </div>
        {/* form */}
        <div className="bg-[#FFF3F9] w-[753px] h-[300px] px-[34px] py-[40px] flex flex-col justify-center gap-[20px] rounded-[20px]">
          <div>
            <h3 className="font-[500] text-[43px] leading-[53.32px]">
              S’inscrire & économiser{" "}
              <span className="font-[500] text-[43px] leading-[53.32px] text-[#5CD2DD]">
                10%
              </span>
            </h3>
          </div>
          <div>
            <p className="font-[500] text-[14px] leading-[22px] text-[#BDA2B0]">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest most opportunity didnt. Yet busy any
              meeting shark light marginalised 4-blocker message. Productize
              corporate nail caught synergy highlights lunch. Company another
              pushback items dear or any.
            </p>
          </div>

          <div className="flex gap-[8px]">
            <input
              placeholder="john@doe.com"
              type="email"
              className="rounded-md w-[565px] border-[#F5E1EB]  outline-none  border-[1px] py-[19px] px-[16px]"
            />
            <button className="bg-[#5CD2DD] py-[19px] px-[16px] rounded-md w-[167px] h-[60px]">
              S’inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
