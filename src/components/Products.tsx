import {
  FillEye,
  FillHeart,
  NewButton,
  FiveStar,
} from "./home/ExploreProductIcons";
import { ExploreProductCard } from "./home/ExploreProductCard";
import { SkincareProductCard } from "./home/SkincareProductCard";

const imgIconsArrowRight = "/assets/386c8c08-47a4-4e16-b865-d81bab912cbd.svg";
const imgFillWithRightArrow =
  "/assets/f8260b6e-6c2f-4711-809e-05646c5772da.svg";
const imgIconsArrowLeft = "/assets/4a3a17a0-62e0-4f26-b8fd-c285361a5591.svg";
const imgFillWithLeftArrow = "/assets/b00611fb-8e45-4dbc-8dce-8db12257e1de.svg";
const imgNewMercedesBenzGtrLicensedRideOnCarKidsElectricToyCar1 =
  "/assets/4d30d3ca-a2af-4323-86da-b820a5764c6d.png";
const imgColourChnage3 = "/assets/ef3803e3-5c71-451d-909b-45fc14df1959.svg";
type ButtonProps = {
  className?: string;
  button?: "Primary";
  hover?: boolean;
};

export function Button({
  className,
  button = "Primary",
  hover = false,
}: ButtonProps) {
  return (
    <div
      className={
        className ||
        "bg-[#db4444] content-stretch flex items-center justify-center px-[48px] py-[16px] relative rounded-[4px]"
      }
      role="button"
      tabIndex={0}
      data-node-id="85:1786"
    >
      <p
        className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[#fafafa] text-[16px] whitespace-nowrap"
        data-node-id="61:2874"
      >
        View All Products
      </p>
    </div>
  );
}

export function IconsArrowRight({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[24px]"}
      data-node-id="45:281"
      data-name="icons arrow-right"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgIconsArrowRight}
      />
    </div>
  );
}

export function FillWithRightArrow({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[46px]"}
      data-node-id="61:2865"
      role="button"
      tabIndex={0}
      aria-label="Next"
      data-name="Fill with Right Arrow"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgFillWithRightArrow}
      />
    </div>
  );
}

export function IconsArrowLeft({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[24px]"}
      data-node-id="61:2570"
      data-name="icons:arrow-left"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgIconsArrowLeft}
      />
    </div>
  );
}

export function FillWithLeftArrow({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[46px]"}
      data-node-id="61:2864"
      role="button"
      tabIndex={0}
      aria-label="Previous"
      data-name="Fill With Left Arrow"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgFillWithLeftArrow}
      />
    </div>
  );
}

export function CategoryRectangle({ className }: { className?: string }) {
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

export function Products() {
  return (
    <div
      className="content-stretch flex flex-col gap-[60px] items-center relative size-full"
      data-node-id="142:1516"
    >
      <div
        className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0"
        data-node-id="142:1515"
      >
        <div
          className="content-stretch flex gap-[672px] items-end relative shrink-0"
          data-node-id="142:1513"
        >
          <div
            className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0"
            data-node-id="95:2496"
          >
            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0"
              data-node-id="95:2482"
            >
              <CategoryRectangle className="h-[40px] relative shrink-0 w-[20px]" />
              <p
                className="[word-break:break-word] font-['Poppins:SemiBold'] leading-[20px] not-italic relative shrink-0 text-[#db4444] text-[16px] whitespace-nowrap"
                data-node-id="85:1836"
              >
                Our Products
              </p>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[48px] not-italic relative shrink-0 text-[36px] text-black tracking-[1.44px] whitespace-nowrap"
              data-node-id="91:2452"
            >
              Explore Our Products
            </p>
          </div>
          <div
            className="content-stretch flex gap-[8px] items-start relative shrink-0"
            data-node-id="91:2443"
          >
            <FillWithLeftArrow className="relative shrink-0 size-[46px]" />
            <FillWithRightArrow className="relative shrink-0 size-[46px]" />
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0"
          data-node-id="142:1514"
        >
          <div
            className="content-stretch flex gap-[30px] items-start relative shrink-0"
            data-node-id="91:2453"
          >
            <ExploreProductCard
              className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
              product="Dog Food-No Discount"
            />
            <ExploreProductCard className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" />
            <ExploreProductCard
              className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
              product="Laptop-no discount"
            />
            <SkincareProductCard className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" />
          </div>
          <div
            className="content-stretch flex gap-[30px] items-start relative shrink-0"
            data-node-id="91:2454"
          >
            <div
              className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
              data-product-card="true"
              data-node-id="91:1719"
              data-name="Cart"
            >
              <div
                className="bg-[#f5f5f5] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]"
                data-node-id="I91:1719;91:1599"
                data-name="Cart"
              >
                <div
                  className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]"
                  data-node-id="I91:1719;91:1600"
                >
                  <FillHeart className="relative shrink-0 size-[34px]" />
                  <FillEye className="relative shrink-0 size-[34px]" />
                </div>
                <NewButton className="absolute bg-[#0f6] content-stretch flex items-center justify-center left-[12px] px-[12px] py-[4px] rounded-[4px] top-[12px]" />
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-1/2 overflow-clip top-1/2 w-[190px]"
                  data-node-id="I91:1719;91:1604"
                >
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 absolute h-[133px] left-1/2 top-[calc(50%+0.5px)] w-[180px]"
                    data-node-id="I91:1719;89:1004"
                    data-name="New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt=""
                        className="absolute h-[137.17%] left-[-1.1%] max-w-none top-[-16.68%] w-[102.2%]"
                        src={
                          imgNewMercedesBenzGtrLicensedRideOnCarKidsElectricToyCar1
                        }
                      />
                    </div>
                  </div>
                </div>
                <button className="product-hover-add" data-add-cart="true">
                  Add To Cart
                </button>
              </div>
              <div
                className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
                data-node-id="I91:1719;91:1606"
              >
                <p
                  className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap"
                  data-node-id="I91:1719;91:1607"
                >
                  Kids Electric Car
                </p>
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-node-id="I91:1719;91:1608"
                >
                  <div
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="I91:1719;91:1609"
                  >
                    <p
                      className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[#db4444] text-[16px] whitespace-nowrap"
                      data-node-id="I91:1719;91:1610"
                    >
                      $960
                    </p>
                  </div>
                  <div
                    className="content-stretch flex gap-[8px] items-start relative shrink-0"
                    data-node-id="I91:1719;91:1611"
                  >
                    <FiveStar className="h-[20px] relative shrink-0 w-[100px]" />
                    <p
                      className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[32px]"
                      data-node-id="I91:1719;91:1613"
                    >
                      (65)
                    </p>
                  </div>
                </div>
                <div
                  className="h-[20px] relative shrink-0 w-[48px]"
                  data-node-id="I91:1719;91:1614"
                  data-name="Colour Chnage"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgColourChnage3}
                  />
                </div>
              </div>
            </div>
            <ExploreProductCard
              className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
              product="Soccer boat-color choosing"
            />
            <ExploreProductCard
              className="content-stretch cursor-pointer flex flex-col gap-[16px] items-start relative shrink-0"
              product="Gaming control-color choosing"
            />
            <ExploreProductCard
              className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
              product="Man jacket-color choosing"
            />
          </div>
        </div>
      </div>
      <Button className="bg-[#db4444] content-stretch flex items-center justify-center px-[48px] py-[16px] relative rounded-[4px] shrink-0" />
    </div>
  );
}

export default Products;
