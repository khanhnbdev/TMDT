import { FlashSaleCard } from "./home/FlashSaleCard";
import { FlashSaleTimer } from "./home/FlashSaleTimer";

const imgIconsArrowRight = "/assets/3ee08496-7a63-4a11-86ac-f309246e9e29.svg";
const imgFillWithRightArrow =
  "/assets/c3033487-f79c-48bb-9d01-acb641cf54b7.svg";
const imgIconsArrowLeft = "/assets/f4e87782-8e93-44d4-af8f-f49361911922.svg";
const imgFillWithLeftArrow = "/assets/8f77fc23-62fe-431c-811d-1980a481cd05.svg";

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

export function FlashSales() {
  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start relative size-full"
      data-node-id="142:1506"
    >
      <div
        className="content-stretch flex gap-[470px] items-end relative shrink-0"
        data-node-id="142:1505"
      >
        <div
          className="content-stretch flex gap-[87px] items-end relative shrink-0"
          data-node-id="142:1501"
        >
          <div
            className="content-stretch flex flex-col gap-[24px] h-[103px] items-start relative shrink-0"
            data-node-id="95:2504"
          >
            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0"
              data-node-id="95:2503"
            >
              <CategoryRectangle className="h-[40px] relative shrink-0 w-[20px]" />
              <p
                className="[word-break:break-word] font-['Poppins:SemiBold'] leading-[20px] not-italic relative shrink-0 text-[#db4444] text-[16px] whitespace-nowrap"
                data-node-id="61:2842"
              >
                Today’s
              </p>
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[48px] not-italic relative shrink-0 text-[36px] text-black tracking-[1.44px] whitespace-nowrap"
              data-node-id="61:2843"
            >
              Flash Sales
            </p>
          </div>
          <FlashSaleTimer className="h-[50px] relative shrink-0 w-[302px]" />
        </div>
        <div
          className="content-stretch flex gap-[8px] items-start relative shrink-0"
          data-node-id="142:1504"
        >
          <FillWithLeftArrow className="relative shrink-0 size-[46px]" />
          <FillWithRightArrow className="relative shrink-0 size-[46px]" />
        </div>
      </div>
      <div
        className="content-stretch flex gap-[30px] items-start relative shrink-0 w-[1308px]"
        data-node-id="61:2853"
      >
        <FlashSaleCard className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" />
        <FlashSaleCard
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
          property1="Cart with discount Hover"
        />
        <FlashSaleCard
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
          property1="Variant3"
        />
        <FlashSaleCard
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
          property1="Variant4"
        />
        <FlashSaleCard
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
          property1="Variant4"
          chairVariant="green"
        />
        <FlashSaleCard
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0"
          property1="Variant4"
          chairVariant="black"
        />
      </div>
    </div>
  );
}

export default FlashSales;
