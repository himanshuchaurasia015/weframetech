function Description() {
  return (
    <div className="flex justify-around pb-[50px] px-10 mt-[40px] gap-[10px]">
      {/* description */}
      <div className="min-w-[640px]">
        <h2>Description produit</h2>
        <p className="text-[14px] leading-[18.2px] font-[400] text-[#9C9C9C]">
          Festi vous propose à la location un/une &quot;Jewel – grand couteau/10pc&quot;
          pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour
          votre mariage, une fête d&apos;anniversaire ou du personnel, ce produit a
          fait l&apos;objet d&apos;une sélection rigoureuse par notre équipe. Il est en
          location chez nous sous la référence &quot;VAJGC&quot;. Nous sommes à votre
          disposition pour que les événements de nos clients, même en
          last-minute, soient toujours une réussite. Vous pourrez trouver tout
          une série d&apos;autre produit à louer de ce type dans la catégorie &quot;Art de
          la Table&quot;.
        </p>
      </div>
      {/* expandable buttons */}
      <div className="min-w-[758px]  bg-[#FBF9F899] max-h-[62px]">
        <div className="p-[20px] flex justify-between bg-[#FBF9F899]">
          <p className="h-[21px]">Livraisons</p>
          <button>+</button>
        </div>
        <div className="p-[20px] flex justify-between bg-[#FBF9F899]">
          <p className="h-[21px]">Questions</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default Description;
