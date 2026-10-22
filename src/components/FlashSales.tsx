const imgFourStar = "/assets/d81add52-f0bf-40fe-ae0f-e0b4d55129ef.svg";
const imgGroup = "/assets/829f965c-0f1f-40e0-8e29-f0f486e4b557.svg";
const imgFillEye = "/assets/249f69b5-3426-42d6-a361-25e0a1a664fc.svg";
const imgHeartSmall = "/assets/c5da3440-ce55-4b99-a7bf-49a69ec64b82.svg";
const imgFillHeart = "/assets/f23a6603-0fb1-4fd0-acfc-e1eed717c035.svg";
const imgStarHalfFilled = "/assets/09ff0b4d-706c-48d8-b38a-bcb68caad2dc.svg";
const imgFourHalfStar = "/assets/b64ceeb9-4073-41b6-ad1c-002a096c7ccb.svg";
const imgFiveStar = "/assets/59d8eb5b-d3df-46cf-8fb0-f7ecfbd39289.svg";
const imgG922500X5001 = "/assets/2d7315c9-880c-4078-a72f-0cb56feffc7e.png";
const imgG27Cq4500X5001 = "/assets/bcc8389c-3ee1-41e9-b8f3-401b499d7b15.png";
const imgSamMoghadamKhamsehKvmdsTrGobmUnsplash1 = "/assets/5a92cb64-6f40-4f4c-9eae-6397b2449883.png";
const imgAk90001500X5001 = "/assets/2d858331-5c8d-48ba-a327-d66bd0f23696.png";
const imgIconsArrowRight = "/assets/3ee08496-7a63-4a11-86ac-f309246e9e29.svg";
const imgFillWithRightArrow = "/assets/c3033487-f79c-48bb-9d01-acb641cf54b7.svg";
const imgIconsArrowLeft = "/assets/f4e87782-8e93-44d4-af8f-f49361911922.svg";
const imgFillWithLeftArrow = "/assets/8f77fc23-62fe-431c-811d-1980a481cd05.svg";
const imgEllipse17 = "/assets/f3e2a881-8300-4cf2-92a5-64e6ef7b8c28.svg";

function FourStar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[20px] relative w-[100px]"} data-node-id="61:2235" data-name="Four Star">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFourStar} />
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

function FiveStar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[20px] relative w-[100px]"} data-node-id="61:2217" data-name="Five star">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFiveStar} />
    </div>
  );
}

type CartWithFlatDiscountProps = {
  className?: string;
  property1?: "Cart with discount" | "Cart with discount Hover" | "Variant3" | "Variant4";
};

