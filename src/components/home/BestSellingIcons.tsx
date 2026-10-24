const imgFiveStar = "/assets/eb58320f-57c3-44e2-8f9f-642d0af1e2e0.svg";

const imgGroup = "/assets/f668459d-249f-45fd-915b-f8bddc0d3825.svg";

const imgFillEye = "/assets/3a6ee1db-aec3-4bdc-abea-bfc43e94d8ef.svg";

const imgHeartSmall = "/assets/1bd5f45a-6c8d-4447-be14-2c868bd38c3b.svg";

const imgFillHeart = "/assets/4938f3e8-86e2-41df-9e2b-c150b236ab07.svg";

const imgStarHalfFilled = "/assets/345fb646-234a-4d4f-a5a1-7db9aa926c2f.svg";

const imgFourHalfStar = "/assets/596f9474-0cbb-4511-8175-970876afcf49.svg";

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
