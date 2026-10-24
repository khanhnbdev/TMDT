import {
  FiveStar,
  FillEye,
  FillHeart,
  FourHalfStar,
} from "./home/BestSellingIcons";

const img5479539C2St87460010820000LightGucciSavoyMediumDuffleBag1 =
  "/assets/b641f447-e136-4d22-be62-940b7fa89e2f.png";
const imgGammaxxL240Argb1500X5001 =
  "/assets/75b1f090-54b3-47a0-b0ee-39cfbb595f91.png";
const imgSamMoghadamKhamsehL7MQsHlAUUnsplash1 =
  "/assets/be737e9f-11f8-400a-b894-a7023e6a343e.png";
const img672462Zah9D56260021000000LightTheNorthFaceXGucciCoat1 =
  "/assets/41b2df1b-3c74-44b6-940d-1408b8f221bc.png";

type CartProps = {
  className?: string;
  product?:
    | "Bestselling-GucciBAg"
    | "Bestselling-Cooling Fan"
    | "Bestselling-Coat"
    | "Bestselling-Bookself";
};

function Cart({ className, product = "Bestselling-GucciBAg" }: CartProps) {
  const isBestsellingBookself = product === "Bestselling-Bookself";
  const isBestsellingBookselfOrBestsellingCoat = [
    "Bestselling-Bookself",
    "Bestselling-Coat",
  ].includes(product);
  const isBestsellingCoat = product === "Bestselling-Coat";
  const isBestsellingCoolingFan = product === "Bestselling-Cooling Fan";
  const isBestsellingGucciBAgOrBestsellingCoolingFan = [
    "Bestselling-GucciBAg",
    "Bestselling-Cooling Fan",
  ].includes(product);
  return (
    <div
      className={
        className ||
        "content-stretch flex flex-col gap-[16px] items-start relative"
      }
      data-product-card="true"
      id={
        isBestsellingCoat
          ? "node-79_905"
          : isBestsellingBookself
            ? "node-79_1081"
            : isBestsellingCoolingFan
              ? "node-79_876"
              : "node-79_698"
      }
    >
      <div
        className="bg-[#f5f5f5] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]"
        id={
          isBestsellingCoat
            ? "node-79_906"
            : isBestsellingBookself
              ? "node-79_1082"
              : isBestsellingCoolingFan
                ? "node-79_877"
                : "node-79_699"
        }
        data-name="Cart"
      >
        <div
          className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]"
          id={
            isBestsellingCoat
              ? "node-79_907"
              : isBestsellingBookself
                ? "node-79_1083"
                : isBestsellingCoolingFan
                  ? "node-79_879"
                  : "node-79_703"
          }
        >
          <FillHeart className="relative shrink-0 size-[34px]" />
          <FillEye className="relative shrink-0 size-[34px]" />
        </div>
        <div
          className={`absolute h-[180px] overflow-clip w-[190px] ${["Bestselling-Cooling Fan", "Bestselling-Bookself"].includes(product) ? "left-[40px] top-[35px]" : "-translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"}`}
          id={
            isBestsellingCoat
              ? "node-89_1006"
              : isBestsellingBookself
                ? "node-89_1162"
                : isBestsellingCoolingFan
                  ? "node-89_1160"
                  : "node-89_1030"
          }
        >
          {product === "Bestselling-GucciBAg" && (
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute h-[129px] left-1/2 top-[calc(50%+0.5px)] w-[178px]"
              data-node-id="79:702"
              data-name="547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-[146.38%] left-[-3.5%] max-w-none top-[-23.51%] w-[106.9%]"
                  src={
                    img5479539C2St87460010820000LightGucciSavoyMediumDuffleBag1
                  }
                />
              </div>
            </div>
          )}
          {isBestsellingCoolingFan && (
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute h-[95px] left-[calc(50%+0.5px)] top-[calc(50%+4.5px)] w-[191px]"
              data-node-id="79:961"
              data-name="gammaxx-l240-argb-1-500x500 1"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-[232.56%] left-[-6.67%] max-w-none top-[-71.63%] w-[114.94%]"
                  src={imgGammaxxL240Argb1500X5001}
                />
              </div>
            </div>
          )}
          {isBestsellingBookself && (
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute h-[176px] left-1/2 top-[calc(50%+1px)] w-[140px]"
              data-node-id="79:1080"
              data-name="sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
                src={imgSamMoghadamKhamsehL7MQsHlAUUnsplash1}
              />
            </div>
          )}
          {isBestsellingCoat && (
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute h-[146px] left-1/2 top-1/2 w-[140px]"
              data-node-id="79:911"
              data-name="672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-[116.23%] left-[-10.69%] max-w-none top-[-5.19%] w-[121.64%]"
                  src={img672462Zah9D56260021000000LightTheNorthFaceXGucciCoat1}
                />
              </div>
            </div>
          )}
        </div>
        <button className="product-hover-add" data-add-cart="true">
          Add To Cart
        </button>
      </div>
      <div
        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
        id={
          isBestsellingCoat
            ? "node-79_912"
            : isBestsellingBookself
              ? "node-79_1087"
              : isBestsellingCoolingFan
                ? "node-79_882"
                : "node-79_707"
        }
      >
        <p
          className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap"
          id={
            isBestsellingCoat
              ? "node-79_913"
              : isBestsellingBookself
                ? "node-79_1088"
                : isBestsellingCoolingFan
                  ? "node-79_883"
                  : "node-79_708"
          }
        >
          {isBestsellingCoat
            ? "The north coat"
            : isBestsellingBookself
              ? "Small BookSelf"
              : isBestsellingCoolingFan
                ? "RGB liquid CPU Cooler"
                : "Gucci duffle bag"}
        </p>
        <div
          className={`content-stretch flex items-start relative shrink-0 ${isBestsellingBookself ? "" : '[word-break:break-word] font-["Poppins:Medium"] gap-[12px] leading-[24px] not-italic text-[16px] whitespace-nowrap'}`}
          id={
            isBestsellingCoat
              ? "node-79_914"
              : isBestsellingBookself
                ? "node-79_1089"
                : isBestsellingCoolingFan
                  ? "node-79_884"
                  : "node-79_709"
          }
        >
          <p
            className={`relative shrink-0 text-[#db4444] ${isBestsellingBookself ? '[word-break:break-word] font-["Poppins:Medium"] leading-[24px] not-italic text-[16px] whitespace-nowrap' : ""}`}
            id={
              isBestsellingCoat
                ? "node-79_915"
                : isBestsellingBookself
                  ? "node-79_1090"
                  : isBestsellingCoolingFan
                    ? "node-79_885"
                    : "node-79_710"
            }
          >
            {isBestsellingCoat
              ? "$260"
              : isBestsellingBookself
                ? "$360"
                : isBestsellingCoolingFan
                  ? "$160"
                  : "$960"}
          </p>
          {[
            "Bestselling-GucciBAg",
            "Bestselling-Cooling Fan",
            "Bestselling-Coat",
          ].includes(product) && (
            <p
              className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid line-through opacity-50 relative shrink-0 text-black"
              id={
                isBestsellingCoat
                  ? "node-79_916"
                  : isBestsellingCoolingFan
                    ? "node-79_886"
                    : "node-79_711"
              }
            >
              {isBestsellingCoat
                ? "$360"
                : isBestsellingCoolingFan
                  ? "$170"
                  : "$1160"}
            </p>
          )}
        </div>
        <div
          className="content-stretch flex gap-[8px] items-start relative shrink-0"
          id={
            isBestsellingCoat
              ? "node-79_917"
              : isBestsellingBookself
                ? "node-79_1092"
                : isBestsellingCoolingFan
                  ? "node-79_887"
                  : "node-79_712"
          }
        >
          {isBestsellingGucciBAgOrBestsellingCoolingFan && (
            <>
              <FourHalfStar className="h-[20px] relative shrink-0 w-[100px]" />
              <p
                className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]"
                id={isBestsellingCoolingFan ? "node-79_889" : "node-79_714"}
              >
                (65)
              </p>
            </>
          )}
          {isBestsellingBookselfOrBestsellingCoat && (
            <>
              <FiveStar className="h-[20px] relative shrink-0 w-[100px]" />
              <p
                className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]"
                id={isBestsellingCoat ? "node-79_919" : "node-79_1094"}
              >
                (65)
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CategoryRectangle({ className }: { className?: string }) {
  return (
    <div
      className={className || "h-[40px] relative w-[20px]"}
      data-node-id="95:2489"
      data-name="Category Rectangle"
    >
      <div
        className="absolute bg-[#db4444] inset-0 rounded-[4px]"
        data-node-id="89:1561"
      />
    </div>
  );
}

export default function BestSelling() {
  return (
    <div
      className="content-stretch flex flex-col gap-[60px] items-start relative size-full"
      data-node-id="142:1511"
    >
      <div
        className="content-stretch flex gap-[611px] items-end relative shrink-0"
        data-node-id="142:1510"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0"
          data-node-id="95:2495"
        >
          <div
            className="content-stretch flex gap-[16px] items-center relative shrink-0"
            data-node-id="95:2494"
          >
            <CategoryRectangle className="h-[40px] relative shrink-0 w-[20px]" />
            <p
              className="[word-break:break-word] font-['Poppins:SemiBold'] leading-[20px] not-italic relative shrink-0 text-[#db4444] text-[16px] whitespace-nowrap"
              data-node-id="79:620"
            >
              This Month
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[48px] not-italic relative shrink-0 text-[36px] text-black tracking-[1.44px] whitespace-nowrap"
            data-node-id="79:621"
          >
            Best Selling Products
          </p>
        </div>
        <div
          className="bg-[#db4444] content-stretch flex items-center justify-center px-[48px] py-[16px] relative rounded-[4px] shrink-0"
          role="button"
          tabIndex={0}
          data-node-id="85:1791"
          data-name="Button"
        >
          <p
            className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[#fafafa] text-[16px] whitespace-nowrap"
            data-node-id="I85:1791;61:2874"
          >
            View All
          </p>
        </div>
      </div>
      <div
        className="content-stretch flex gap-[30px] items-start relative shrink-0"
        data-node-id="85:1838"
      >
        <Cart
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
          product="Bestselling-Coat"
        />
        <Cart className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" />
        <Cart
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
          product="Bestselling-Cooling Fan"
        />
        <Cart
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
          product="Bestselling-Bookself"
        />
      </div>
    </div>
  );
}