function CartWithFlatDiscount({ className, property1 = "Cart with discount" }: CartWithFlatDiscountProps) {
  const isCartWithDiscountHover = property1 === "Cart with discount Hover";
  const isCartWithDiscountOrVariant3 = ["Cart with discount", "Variant3"].includes(property1);
  const isCartWithDiscountOrVariant3OrVariant4 = ["Cart with discount", "Variant3", "Variant4"].includes(property1);
  const isVariant3 = property1 === "Variant3";
  const isVariant4 = property1 === "Variant4";
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] items-start relative"} data-product-card="true" id={isCartWithDiscountHover ? "node-61_1963" : isVariant4 ? "node-61_2181" : isVariant3 ? "node-61_2121" : "node-61_1964"}>
      <div className="bg-[#f5f5f5] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]" id={isCartWithDiscountHover ? "node-61_549" : isVariant4 ? "node-61_2182" : isVariant3 ? "node-61_2122" : "node-61_495"}>
        <div className="absolute bg-[#db4444] content-stretch flex items-center justify-center left-[12px] px-[12px] py-[4px] rounded-[4px] top-[12px]" id={isCartWithDiscountHover ? "node-61_550" : isVariant4 ? "node-61_2183" : isVariant3 ? "node-61_2123" : "node-61_503"} data-name="Discount percent">
          <p className="[word-break:break-word] font-['Poppins:Regular'] leading-[18px] not-italic relative shrink-0 text-[#fafafa] text-[12px] whitespace-nowrap" id={isCartWithDiscountHover ? "node-I61_550-61_501" : isVariant4 ? "node-I61_2183-61_501" : isVariant3 ? "node-I61_2123-61_501" : "node-I61_503-61_501"}>
            {isCartWithDiscountHover ? "-35%" : isVariant4 ? "-25%" : isVariant3 ? "-30%" : "-40%"}
          </p>
        </div>
        <div className={`absolute ${isCartWithDiscountHover ? "bg-black bottom-0 h-[41px] left-0 right-0 rounded-bl-[4px] rounded-br-[4px]" : "content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]"}`} id={isCartWithDiscountHover ? "node-61_567" : isVariant4 ? "node-61_2184" : isVariant3 ? "node-61_2125" : "node-61_1951"}>
          {isCartWithDiscountOrVariant3OrVariant4 && (
            <>
              <FillHeart className="relative shrink-0 size-[34px]" />
              <FillEye className="relative shrink-0 size-[34px]" />
            </>
          )}
        </div>
        {isCartWithDiscountOrVariant3OrVariant4 && (
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-1/2 overflow-clip top-1/2 w-[190px]" id={isVariant4 ? "node-89_1234" : isVariant3 ? "node-89_1233" : "node-89_1161"}>
            {property1 === "Cart with discount" && (
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[172px]" data-node-id="61:1844" data-name="g92-2-500x500 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[117.44%] left-[-3.09%] max-w-none top-[-17.44%] w-[104.12%]" src={imgG922500X5001} />
                </div>
              </div>
            )}
            {isVariant3 && (
              <div className="absolute h-[129px] left-[10px] top-[26px] w-[170px]" data-node-id="79:1169" data-name="g27cq4-500x500 1">
                <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgG27Cq4500X5001} />
              </div>
            )}
            {isVariant4 && (
              <div className="absolute h-[180px] left-[41px] top-0 w-[107px]" data-node-id="61:2210" data-name="sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[119.67%] left-[-30.95%] max-w-none top-[-11.28%] w-[160.55%]" src={imgSamMoghadamKhamsehKvmdsTrGobmUnsplash1} />
                </div>
              </div>
            )}
          </div>
        )}
        {isCartWithDiscountHover && (
          <>
            <p className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[24px] left-[calc(50%-48px)] not-italic text-[16px] text-white top-[calc(50%+92px)] whitespace-nowrap" data-node-id="61:568">
              Add To Cart
            </p>
            <div className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]" data-node-id="61:1843">
              <FillHeart className="relative shrink-0 size-[34px]" />
              <FillEye className="relative shrink-0 size-[34px]" />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-1/2 overflow-clip top-[calc(50%-20px)] w-[190px]" data-node-id="89:1232">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[101px] left-[calc(50%-0.5px)] top-[calc(50%+0.5px)] w-[191px]" data-node-id="61:551" data-name="ak-900-01-500x500 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[210.08%] left-[-2.97%] max-w-none top-[-61.34%] w-[110.35%]" src={imgAk90001500X5001} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" id={isCartWithDiscountHover ? "node-61_552" : isVariant4 ? "node-61_2188" : isVariant3 ? "node-61_2128" : "node-61_506"}>
        <p className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" id={isCartWithDiscountHover ? "node-61_553" : isVariant4 ? "node-61_2189" : isVariant3 ? "node-61_2129" : "node-61_507"}>
          {isCartWithDiscountHover ? "AK-900 Wired Keyboard" : isVariant4 ? "S-Series Comfort Chair " : isVariant3 ? "IPS LCD Gaming Monitor" : "HAVIT HV-G92 Gamepad"}
        </p>
        <div className="[word-break:break-word] content-stretch flex font-['Poppins:Medium'] gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] whitespace-nowrap" id={isCartWithDiscountHover ? "node-61_554" : isVariant4 ? "node-61_2190" : isVariant3 ? "node-61_2130" : "node-61_508"}>
          <p className="relative shrink-0 text-[#db4444]" id={isCartWithDiscountHover ? "node-61_555" : isVariant4 ? "node-61_2191" : isVariant3 ? "node-61_2131" : "node-61_509"}>
            {isCartWithDiscountHover ? "$960" : isVariant4 ? "$375" : isVariant3 ? "$370" : "$120"}
          </p>
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid line-through opacity-50 relative shrink-0 text-black" id={isCartWithDiscountHover ? "node-61_556" : isVariant4 ? "node-61_2192" : isVariant3 ? "node-61_2132" : "node-61_510"}>
            {isCartWithDiscountHover ? "$1160" : ["Variant3", "Variant4"].includes(property1) ? "$400" : "$160"}
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" id={isCartWithDiscountHover ? "node-61_557" : isVariant4 ? "node-61_2193" : isVariant3 ? "node-61_2133" : "node-61_511"}>
          {isCartWithDiscountOrVariant3 && (
            <>
              <FiveStar className="h-[20px] relative shrink-0 w-[100px]" />
              <p className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]" id={isVariant3 ? "node-61_2140" : "node-61_518"}>
                {isVariant3 ? "(99)" : "(88)"}
              </p>
            </>
          )}
          {isVariant4 && (
            <>
              <FourHalfStar className="h-[20px] relative shrink-0 w-[100px]" />
              <p className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]" data-node-id="61:2200">
                (99)
              </p>
            </>
          )}
          {isCartWithDiscountHover && (
            <>
              <FourStar className="h-[20px] relative shrink-0 w-[100px]" />
              <p className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]" data-node-id="61:564">
                (75)
              </p>
            </>
          )}
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

