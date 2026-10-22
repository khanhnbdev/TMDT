const imgStarHalfFilled = "/assets/7e570f4b-5c5b-4413-9e45-58746319c85d.svg";
const imgFourHalfStar = "/assets/b331e7cf-01c0-4f5f-96eb-c0ed1384b848.svg";
const imgGroup = "/assets/46af2b82-ff02-45d7-a51d-b68541765f6b.svg";
const imgFillEye = "/assets/63e23d14-6217-4490-9597-7f913c6d770d.svg";
const imgHeartSmall = "/assets/dbe3ec49-f49d-4b24-b401-2ce9d5885662.svg";
const imgFillHeart = "/assets/85f30034-cedd-4a7b-8fb1-97ddeef7c0fe.svg";
const imgFiveStar = "/assets/cfd39553-e6d7-47f0-8a22-9e62396fa189.svg";
const imgThreeStar = "/assets/b0857ae9-c96c-4835-887d-2fa229b50c29.svg";
const imgFourStar = "/assets/42f0754f-0ee7-41ae-9898-9a576adc62f1.svg";
const imgEos250D03500X5001 = "/assets/90fec332-190d-4496-895f-8fee7c4357a1.png";
const img71RdoeXxtrL1 = "/assets/87200254-be30-4262-9284-bd90477eb67d.png";
const imgIdeapadGaming3I01500X5001 = "/assets/c9894fff-2c12-432c-90fc-d8883c4805ea.png";
const imgCopaSense1 = "/assets/c32574d0-5929-47c4-acdd-525582ebc4d6.png";
const imgGp11Prd31 = "/assets/b0b1485f-4f17-4106-a700-25f55754858a.png";
const img698717Z8A1X34750011000000LightReversibleQuiltedSatinJacket1 = "/assets/83d1c1ef-ff55-434e-9740-fd18d514ec6c.png";
const imgColourChnage = "/assets/39bb6073-dd62-4bd4-9674-c7e831335fb4.svg";
const imgColourChnage1 = "/assets/4fee419e-26da-42ca-b6e7-783981ab15b2.svg";
const imgColourChnage2 = "/assets/5d9bc888-adcf-4526-bd0d-7e2cbda6f71d.svg";
const imgCurologyJ7PKvQrTUsMUnsplash1 = "/assets/13323d94-a5bd-48de-ab2b-16501505b6f1.png";
const imgIconsArrowRight = "/assets/386c8c08-47a4-4e16-b865-d81bab912cbd.svg";
const imgFillWithRightArrow = "/assets/f8260b6e-6c2f-4711-809e-05646c5772da.svg";
const imgIconsArrowLeft = "/assets/4a3a17a0-62e0-4f26-b8fd-c285361a5591.svg";
const imgFillWithLeftArrow = "/assets/b00611fb-8e45-4dbc-8dce-8db12257e1de.svg";
const imgNewMercedesBenzGtrLicensedRideOnCarKidsElectricToyCar1 = "/assets/4d30d3ca-a2af-4323-86da-b820a5764c6d.png";
const imgColourChnage3 = "/assets/ef3803e3-5c71-451d-909b-45fc14df1959.svg";

type ButtonProps = {
  className?: string;
  button?: "Primary";
  hover?: boolean;
};

function Button({ className, button = "Primary", hover = false }: ButtonProps) {
  return (
    <div className={className || "bg-[#db4444] content-stretch flex items-center justify-center px-[48px] py-[16px] relative rounded-[4px]"} role="button" tabIndex={0} data-node-id="85:1786">
      <p className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[#fafafa] text-[16px] whitespace-nowrap" data-node-id="61:2874">
        View All Products
      </p>
    </div>
  );
}

function StarHalfFilled({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="61:2636" data-name="star-half-filled">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStarHalfFilled} />
    </div>
  );
}

function FourHalfStar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[20px] relative w-[100px]"} data-node-id="61:2650" data-name="Four Half Star">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFourHalfStar} />
    </div>
  );
}

function QuickView({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="55:353" data-name="Quick View">
      <div className="absolute inset-[20.83%_9.95%]" data-node-id="55:350" data-name="Group">
        <div className="absolute inset-[-5.36%_-3.9%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup} />
        </div>
      </div>
    </div>
  );
}

function FillEye({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[34px]"} data-node-id="55:362" data-name="Fill Eye" role="button" tabIndex={0} aria-label="Quick view">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFillEye} />
      <QuickView className="absolute inset-[14.71%] overflow-clip" />
    </div>
  );
}

