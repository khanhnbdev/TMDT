import useCountdown from "../../hooks/useCountdown";

const imgEllipse17 = "/assets/f3e2a881-8300-4cf2-92a5-64e6ef7b8c28.svg";

export function FlashSaleTimer({ className }: { className?: string }) {
  const countdown = useCountdown(
    "exclusive-flash-deadline",
    3 * 86400 + 23 * 3600 + 19 * 60 + 56,
  );
  return (
    <div
      className={className || "h-[50px] relative w-[302px]"}
      data-node-id="302:5113"
      data-name="Flash sale Timer"
    >
      <div
        className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] inset-[0_84.77%_0_0] items-start not-italic text-black"
        data-node-id="68:2998"
      >
        <p
          className="font-['Poppins:Medium'] leading-[18px] relative shrink-0 text-[12px] w-[31px]"
          data-node-id="68:3000"
        >
          Days
        </p>
        <p
          className="font-['Inter:Bold'] font-bold h-[28px] leading-[30px] relative shrink-0 text-[32px] tracking-[1.28px] w-[46px]"
          data-node-id="68:2999"
        >
          {countdown.days}
        </p>
      </div>
      <div
        className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] inset-[0_58.28%_0_27.81%] items-start not-italic text-black"
        data-node-id="68:3002"
      >
        <p
          className="font-['Poppins:Medium'] leading-[18px] relative shrink-0 text-[12px] w-[35px]"
          data-node-id="68:3003"
        >
          Hours
        </p>
        <p
          className="font-['Inter:Bold'] font-bold leading-[30px] relative shrink-0 text-[32px] tracking-[1.28px] whitespace-nowrap"
          data-node-id="68:3004"
        >
          {countdown.hours}
        </p>
      </div>
      <div
        className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] inset-[0_29.47%_0_54.3%] items-start not-italic text-black"
        data-node-id="68:3008"
      >
        <p
          className="font-['Poppins:Medium'] leading-[18px] relative shrink-0 text-[12px] w-[49px]"
          data-node-id="68:3009"
        >
          Minutes
        </p>
        <p
          className="font-['Inter:Bold'] font-bold h-[28px] leading-[30px] relative shrink-0 text-[32px] tracking-[1.28px] min-w-[46px] whitespace-nowrap"
          data-node-id="68:3010"
        >
          {countdown.minutes}
        </p>
      </div>
      <div
        className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] inset-[0_0_0_83.11%] items-start not-italic text-black"
        data-node-id="68:3011"
      >
        <p
          className="font-['Poppins:Medium'] leading-[18px] relative shrink-0 text-[12px] w-[52px]"
          data-node-id="68:3012"
        >
          Seconds
        </p>
        <p
          className="font-['Inter:Bold'] font-bold leading-[30px] relative shrink-0 text-[32px] tracking-[1.28px] whitespace-nowrap"
          data-node-id="68:3013"
        >
          {countdown.seconds}
        </p>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[8px] inset-[52%_77.81%_16%_20.86%] items-start"
        data-node-id="68:3014"
        data-name="Semiclone"
      >
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3015">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgEllipse17}
          />
        </div>
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3016">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgEllipse17}
          />
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[8px] inset-[52%_51.32%_16%_47.35%] items-start"
        data-node-id="68:3017"
        data-name="Semiclone"
      >
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3018">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgEllipse17}
          />
        </div>
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3019">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgEllipse17}
          />
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[8px] inset-[52%_22.52%_16%_76.16%] items-start"
        data-node-id="68:3020"
        data-name="Semiclone"
      >
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3021">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgEllipse17}
          />
        </div>
        <div className="relative shrink-0 size-[4px]" data-node-id="68:3022">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgEllipse17}
          />
        </div>
      </div>
    </div>
  );
}