function FlashSaleTimer({ className }: { className?: string }) {
  return (
    <div className={className || "h-[50px] relative w-[302px]"} data-node-id="302:5113" data-name="Flash sale Timer">
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] inset-[0_84.77%_0_0] items-start not-italic text-black" data-node-id="68:2998">
        <p className="font-['Poppins:Medium'] leading-[18px] relative shrink-0 text-[12px] w-[31px]" data-node-id="68:3000">
          Days
        </p>
        <p className="font-['Inter:Bold'] font-bold h-[28px] leading-[30px] relative shrink-0 text-[32px] tracking-[1.28px] w-[46px]" data-node-id="68:2999">
          03
        </p>
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] inset-[0_58.28%_0_27.81%] items-start not-italic text-black" data-node-id="68:3002">
        <p className="font-['Poppins:Medium'] leading-[18px] relative shrink-0 text-[12px] w-[35px]" data-node-id="68:3003">
          Hours
        </p>
        <p className="font-['Inter:Bold'] font-bold leading-[30px] relative shrink-0 text-[32px] tracking-[1.28px] whitespace-nowrap" data-node-id="68:3004">
          23
        </p>
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] inset-[0_29.47%_0_54.3%] items-start not-italic text-black" data-node-id="68:3008">
        <p className="font-['Poppins:Medium'] leading-[18px] relative shrink-0 text-[12px] w-[49px]" data-node-id="68:3009">
          Minutes
        </p>
        <p className="font-['Inter:Bold'] font-bold h-[28px] leading-[30px] relative shrink-0 text-[32px] tracking-[1.28px] w-[39px]" data-node-id="68:3010">
          19
        </p>
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] inset-[0_0_0_83.11%] items-start not-italic text-black" data-node-id="68:3011">
        <p className="font-['Poppins:Medium'] leading-[18px] relative shrink-0 text-[12px] w-[52px]" data-node-id="68:3012">
          Seconds
        </p>
        <p className="font-['Inter:Bold'] font-bold leading-[30px] relative shrink-0 text-[32px] tracking-[1.28px] whitespace-nowrap" data-node-id="68:3013">
          56
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] inset-[52%_77.81%_16%_20.86%] items-start" data-node-id="68:3014" data-name="Semiclone">
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3015">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
        </div>
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3016">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] inset-[52%_51.32%_16%_47.35%] items-start" data-node-id="68:3017" data-name="Semiclone">
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3018">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
        </div>
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3019">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] inset-[52%_22.52%_16%_76.16%] items-start" data-node-id="68:3020" data-name="Semiclone">
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3021">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
        </div>
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3022">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
        </div>
      </div>
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

export default function Frame728() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full" data-node-id="142:1506">
      <div className="content-stretch flex gap-[470px] items-end relative shrink-0" data-node-id="142:1505">
        <div className="content-stretch flex gap-[87px] items-end relative shrink-0" data-node-id="142:1501">
          <div className="content-stretch flex flex-col gap-[24px] h-[103px] items-start relative shrink-0" data-node-id="95:2504">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="95:2503">
              <CategoryRectangle className="h-[40px] relative shrink-0 w-[20px]" />
              <p className="[word-break:break-word] font-['Poppins:SemiBold'] leading-[20px] not-italic relative shrink-0 text-[#db4444] text-[16px] whitespace-nowrap" data-node-id="61:2842">
                Today’s
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[48px] not-italic relative shrink-0 text-[36px] text-black tracking-[1.44px] whitespace-nowrap" data-node-id="61:2843">
              Flash Sales
            </p>
          </div>
          <FlashSaleTimer className="h-[50px] relative shrink-0 w-[302px]" />
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="142:1504">
          <FillWithLeftArrow className="relative shrink-0 size-[46px]" />
          <FillWithRightArrow className="relative shrink-0 size-[46px]" />
        </div>
      </div>
      <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-[1308px]" data-node-id="61:2853">
        <CartWithFlatDiscount className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" />
        <CartWithFlatDiscount className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" property1="Cart with discount Hover" />
        <CartWithFlatDiscount className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" property1="Variant3" />
        <CartWithFlatDiscount className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" property1="Variant4" />
        <CartWithFlatDiscount className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" property1="Variant4" />
        <CartWithFlatDiscount className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" property1="Variant4" />
      </div>
    </div>
  );
}