function HeartSmall({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="55:377" data-name="heart small">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeartSmall} />
    </div>
  );
}

function FillHeart({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[34px]"} data-node-id="55:360" data-name="Fill Heart" role="button" tabIndex={0} aria-label="Add to wishlist">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFillHeart} />
    </div>
  );
}

function NewButton({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#0f6] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[4px]"} data-node-id="55:386" data-name="New Button">
      <p className="[word-break:break-word] font-['Poppins:Regular'] leading-[18px] not-italic relative shrink-0 text-[#fafafa] text-[12px] whitespace-nowrap" data-node-id="55:327">
        NEW
      </p>
    </div>
  );
}

function FiveStar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[20px] relative w-[100px]"} data-node-id="61:2217" data-name="Five star">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFiveStar} />
    </div>
  );
}

function ThreeStar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[20px] relative w-[100px]"} data-node-id="61:2414" data-name="Three Star">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgThreeStar} />
    </div>
  );
}

function FourStar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[20px] relative w-[100px]"} data-node-id="61:2235" data-name="Four Star">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFourStar} />
    </div>
  );
}

type CartProps = {
  className?: string;
  product?: "Dslr camera-No Discount" | "Dog Food-No Discount" | "Laptop-no discount" | "Soccer boat-color choosing" | "Gaming control-color choosing" | "Man jacket-color choosing";
};

