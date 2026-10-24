const imgFourStar = "/assets/d81add52-f0bf-40fe-ae0f-e0b4d55129ef.svg";

const imgGroup = "/assets/829f965c-0f1f-40e0-8e29-f0f486e4b557.svg";

const imgFillEye = "/assets/249f69b5-3426-42d6-a361-25e0a1a664fc.svg";

const imgHeartSmall = "/assets/c5da3440-ce55-4b99-a7bf-49a69ec64b82.svg";

const imgFillHeart = "/assets/f23a6603-0fb1-4fd0-acfc-e1eed717c035.svg";

const imgStarHalfFilled = "/assets/09ff0b4d-706c-48d8-b38a-bcb68caad2dc.svg";

const imgFourHalfStar = "/assets/b64ceeb9-4073-41b6-ad1c-002a096c7ccb.svg";

const imgFiveStar = "/assets/59d8eb5b-d3df-46cf-8fb0-f7ecfbd39289.svg";

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
