import {
  FourStar,
  FillEye,
  FillHeart,
  FourHalfStar,
  FiveStar,
} from "./FlashSaleIcons";

const imgG922500X5001 = "/assets/2d7315c9-880c-4078-a72f-0cb56feffc7e.png";
const imgG27Cq4500X5001 = "/assets/bcc8389c-3ee1-41e9-b8f3-401b499d7b15.png";
const imgSamMoghadamKhamsehKvmdsTrGobmUnsplash1 =
  "/assets/5a92cb64-6f40-4f4c-9eae-6397b2449883.png";
const imgAk90001500X5001 = "/assets/2d858331-5c8d-48ba-a327-d66bd0f23696.png";

export type FlashSaleCardProps = {
  chairVariant?: "green" | "black";
  className?: string;
  property1?:
    "Cart with discount" | "Cart with discount Hover" | "Variant3" | "Variant4";
};

export function FlashSaleCard({
  className,
  chairVariant,
  property1 = "Cart with discount",
}: FlashSaleCardProps) {
  const isCartWithDiscountHover = property1 === "Cart with discount Hover";
  const isCartWithDiscountOrVariant3 = [
    "Cart with discount",
    "Variant3",
  ].includes(property1);
  const isCartWithDiscountOrVariant3OrVariant4 = [
    "Cart with discount",
    "Variant3",
    "Variant4",
  ].includes(property1);
  const isVariant3 = property1 === "Variant3";
  const isVariant4 = property1 === "Variant4";
  return (
    <div
      className={
        className ||
        "content-stretch flex flex-col gap-[16px] items-start relative"
      }
      data-product-card="true"
      id={
        isCartWithDiscountHover
          ? "node-61_1963"
          : isVariant4
            ? "node-61_2181"
            : isVariant3
              ? "node-61_2121"
              : "node-61_1964"
      }
    >
      <div
        className="bg-[#f5f5f5] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]"
        id={
          isCartWithDiscountHover
            ? "node-61_549"
            : isVariant4
              ? "node-61_2182"
              : isVariant3
                ? "node-61_2122"
                : "node-61_495"
        }
      >
        <div
          className="absolute bg-[#db4444] content-stretch flex items-center justify-center left-[12px] px-[12px] py-[4px] rounded-[4px] top-[12px]"
          id={
            isCartWithDiscountHover
              ? "node-61_550"
              : isVariant4
                ? "node-61_2183"
                : isVariant3
                  ? "node-61_2123"
                  : "node-61_503"
          }
          data-name="Discount percent"
        >
          <p
            className="[word-break:break-word] font-['Poppins:Regular'] leading-[18px] not-italic relative shrink-0 text-[#fafafa] text-[12px] whitespace-nowrap"
            id={
              isCartWithDiscountHover
                ? "node-I61_550-61_501"
                : isVariant4
                  ? "node-I61_2183-61_501"
                  : isVariant3
                    ? "node-I61_2123-61_501"
                    : "node-I61_503-61_501"
            }
          >
            {isCartWithDiscountHover
              ? "-35%"
              : isVariant4
                ? "-25%"
                : isVariant3
                  ? "-30%"
                  : "-40%"}
          </p>
        </div>
        <div
          className={`absolute ${isCartWithDiscountHover ? "bg-black bottom-0 h-[41px] left-0 right-0 rounded-bl-[4px] rounded-br-[4px]" : "content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]"}`}
          id={
            isCartWithDiscountHover
              ? "node-61_567"
              : isVariant4
                ? "node-61_2184"
                : isVariant3
                  ? "node-61_2125"
                  : "node-61_1951"
          }
        >
          {isCartWithDiscountOrVariant3OrVariant4 && (
            <>
              <FillHeart className="relative shrink-0 size-[34px]" />
              <FillEye className="relative shrink-0 size-[34px]" />
            </>
          )}
        </div>
        {isCartWithDiscountOrVariant3OrVariant4 && (
          <div
            className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-1/2 overflow-clip top-1/2 w-[190px]"
            id={
              isVariant4
                ? "node-89_1234"
                : isVariant3
                  ? "node-89_1233"
                  : "node-89_1161"
            }
          >
            {property1 === "Cart with discount" && (
              <div
                className="-translate-x-1/2 -translate-y-1/2 absolute h-[152px] left-1/2 top-1/2 w-[172px]"
                data-node-id="61:1844"
                data-name="g92-2-500x500 1"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute h-[117.44%] left-[-3.09%] max-w-none top-[-17.44%] w-[104.12%]"
                    src={imgG922500X5001}
                  />
                </div>
              </div>
            )}
            {isVariant3 && (
              <div
                className="absolute h-[129px] left-[10px] top-[26px] w-[170px]"
                data-node-id="79:1169"
                data-name="g27cq4-500x500 1"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
                  src={imgG27Cq4500X5001}
                />
              </div>
            )}
            {isVariant4 && (
              <div
                className={
                  chairVariant
                    ? "absolute h-[180px] left-0 top-0 w-[190px]"
                    : "absolute h-[180px] left-[41px] top-0 w-[107px]"
                }
                data-node-id="61:2210"
                data-name="sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className={
                      chairVariant
                        ? "absolute size-full object-contain"
                        : "absolute h-[119.67%] left-[-30.95%] max-w-none top-[-11.28%] w-[160.55%]"
                    }
                    src={
                      chairVariant
                        ? `/assets/chair-${chairVariant}.png`
                        : imgSamMoghadamKhamsehKvmdsTrGobmUnsplash1
                    }
                  />
                </div>
              </div>
            )}
          </div>
        )}
        {isCartWithDiscountHover && (
          <>
            <p
              className="[word-break:break-word] absolute font-['Poppins:Medium'] leading-[24px] left-[calc(50%-48px)] not-italic text-[16px] text-white top-[calc(50%+92px)] whitespace-nowrap"
              data-node-id="61:568"
            >
              Add To Cart
            </p>
            <div
              className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]"
              data-node-id="61:1843"
            >
              <FillHeart className="relative shrink-0 size-[34px]" />
              <FillEye className="relative shrink-0 size-[34px]" />
            </div>
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-1/2 overflow-clip top-[calc(50%-20px)] w-[190px]"
              data-node-id="89:1232"
            >
              <div
                className="-translate-x-1/2 -translate-y-1/2 absolute h-[101px] left-[calc(50%-0.5px)] top-[calc(50%+0.5px)] w-[191px]"
                data-node-id="61:551"
                data-name="ak-900-01-500x500 1"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute h-[210.08%] left-[-2.97%] max-w-none top-[-61.34%] w-[110.35%]"
                    src={imgAk90001500X5001}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <button className="product-hover-add" data-add-cart="true">
          Add To Cart
        </button>
      </div>
      <div
        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
        id={
          isCartWithDiscountHover
            ? "node-61_552"
            : isVariant4
              ? "node-61_2188"
              : isVariant3
                ? "node-61_2128"
                : "node-61_506"
        }
      >
        <p
          className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap"
          id={
            isCartWithDiscountHover
              ? "node-61_553"
              : isVariant4
                ? "node-61_2189"
                : isVariant3
                  ? "node-61_2129"
                  : "node-61_507"
          }
        >
          {isCartWithDiscountHover
            ? "AK-900 Wired Keyboard"
            : isVariant4
              ? `S-Series Comfort Chair${chairVariant === "green" ? " — Green" : chairVariant === "black" ? " — Black" : ""}`
              : isVariant3
                ? "IPS LCD Gaming Monitor"
                : "HAVIT HV-G92 Gamepad"}
        </p>
        <div
          className="[word-break:break-word] content-stretch flex font-['Poppins:Medium'] gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] whitespace-nowrap"
          id={
            isCartWithDiscountHover
              ? "node-61_554"
              : isVariant4
                ? "node-61_2190"
                : isVariant3
                  ? "node-61_2130"
                  : "node-61_508"
          }
        >
          <p
            className="relative shrink-0 text-[#db4444]"
            id={
              isCartWithDiscountHover
                ? "node-61_555"
                : isVariant4
                  ? "node-61_2191"
                  : isVariant3
                    ? "node-61_2131"
                    : "node-61_509"
            }
          >
            {isCartWithDiscountHover
              ? "$960"
              : isVariant4
                ? "$375"
                : isVariant3
                  ? "$370"
                  : "$120"}
          </p>
          <p
            className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid line-through opacity-50 relative shrink-0 text-black"
            id={
              isCartWithDiscountHover
                ? "node-61_556"
                : isVariant4
                  ? "node-61_2192"
                  : isVariant3
                    ? "node-61_2132"
                    : "node-61_510"
            }
          >
            {isCartWithDiscountHover
              ? "$1160"
              : ["Variant3", "Variant4"].includes(property1)
                ? "$400"
                : "$160"}
          </p>
        </div>
        <div
          className="content-stretch flex gap-[8px] items-start relative shrink-0"
          id={
            isCartWithDiscountHover
              ? "node-61_557"
              : isVariant4
                ? "node-61_2193"
                : isVariant3
                  ? "node-61_2133"
                  : "node-61_511"
          }
        >
          {isCartWithDiscountOrVariant3 && (
            <>
              <FiveStar className="h-[20px] relative shrink-0 w-[100px]" />
              <p
                className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]"
                id={isVariant3 ? "node-61_2140" : "node-61_518"}
              >
                {isVariant3 ? "(99)" : "(88)"}
              </p>
            </>
          )}
          {isVariant4 && (
            <>
              <FourHalfStar className="h-[20px] relative shrink-0 w-[100px]" />
              <p
                className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]"
                data-node-id="61:2200"
              >
                (99)
              </p>
            </>
          )}
          {isCartWithDiscountHover && (
            <>
              <FourStar className="h-[20px] relative shrink-0 w-[100px]" />
              <p
                className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]"
                data-node-id="61:564"
              >
                (75)
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
