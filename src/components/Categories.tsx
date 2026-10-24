import { CategoryPhone } from "./home/CategoryIcons";

const imgIconsArrowRight = "/assets/bc3d261d-200d-40c1-b194-1ebad6e2744a.svg";
const imgFillWithRightArrow =
  "/assets/98fa51ef-39d3-4421-96da-c5c311a17ab1.svg";
const imgIconsArrowLeft = "/assets/575fc870-55a3-48b9-8678-019286f7abb0.svg";
const imgFillWithLeftArrow = "/assets/35f57dc9-766e-45a6-91bf-41ef32cfb581.svg";

function IconsArrowRight({ className }: { className?: string }) {
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

function FillWithRightArrow({ className }: { className?: string }) {
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

function IconsArrowLeft({ className }: { className?: string }) {
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

function FillWithLeftArrow({ className }: { className?: string }) {
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

export default function Categories() {
  return (
    <div
      className="content-stretch flex flex-col gap-[60px] items-start relative size-full"
      data-node-id="142:1509"
    >
      <div
        className="content-stretch flex gap-[691px] items-end relative shrink-0"
        data-node-id="142:1508"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0"
          data-node-id="95:2500"
        >
          <div
            className="content-stretch flex gap-[16px] items-center relative shrink-0"
            data-node-id="95:2499"
          >
            <div
              className="h-[40px] relative shrink-0 w-[20px]"
              data-node-id="95:2497"
            >
              <div
                className="absolute bg-[#db4444] inset-0 rounded-[4px]"
                data-node-id="I95:2497;89:1561"
              />
            </div>
            <p
              className="[word-break:break-word] font-['Poppins:SemiBold'] leading-[20px] not-italic relative shrink-0 text-[#db4444] text-[16px] whitespace-nowrap"
              data-node-id="68:3028"
            >
              Categories
            </p>
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[48px] not-italic relative shrink-0 text-[36px] text-black tracking-[1.44px] whitespace-nowrap"
            data-node-id="68:3029"
          >
            Browse By Category
          </p>
        </div>
        <div
          className="content-stretch flex gap-[8px] items-start relative shrink-0"
          data-node-id="91:2442"
        >
          <FillWithLeftArrow className="relative shrink-0 size-[46px]" />
          <FillWithRightArrow className="relative shrink-0 size-[46px]" />
        </div>
      </div>
      <div
        className="content-stretch flex gap-[30px] items-start relative shrink-0"
        data-node-id="79:606"
      >
        <CategoryPhone className="border border-[rgba(0,0,0,0.3)] border-solid h-[145px] overflow-clip relative rounded-[4px] shrink-0 w-[170px]" />
        <CategoryPhone
          categoryPhone="Computer"
          className="border border-[rgba(0,0,0,0.3)] border-solid h-[145px] overflow-clip relative rounded-[4px] shrink-0 w-[170px]"
        />
        <CategoryPhone
          categoryPhone="SmartWatch"
          className="border border-[rgba(0,0,0,0.3)] border-solid h-[145px] overflow-clip relative rounded-[4px] shrink-0 w-[170px]"
        />
        <CategoryPhone
          categoryPhone="Camera"
          className="bg-[#db4444] h-[145px] overflow-clip relative rounded-[4px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] shrink-0 w-[170px]"
          hover
        />
        <CategoryPhone
          categoryPhone="Headphone"
          className="border border-[rgba(0,0,0,0.3)] border-solid h-[145px] overflow-clip relative rounded-[4px] shrink-0 w-[170px]"
        />
        <CategoryPhone
          categoryPhone="Gaming"
          className="border border-[rgba(0,0,0,0.3)] border-solid h-[145px] overflow-clip relative rounded-[4px] shrink-0 w-[170px]"
        />
      </div>
    </div>
  );
}
