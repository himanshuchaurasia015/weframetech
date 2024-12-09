function Productdetails() {
  return (
    <div className="flex  justify-evenly">
      {/* photos */}
      <div className="flex justify-between bg-[#F8F6F4] rounded-md max-w-[761px] h-[652px]">
        <div>
          <img
            alt="pic"
            className="min-h-[55px] min-w-[55px]"
            src="Table ronde 165cm Festi 2.png"
          />
          <img
            alt="pic"
            className="min-h-[55px] min-w-[55px]"
            src="Group 97.png"
          />
          <img
            alt="pic"
            className="min-h-[55px] min-w-[55px]"
            src="Group 97.png"
          />
          <img
            alt="pic"
            className="min-h-[55px] min-w-[55px]"
            src="Group 97.png"
          />
        </div>
        <div>
          <img
            alt="pic"
            className="bg-[#F8F6F4] min-w-[552px] h-[552px]"
            src="Location Cheese big picture 1.png"
          />
        </div>
      </div>
      {/* details */}
      <div className="h-[635px] w-[754px] flex flex-col justify-between">
        <div className="flex flex-col gap-[10px]">
          {/* title and price */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex justify-between">
              <h1 className="text-[30px] font-[400] leading-[37.5px]">
                Cheese – appareil à raclette 1/2 roue
              </h1>
              <img
                alt="pic"
                className="h-[25px] w-[27px]"
                src="Vector.png"
              ></img>
            </div>
            <p className="text-[24px] font-[400] leading-[30px]">
              39,50€{" "}
              <span className="text-[14px] font-[400] leading-[17.5px] text-[#9C9C9C]">
                {" "}
                /piece
              </span>
            </p>
          </div>
          {/* measurement */}
          <div className="flex justify-between w-full border-y-[0.5px] border-[#9C9C9C] py-[10px] border-opacity-[40%]">
            <div className="flex gap-[10px] ">
              <div className="flex gap-[10px]">
                <img alt="pic" src="Capa_1.png" className="h-[24px] w-[24px]" />
                <p className="text-[16px] font-[400] leading-[20px]">
                  20<sup>cm</sup>
                </p>
              </div>
              <div className="flex gap-[10px]">
                <img alt="pic" src="Frame.png" className="h-[25px] w-[25px]" />
                <p className="text-[16px] font-[400] leading-[20px]">
                  50<sup>cm</sup>
                </p>
              </div>
            </div>

            <div>
              <p className="text-[12px] font-[500] leading-[15.6px] text-[#9C9C9C]">
                RÉF : VABGN5
              </p>
            </div>
          </div>
          {/* details */}
          <div className="text-[#5D5D5D]">
            <p>
              Location appareil à raclette - Raclette traditionnelle 1/2 roue
            </p>
            <p> Réglable en hauteur</p>
            <p>Appareil à raclette professionnel Boîtier de</p>
            <p>chauffe horizontal réglable en hauteur</p>
            <br></br>
            <p>220V</p>
            <p>900W</p>
          </div>
        </div>

        {/* buttons */}
        <div className="flex">
          <div className="flex justify-center items-center h-[49px] border-[1px] rounded-sm  border-[#00000021] mr-4 px-2">
            <button type="button" className=" w-[16px] h-[16px]">
              -
            </button>
            <input
              type="number"
              value="1"
              readOnly
              className="outline-none text-center w-[80px]"
            />
            <button type="button" className=" w-[16px] h-[16px]">
              +
            </button>
          </div>
          <button
            type="button"
            className="bg-[#5CD2DD] text-white w-[592px] h-[50px] rounded-sm py-[10px]"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
