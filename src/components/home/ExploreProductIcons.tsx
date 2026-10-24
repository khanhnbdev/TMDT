const imgStarHalfFilled = "/assets/7e570f4b-5c5b-4413-9e45-58746319c85d.svg";
const imgFourHalfStar = "/assets/b331e7cf-01c0-4f5f-96eb-c0ed1384b848.svg";
const imgGroup = "/assets/46af2b82-ff02-45d7-a51d-b68541765f6b.svg";
const imgFillEye = "/assets/63e23d14-6217-4490-9597-7f913c6d770d.svg";
const imgHeartSmall = "/assets/dbe3ec49-f49d-4b24-b401-2ce9d5885662.svg";
const imgFillHeart = "/assets/85f30034-cedd-4a7b-8fb1-97ddeef7c0fe.svg";
const imgFiveStar = "/assets/cfd39553-e6d7-47f0-8a22-9e62396fa189.svg";
const imgThreeStar = "/assets/b0857ae9-c96c-4835-887d-2fa229b50c29.svg";
const imgFourStar = "/assets/42f0754f-0ee7-41ae-9898-9a576adc62f1.svg";

export function StarHalfFilled({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[20px]"}
      data-node-id="61:2636"
      data-name="star-half-filled"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgStarHalfFilled}
      />
    </div>
  );
}

export function FourHalfStar({ className }: { className?: string }) {
  return (
    <div
      className={className || "h-[20px] relative w-[100px]"}
      data-node-id="61:2650"
      data-name="Four Half Star"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgFourHalfStar}
      />
    </div>
  );
}

export function QuickView({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="55:353"
      data-name="Quick View"
    >
      <div
        className="absolute inset-[20.83%_9.95%]"
        data-node-id="55:350"
        data-name="Group"
      >
        <div className="absolute inset-[-5.36%_-3.9%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup} />
        </div>
      </div>
    </div>
  );
}

export function FillEye({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[34px]"}
      data-node-id="55:362"
      data-name="Fill Eye"
      role="button"
      tabIndex={0}
      aria-label="Quick view"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgFillEye}
      />
      <QuickView className="absolute inset-[14.71%] overflow-clip" />
    </div>
  );
}

export function HeartSmall({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[24px]"}
      data-node-id="55:377"
      data-name="heart small"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgHeartSmall}
      />
    </div>
  );
}

export function FillHeart({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[34px]"}
      data-node-id="55:360"
      data-name="Fill Heart"
      role="button"
      tabIndex={0}
      aria-label="Add to wishlist"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgFillHeart}
      />
    </div>
  );
}

export function NewButton({ className }: { className?: string }) {
  return (
    <div
      className={
        className ||
        "bg-[#0f6] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[4px]"
      }
      data-node-id="55:386"
      data-name="New Button"
    >
      <p
        className="[word-break:break-word] font-['Poppins:Regular'] leading-[18px] not-italic relative shrink-0 text-[#fafafa] text-[12px] whitespace-nowrap"
        data-node-id="55:327"
      >
        NEW
      </p>
    </div>
  );
}

export function FiveStar({ className }: { className?: string }) {
  return (
    <div
      className={className || "h-[20px] relative w-[100px]"}
      data-node-id="61:2217"
      data-name="Five star"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgFiveStar}
      />
    </div>
  );
}

export function ThreeStar({ className }: { className?: string }) {
  return (
    <div
      className={className || "h-[20px] relative w-[100px]"}
      data-node-id="61:2414"
      data-name="Three Star"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgThreeStar}
      />
    </div>
  );
}

export function FourStar({ className }: { className?: string }) {
  return (
    <div
      className={className || "h-[20px] relative w-[100px]"}
      data-node-id="61:2235"
      data-name="Four Star"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgFourStar}
      />
    </div>
  );
}
