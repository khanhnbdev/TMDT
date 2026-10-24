import { FillEye, FillHeart, FourStar } from "./ExploreProductIcons";
import { ExploreProductCard } from "./ExploreProductCard";

const imgCurologyJ7PKvQrTUsMUnsplash1 =
  "/assets/13323d94-a5bd-48de-ab2b-16501505b6f1.png";

export function SkincareProductCard({ className }: { className?: string }) {
  return (
    <div
      className={
        className ||
        "content-stretch flex flex-col gap-[16px] items-start relative"
      }
      data-product-card="true"
      data-node-id="91:2395"
      data-name="Cart With Flat Discount /Cart With Flat Discount/Cart With Flat Discount/Cart With Flat Discount/Cart/Property 25"
    >
      <div
        className="bg-[#f5f5f5] h-[250px] overflow-clip relative rounded-[4px] shrink-0 w-[270px]"
        data-node-id="91:2396"
        data-name="Cart"
      >
        <div
          className="absolute content-stretch flex flex-col gap-[8px] items-start right-[12px] top-[12px]"
          data-node-id="91:2397"
        >
          <FillHeart className="relative shrink-0 size-[34px]" />
          <FillEye className="relative shrink-0 size-[34px]" />
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[180px] left-1/2 top-1/2 w-[190px]"
          data-node-id="91:2400"
        />
        <div
          className="absolute h-[159px] left-[49px] top-[46px] w-[172px]"
          data-node-id="91:2401"
          data-name="curology-j7pKVQrTUsM-unsplash 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
            src={imgCurologyJ7PKvQrTUsMUnsplash1}
          />
        </div>
        <button className="product-hover-add" data-add-cart="true">
          Add To Cart
        </button>
      </div>
      <div
        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
        data-node-id="91:2402"
      >
        <p
          className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap"
          data-node-id="91:2403"
        >{`Curology Product Set `}</p>
        <div
          className="content-stretch flex gap-[8px] items-center relative shrink-0"
          data-node-id="91:2404"
        >
          <div
            className="content-stretch flex items-start relative shrink-0"
            data-node-id="91:2405"
          >
            <p
              className="[word-break:break-word] font-['Poppins:Medium'] leading-[24px] not-italic relative shrink-0 text-[#db4444] text-[16px] whitespace-nowrap"
              data-node-id="91:2406"
            >
              $500
            </p>
          </div>
          <div
            className="content-stretch flex gap-[8px] items-start relative shrink-0"
            data-node-id="91:2407"
          >
            <FourStar className="h-[20px] relative shrink-0 w-[100px]" />
            <p
              className="[word-break:break-word] font-['Poppins:SemiBold'] h-[20px] leading-[21px] not-italic opacity-50 relative shrink-0 text-[14px] text-black w-[40px]"
              data-node-id="91:2409"
            >
              (145)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
