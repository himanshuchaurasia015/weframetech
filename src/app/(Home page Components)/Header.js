import Image from "next/image";

Image;
export default function Header() {
  return (
    <header className="container min-w-full mx-auto px-4 h-[168px] border-b-[1px] bg-white block">
      <nav className="space-y-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Image
            src="./Group.png"
            alt="Logo"
            height={65}
            width={133}
            className=" mt-[33px]"
          />

          {/* Search Bar */}
          <form className="flex items-center bg-[#F9FAFB] rounded-md mt-[29px] w-[768px] h-[50px] justify-between">
            <input
              type="search"
              placeholder="Rechercher un produit"
              className="border-none outline-none px-2 bg-inherit"
            />
            <button type="submit">
              <img src="Group 94.png" alt="Search icon" />
            </button>
          </form>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4 ">
            <div className="flex items-center space-x-2">
              <img
                src="lightbulb-01.png"
                alt="Lightbulb icon"
                className="w-[18px] h-[18px]"
              />
              <p className="text-[#3B4347] text-[14px] leading-[21px] font-[500]">
                Inspirations
              </p>
            </div>

            <div className="flex items-center space-x-2 h-[48px] w-[164px] p-[10px]">
              <img
                src="heart.png"
                alt="Heart icon"
                className="w-[20px] h-[20px]"
              />
              <p className="text-[#3B4347] text-[14px] leading-[21px] font-[500]">
                Mes favoris
              </p>
              <p className="bg-[#CAD2D566] rounded-full px-1 text-[10px] leading-[15px] font-[500]">
                28
              </p>
            </div>

            <div className="flex items-center w-[105px] h-[48px] px-[16px] py-[10px] bg-[#0093D0] space-x-2 text-white rounded-md">
              <img
                src="shopping-cart-01.png"
                alt="Cart icon"
                className="w-[20px] h-[20px]"
              />
              <p>Panier</p>
            </div>

            <div className="flex items-center space-x-2 w-[100px] h-[44px]">
              <img
                src="Avatar.png"
                alt="User avatar"
                className="w-[44px] h-[44px]"
              />
              <p>FR</p>
              <img
                src="chevron-down.png"
                alt="Dropdown icon"
                className="w-[10px] h-[6px]"
              />
            </div>
          </div>
        </div>
        {/* navigations */}
        <div className="pt-2  min-w-full">
          <ul className=" flex justify-between">
            <li className="border-b-4 border-[#0093D0] pb-[15px]">
              <a className="h-[21px] text-[#0093D0] font-bold ">
                ART DE LA TABLE
              </a>
            </li>
            <li>
              <a className="h-[21px] text-gray-500">MOBILIER</a>
            </li>
            <li>
              <a className="h-[21px] text-gray-500">NAPPAGE</a>
            </li>
            <li>
              <a className="h-[21px] text-gray-500">MATÉRIEL DE SALLE</a>
            </li>
            <li>
              <a className="h-[21px] text-gray-500">CUISINE</a>
            </li>
            <li>
              <a className="h-[21px] text-gray-500">BARBECUE</a>
            </li>
            <li>
              <a className="h-[21px] text-gray-500">TENTE</a>
            </li>
            <li>
              <a className="h-[21px] text-gray-500">CHAUFFAGE</a>
            </li>
            <li>
              <a className="h-[21px] text-gray-500">PODIUM - PISTE DE DANSE</a>
            </li>
            <li>
              <a className="h-[21px] text-gray-500">SON ET LUMIÈRE</a>
            </li>
            <li>
              <a className="h-[21px] text-gray-500">PACKS</a>
            </li>
            <li>
              <a className="h-[21px] text-gray-500">CONSOMMABLES</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