function Cart({ className, product = "Dslr camera-No Discount" }: CartProps) {
  const isDogFoodNoDiscount = product === "Dog Food-No Discount";
  const isDogFoodNoDiscountOrLaptopNoDiscountOrSoccerBoatColorChoosingOr = ["Dog Food-No Discount", "Laptop-no discount", "Soccer boat-color choosing", "Gaming control-color choosing", "Man jacket-color choosing"].includes(product);
  const isDslrCameraNoDiscount = product === "Dslr camera-No Discount";
  const isGamingControlColorChoosing = product === "Gaming control-color choosing";
  const isGamingControlColorChoosingOrManJacketColorChoosing = ["Gaming control-color choosing", "Man jacket-color choosing"].includes(product);
  const isLaptopNoDiscount = product === "Laptop-no discount";
  const isLaptopNoDiscountOrSoccerBoatColorChoosing = ["Laptop-no discount", "Soccer boat-color choosing"].includes(product);
  const isManJacketColorChoosing = product === "Man jacket-color choosing";
  const isSoccerBoatColorChoosing = product === "Soccer boat-color choosing";
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] items-start relative"} data-product-card="true" id={isManJacketColorChoosing ? "node-91_2096" : isGamingControlColorChoosing ? "node-91_2015" : isSoccerBoatColorChoosing ? "node-91_1942" : isLaptopNoDiscount ? "node-91_1756" : isDogFoodNoDiscount ? "node-89_1440" : "node-89_973"}>
      <div className="bg-[#f5f5f5] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]" id={isManJacketColorChoosing ? "node-91_2097" : isGamingControlColorChoosing ? "node-91_2016" : isSoccerBoatColorChoosing ? "node-91_1943" : isLaptopNoDiscount ? "node-91_1757" : isDogFoodNoDiscount ? "node-89_1441" : "node-89_974"} data-name="Cart">
        <div className={`absolute ${isDogFoodNoDiscountOrLaptopNoDiscountOrSoccerBoatColorChoosingOr ? "content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]" : "bg-black bottom-0 h-[41px] left-0 right-0 rounded-bl-[4px] rounded-br-[4px]"}`} id={isManJacketColorChoosing ? "node-91_2098" : isGamingControlColorChoosing ? "node-91_2017" : isSoccerBoatColorChoosing ? "node-91_1944" : isLaptopNoDiscount ? "node-91_1758" : isDogFoodNoDiscount ? "node-89_1444" : "node-89_975"}>
          {isDogFoodNoDiscountOrLaptopNoDiscountOrSoccerBoatColorChoosingOr && (
            <>
              <FillHeart className="relative shrink-0 size-[34px]" />
              <FillEye className="relative shrink-0 size-[34px]" />
            </>
          )}
        </div>
        {["Dog Food-No Discount", "Laptop-no discount", "Soccer boat-color choosing", "Man jacket-color choosing"].includes(product) && (
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-1/2 overflow-clip top-1/2 w-[190px]" id={isManJacketColorChoosing ? "node-91_2102" : isSoccerBoatColorChoosing ? "node-91_1948" : isLaptopNoDiscount ? "node-91_1761" : "node-89_1447"}>
            {isDogFoodNoDiscount && (
              <div className="absolute h-[180px] left-[38px] top-0 w-[115px]" data-node-id="89:1470" data-name="71RdoeXxtrL 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[102.46%] left-[-2.56%] max-w-none top-[-0.82%] w-[104.15%]" src={img71RdoeXxtrL1} />
                </div>
              </div>
            )}
            {isLaptopNoDiscount && (
              <div className="absolute h-[180px] left-[9px] top-0 w-[172px]" data-node-id="91:2340" data-name="ideapad-gaming-3i-01-500x500 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[138.1%] left-[-22.5%] max-w-none top-[-17.86%] w-[145%]" src={imgIdeapadGaming3I01500X5001} />
                </div>
              </div>
            )}
            {isSoccerBoatColorChoosing && (
              <div className="absolute h-[164px] left-[2px] top-[8px] w-[186px]" data-node-id="91:1977" data-name="Copa_Sense 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[146.6%] left-[-15.38%] max-w-none top-[-27.67%] w-[129.06%]" src={imgCopaSense1} />
                </div>
              </div>
            )}
            {isManJacketColorChoosing && (
              <div className="absolute h-[176px] left-[4px] top-[2px] w-[182px]" data-node-id="91:2058" data-name="698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[137.93%] left-[-16.89%] max-w-none top-[-18.28%] w-[133.78%]" src={img698717Z8A1X34750011000000LightReversibleQuiltedSatinJacket1} />
                </div>
              </div>
            )}
          </div>
        )}
        {isDslrCameraNoDiscount && (
          <>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[24px] left-[calc(50%-48px)] not-italic text-[16px] text-white top-[calc(50%+92px)] whitespace-nowrap" data-node-id="89:976">
              Add To Cart
            </p>
            <div className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]" data-node-id="89:978">
              <FillHeart className="relative shrink-0 size-[34px]" />
              <FillEye className="relative shrink-0 size-[34px]" />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-[calc(50%-4px)] overflow-clip top-[calc(50%-20px)] w-[190px]" data-node-id="89:1005">
              <div className="absolute h-[163px] left-[22px] top-[8px] w-[146px]" data-node-id="91:2423" data-name="eos-250d-03-500x500 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[116.56%] left-[-15.18%] max-w-none top-[-8.28%] w-[130.89%]" src={imgEos250D03500X5001} />
                </div>
              </div>
            </div>
          </>
        )}
        {isGamingControlColorChoosing && (
          <>
            <NewButton className="absolute bg-[#0f6] content-stretch flex items-center justify-center left-[12px] px-[12px] py-[4px] rounded-[4px] top-[12px]" />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-1/2 overflow-clip top-1/2 w-[190px]" data-node-id="91:2021">
              <div className="absolute h-[150px] left-[6px] top-[15px] w-[178px]" data-node-id="91:1979" data-name="GP11_PRD3 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[144.77%] left-[-61.64%] max-w-none top-[-27.35%] w-[216.91%]" src={imgGp11Prd31} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" id={isManJacketColorChoosing ? "node-91_2104" : isGamingControlColorChoosing ? "node-91_2023" : isSoccerBoatColorChoosing ? "node-91_1950" : isLaptopNoDiscount ? "node-91_1763" : isDogFoodNoDiscount ? "node-89_1449" : "node-89_982"}>
        <p className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" id={isManJacketColorChoosing ? "node-91_2105" : isGamingControlColorChoosing ? "node-91_2024" : isSoccerBoatColorChoosing ? "node-91_1951" : isLaptopNoDiscount ? "node-91_1764" : isDogFoodNoDiscount ? "node-89_1450" : "node-89_983"}>
          {isManJacketColorChoosing ? "Quilted Satin Jacket" : isGamingControlColorChoosing ? "GP11 Shooter USB Gamepad" : isSoccerBoatColorChoosing ? "Jr. Zoom Soccer Cleats" : isLaptopNoDiscount ? "ASUS FHD Gaming Laptop" : isDogFoodNoDiscount ? "Breed Dry Dog Food" : "CANON EOS DSLR Camera"}
        </p>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" id={isManJacketColorChoosing ? "node-91_2106" : isGamingControlColorChoosing ? "node-91_2025" : isSoccerBoatColorChoosing ? "node-91_1952" : isLaptopNoDiscount ? "node-91_1765" : isDogFoodNoDiscount ? "node-89_1451" : "node-89_984"}>
          <div className="content-stretch flex items-start relative shrink-0" id={isManJacketColorChoosing ? "node-91_2107" : isGamingControlColorChoosing ? "node-91_2026" : isSoccerBoatColorChoosing ? "node-91_1953" : isLaptopNoDiscount ? "node-91_1766" : isDogFoodNoDiscount ? "node-89_1452" : "node-89_985"}>
            <p className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[#db4444] text-[16px] whitespace-nowrap" id={isManJacketColorChoosing ? "node-91_2108" : isGamingControlColorChoosing ? "node-91_2027" : isSoccerBoatColorChoosing ? "node-91_1954" : isLaptopNoDiscount ? "node-91_1767" : isDogFoodNoDiscount ? "node-89_1453" : "node-89_986"}>
              {isGamingControlColorChoosingOrManJacketColorChoosing ? "$660" : isSoccerBoatColorChoosing ? "$1160" : isLaptopNoDiscount ? "$700" : isDogFoodNoDiscount ? "$100" : "$360"}
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" id={isManJacketColorChoosing ? "node-91_2109" : isGamingControlColorChoosing ? "node-91_2028" : isSoccerBoatColorChoosing ? "node-91_1955" : isLaptopNoDiscount ? "node-91_1768" : isDogFoodNoDiscount ? "node-89_1454" : "node-89_987"}>
            {isLaptopNoDiscountOrSoccerBoatColorChoosing && (
              <>
                <FiveStar className="h-[20px] relative shrink-0 w-[100px]" />
                <p className={`[word-break:break-word] font-["Poppins:SemiBold"] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black ${isSoccerBoatColorChoosing ? "w-[32px]" : "w-[40px]"}`} id={isSoccerBoatColorChoosing ? "node-91_1957" : "node-91_1770"}>
                  {isSoccerBoatColorChoosing ? "(35)" : isLaptopNoDiscount ? "(325)" : ""}
                </p>
              </>
            )}
            {isGamingControlColorChoosingOrManJacketColorChoosing && (
              <>
                <FourHalfStar className="h-[20px] relative shrink-0 w-[100px]" />
                <p className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]" id={isManJacketColorChoosing ? "node-91_2111" : "node-91_2030"}>
                  (55)
                </p>
              </>
            )}
            {isDslrCameraNoDiscount && (
              <>
                <FourStar className="h-[20px] relative shrink-0 w-[100px]" />
                <p className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]" data-node-id="89:989">
                  (95)
                </p>
              </>
            )}
            {isDogFoodNoDiscount && (
              <>
                <ThreeStar className="h-[20px] relative shrink-0 w-[100px]" />
                <p className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]" data-node-id="89:1456">
                  (35)
                </p>
              </>
            )}
          </div>
        </div>
        {["Soccer boat-color choosing", "Gaming control-color choosing", "Man jacket-color choosing"].includes(product) && (
          <div className="h-[20px] relative shrink-0 w-[48px]" id={isManJacketColorChoosing ? "node-91_2112" : isGamingControlColorChoosing ? "node-91_2031" : "node-91_1958"} data-name="Colour Chnage">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={isManJacketColorChoosing ? imgColourChnage2 : isGamingControlColorChoosing ? imgColourChnage1 : imgColourChnage} />
          </div>
        )}
      </div>
    </div>
  );
}

function CartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartProperty25({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] items-start relative"} data-product-card="true" data-node-id="91:2395" data-name="Cart With Flat Discount /Cart With Flat Discount/Cart With Flat Discount/Cart With Flat Discount/Cart/Property 25">
      <div className="bg-[#f5f5f5] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]" data-node-id="91:2396" data-name="Cart">
        <div className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]" data-node-id="91:2397">
          <FillHeart className="relative shrink-0 size-[34px]" />
          <FillEye className="relative shrink-0 size-[34px]" />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-1/2 top-1/2 w-[190px]" data-node-id="91:2400" />
        <div className="absolute h-[159px] left-[49px] top-[46px] w-[172px]" data-node-id="91:2401" data-name="curology-j7pKVQrTUsM-unsplash 1">
          <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgCurologyJ7PKvQrTUsMUnsplash1} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="91:2402">
        <p className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="91:2403">{`Curology Product Set `}</p>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="91:2404">
          <div className="content-stretch flex items-start relative shrink-0" data-node-id="91:2405">
            <p className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[#db4444] text-[16px] whitespace-nowrap" data-node-id="91:2406">
              $500
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="91:2407">
            <FourStar className="h-[20px] relative shrink-0 w-[100px]" />
            <p className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[40px]" data-node-id="91:2409">
              (145)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsArrowRight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="45:281" data-name="icons arrow-right">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconsArrowRight} />
    </div>
  );
}

