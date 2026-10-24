const imgDropDown = "/assets/0cbd55d8-df30-4bf3-8fab-ffb98c7557e1.svg";

function TopHeader({
  className,
  language = "English",
}: {
  className?: string;
  language?: string;
}) {
  return (
    <div
      className={
        className || "bg-black h-[48px] overflow-clip relative w-[1440px]"
      }
      data-node-id="145:1471"
      data-name="Top Header"
    >
      <div
        className="absolute content-stretch flex gap-[231px] items-start right-[136px] top-[12px]"
        data-node-id="145:1470"
      >
        <div
          className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-[#fafafa] text-[14px]"
          data-node-id="39:330"
        >
          <p
            className="font-['Poppins:Regular'] h-[18px] leading-[21px] relative shrink-0 w-[474px]"
            data-node-id="35:211"
          >
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p
            className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Poppins:SemiBold'] leading-[24px] relative shrink-0 text-center underline whitespace-nowrap"
            role="button"
            tabIndex={0}
            data-node-id="41:261"
          >
            ShopNow
          </p>
        </div>
        <div
          className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0"
          role="button"
          tabIndex={0}
          aria-label="Choose language"
          data-node-id="34:218"
        >
          <p
            className="[word-break:break-word] font-['Poppins:Regular'] leading-[21px] not-italic relative shrink-0 text-[#fafafa] text-[14px] whitespace-nowrap"
            data-node-id="34:219"
          >
            {language}
          </p>
          <div
            className="relative shrink-0 size-[24px]"
            data-node-id="35:216"
            data-name="DropDown"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgDropDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TopHeader1({
  language = "English",
}: {
  language?: string;
}) {
  return (
    <TopHeader className="bg-black relative size-full" language={language} />
  );
}
