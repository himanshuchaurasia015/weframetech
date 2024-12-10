function Footer() {
  return (
    <>
      <footer className="h-[300px] min-w-full flex justify-between px-[80px] pb-[80px] ">
        <div className="flex items-center gap-[77px] min-w-[799px]">
          <div className="flex-shrink-0">
            <img alt="pic" src="Group.png" className="w-[133px] h-[65px]" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="leading-[22.32px] text-[18px] font-[700]">
              INFOS PRATIQUES
            </p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              À propos
            </p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              Livraisons & Reprises
            </p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              Mode d emploi
            </p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              F.A.Q
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="leading-[22.32px] text-[18px] font-[700]">LÉGAL</p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              Mentions légales
            </p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              CGU
            </p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              CGV
            </p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              Politique de confidentialité
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="leading-[22.32px] text-[18px] font-[700]">
              MON COMPTE
            </p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              Accéder à mon compte
            </p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              Ma liste d’envie
            </p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              Créer un compte
            </p>
            <p className="leading-[17.36px] text-[14px] font-[400] text-[#393939]">
              Mot de passe oublié
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[12px]">
          <p className="leading-[22.32px] text-[18px] font-[700] text-[#393939]">
            NOUS SUIVRE
          </p>
          <div className="flex gap-[10px]">
            <img alt="pic" src="Frame 117.png" />
            <img alt="pic" src="Frame 117 (1).png" />
            <img alt="pic" src="Frame 117 (2).png" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