function FillWithRightArrow({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[46px]"} data-node-id="61:2865" role="button" tabIndex={0} aria-label="Next" data-name="Fill with Right Arrow">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFillWithRightArrow} />
    </div>
  );
}

function IconsArrowLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="61:2570" data-name="icons:arrow-left">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconsArrowLeft} />
    </div>
  );
}

function FillWithLeftArrow({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[46px]"} data-node-id="61:2864" role="button" tabIndex={0} aria-label="Previous" data-name="Fill With Left Arrow">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFillWithLeftArrow} />
    </div>
  );
}

function CategoryRectangle({ className }: { className?: string }) {
  return (
    <div className={className || "h-[40px] relative w-[20px]"} data-node-id="95:2489" data-name="Category Rectangle">
      <div className="absolute bg-[#db4444] inset-0 rounded-[4px]" data-node-id="89:1561" />
    </div>
  );
}

export default function Frame736() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative size-full" data-node-id="142:1516">
      <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0" data-node-id="142:1515">
        <div className="content-stretch flex gap-[672px] items-end relative shrink-0" data-node-id="142:1513">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="95:2496">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="95:2482">
              <CategoryRectangle className="h-[40px] relative shrink-0 w-[20px]" />
              <p className="[word-break:break-word] font-['Poppins:SemiBold'] leading-[20px] not-italic relative shrink-0 text-[#db4444] text-[16px] whitespace-nowrap" data-node-id="85:1836">
                Our Products
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[48px] not-italic relative shrink-0 text-[36px] text-black tracking-[1.44px] whitespace-nowrap" data-node-id="91:2452">
              Explore Our Products
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="91:2443">
            <FillWithLeftArrow className="relative shrink-0 size-[46px]" />
            <FillWithRightArrow className="relative shrink-0 size-[46px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0" data-node-id="142:1514">
          <div className="content-stretch flex gap-[30px] items-start relative shrink-0" data-node-id="91:2453">
            <Cart className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" product="Dog Food-No Discount" />
            <Cart className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" />
            <Cart className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" product="Laptop-no discount" />
            <CartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartWithFlatDiscountCartProperty25 className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" />
          </div>
          <div className="content-stretch flex gap-[30px] items-start relative shrink-0" data-node-id="91:2454">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-product-card="true" data-node-id="91:1719" data-name="Cart">
              <div className="bg-[#f5f5f5] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]" data-node-id="I91:1719;91:1599" data-name="Cart">
                <div className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]" data-node-id="I91:1719;91:1600">
                  <FillHeart className="relative shrink-0 size-[34px]" />
                  <FillEye className="relative shrink-0 size-[34px]" />
                </div>
                <NewButton className="absolute bg-[#0f6] content-stretch flex items-center justify-center left-[12px] px-[12px] py-[4px] rounded-[4px] top-[12px]" />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-1/2 overflow-clip top-1/2 w-[190px]" data-node-id="I91:1719;91:1604">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[133px] left-1/2 top-[calc(50%+0.5px)] w-[180px]" data-node-id="I91:1719;89:1004" data-name="New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[137.17%] left-[-1.1%] max-w-none top-[-16.68%] w-[102.2%]" src={imgNewMercedesBenzGtrLicensedRideOnCarKidsElectricToyCar1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="I91:1719;91:1606">
                <p className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="I91:1719;91:1607">
                  Kids Electric Car
                </p>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I91:1719;91:1608">
                  <div className="content-stretch flex items-start relative shrink-0" data-node-id="I91:1719;91:1609">
                    <p className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[#db4444] text-[16px] whitespace-nowrap" data-node-id="I91:1719;91:1610">
                      $960
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I91:1719;91:1611">
                    <FiveStar className="h-[20px] relative shrink-0 w-[100px]" />
                    <p className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]" data-node-id="I91:1719;91:1613">
                      (65)
                    </p>
                  </div>
                </div>
                <div className="h-[20px] relative shrink-0 w-[48px]" data-node-id="I91:1719;91:1614" data-name="Colour Chnage">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColourChnage3} />
                </div>
              </div>
            </div>
            <Cart className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" product="Soccer boat-color choosing" />
            <Cart className="content-stretch cursor-pointer flex flex-col gap-[16px] items-start relative shrink-0" product="Gaming control-color choosing" />
            <Cart className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" product="Man jacket-color choosing" />
          </div>
        </div>
      </div>
      <Button className="bg-[#db4444] content-stretch flex items-center justify-center px-[48px] py-[16px] relative rounded-[4px] shrink-0" />
    </div>
  );
}
