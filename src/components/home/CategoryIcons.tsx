type CategoryPhoneProps = {
  className?: string;
  categoryPhone?:
    "Phone" | "Computer" | "SmartWatch" | "Camera" | "Headphone" | "Gaming";
  hover?: boolean;
};

const imgCategoryGamepad = "/assets/8399125b-b693-4511-b1ff-513908fede15.svg";

const imgCategoryHeadphone = "/assets/b90a0bb6-1e57-4f64-a9fc-38907c2a38d3.svg";

const imgCategorySmartWatch =
  "/assets/df5f1427-a2a4-4a78-9fd1-2c82dd31d2aa.svg";

const imgVector = "/assets/d8b433b3-54c8-41e0-b052-e7ca5ed443df.svg";

const imgVector1 = "/assets/2b3fb094-752b-44f6-8e80-37554b947479.svg";

const imgVector2 = "/assets/9248a870-a54d-4aec-aa71-d78cacedf75d.svg";

const imgLine11 = "/assets/76a216ed-5525-4dd6-a1d9-54c232db0e2c.svg";

const imgLine10 = "/assets/1436469f-2c7c-43cd-82d4-f6e6c307aa9e.svg";

const imgLine9 = "/assets/727150e6-24a1-461b-840d-21004e6be49d.svg";

const imgCategoryComputer = "/assets/039916df-a52d-43bc-9098-7c0f7a1706bd.svg";

const imgCategoryCellPhone = "/assets/38eaa73b-40c9-46b6-ad35-056c78ef6aff.svg";

const imgCategoryCamera = "/assets/a54ec827-f6c7-4381-83b5-f799b3d053bc.svg";

export function CategoryGamepad({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[56px]"}
      data-node-id="138:1571"
      data-name="Category-Gamepad"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgCategoryGamepad}
      />
    </div>
  );
}

export function CategoryHeadphone({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[56px]"}
      data-node-id="138:1572"
      data-name="Category-Headphone"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgCategoryHeadphone}
      />
    </div>
  );
}

export function CategorySmartWatch({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[56px]"}
      data-node-id="138:1569"
      data-name="Category-SmartWatch"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgCategorySmartWatch}
      />
      <div
        className="absolute inset-1/4"
        data-node-id="138:1515"
        data-name="Vector"
      >
        <div className="absolute inset-[-3.57%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div
        className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-3/4"
        data-node-id="138:1516"
        data-name="Vector"
      >
        <div className="absolute inset-[-14.29%_-7.14%]">
          <img alt="" className="block max-w-none size-full" src={imgVector1} />
        </div>
      </div>
      <div
        className="absolute bottom-3/4 left-[37.5%] right-[37.5%] top-[12.5%]"
        data-node-id="138:1517"
        data-name="Vector"
      >
        <div className="absolute inset-[-14.29%_-7.14%]">
          <img alt="" className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>
      <div
        className="absolute content-stretch flex gap-[4px] inset-[39.29%_41.07%_37.5%_41.07%] items-end"
        data-node-id="142:1387"
      >
        <div
          className="flex h-[13px] items-center justify-center relative shrink-0 w-0"
          data-node-id="142:1386"
        >
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[13px]">
              <div className="absolute inset-[-2px_0_0_0]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgLine11}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex h-[8px] items-center justify-center relative shrink-0 w-0"
          data-node-id="142:1385"
        >
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[8px]">
              <div className="absolute inset-[-2px_0_0_0]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgLine10}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex h-[10px] items-center justify-center relative shrink-0 w-0"
          data-node-id="142:1384"
        >
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[10px]">
              <div className="absolute inset-[-2px_0_0_0]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgLine9}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CategoryComputer({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[56px]"}
      data-node-id="138:1573"
      data-name="Category-Computer"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgCategoryComputer}
      />
    </div>
  );
}

export function CategoryCellPhone({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[56px]"}
      data-node-id="138:1568"
      data-name="Category-CellPhone"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgCategoryCellPhone}
      />
    </div>
  );
}

export function CategoryPhone({
  className,
  categoryPhone = "Phone",
  hover = false,
}: CategoryPhoneProps) {
  const isCameraAndHover = categoryPhone === "Camera" && hover;
  const isComputerAndNotHover = categoryPhone === "Computer" && !hover;
  const isGamingAndNotHover = categoryPhone === "Gaming" && !hover;
  const isHeadphoneAndNotHover = categoryPhone === "Headphone" && !hover;
  const isSmartWatchAndNotHover = categoryPhone === "SmartWatch" && !hover;
  return (
    <div
      className={
        className ||
        `h-[145px] overflow-clip relative rounded-[4px] w-[170px] ${isCameraAndHover ? "bg-[#db4444] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]" : "border border-[rgba(0,0,0,0.3)] border-solid"}`
      }
      data-category={categoryPhone}
      role="button"
      tabIndex={0}
      aria-label={`Browse ${categoryPhone}`}
      id={
        isGamingAndNotHover
          ? "node-85_1609"
          : isHeadphoneAndNotHover
            ? "node-85_1573"
            : isCameraAndHover
              ? "node-262_5179"
              : isSmartWatchAndNotHover
                ? "node-85_1438"
                : isComputerAndNotHover
                  ? "node-85_1375"
                  : "node-85_1333"
      }
    >
      <p
        className={`[word-break:break-word] absolute font-["Poppins:Regular"] leading-[24px] not-italic text-[16px] translate-y-full whitespace-nowrap ${isGamingAndNotHover ? "bottom-[47px] left-[calc(50%-32px)] text-black" : isCameraAndHover ? "bottom-[48px] left-[calc(50%-34px)] text-[#fafafa]" : !hover && ["SmartWatch", "Headphone"].includes(categoryPhone) ? "bottom-[47px] left-[calc(50%-51px)] text-black" : isComputerAndNotHover ? "bottom-[47px] left-[calc(50%-45px)] text-black" : "bottom-[47px] left-[calc(50%-30px)] text-black"}`}
        id={
          isGamingAndNotHover
            ? "node-85_1610"
            : isHeadphoneAndNotHover
              ? "node-85_1574"
              : isCameraAndHover
                ? "node-262_5180"
                : isSmartWatchAndNotHover
                  ? "node-85_1477"
                  : isComputerAndNotHover
                    ? "node-85_1414"
                    : "node-68_3429"
        }
      >
        {isGamingAndNotHover
          ? "Gaming"
          : isHeadphoneAndNotHover
            ? "HeadPhones"
            : isCameraAndHover
              ? "Camera"
              : isSmartWatchAndNotHover
                ? "SmartWatch"
                : isComputerAndNotHover
                  ? "Computers"
                  : "Phones"}
      </p>
      {categoryPhone === "Phone" && !hover && (
        <CategoryCellPhone className="-translate-x-1/2 absolute left-1/2 size-[56px] top-[24px]" />
      )}
      {isComputerAndNotHover && (
        <CategoryComputer className="-translate-x-1/2 absolute left-[calc(50%+1px)] size-[56px] top-[24px]" />
      )}
      {isSmartWatchAndNotHover && (
        <CategorySmartWatch className="-translate-x-1/2 absolute left-1/2 overflow-clip size-[56px] top-[24px]" />
      )}
      {isCameraAndHover && (
        <div
          className="-translate-x-1/2 absolute left-1/2 size-[56px] top-[25px]"
          data-node-id="262:5181"
          data-name="Category-Camera"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgCategoryCamera}
          />
        </div>
      )}
      {isHeadphoneAndNotHover && (
        <CategoryHeadphone className="-translate-x-1/2 absolute left-1/2 size-[56px] top-[24px]" />
      )}
      {isGamingAndNotHover && (
        <CategoryGamepad className="-translate-x-1/2 absolute left-1/2 size-[56px] top-[24px]" />
      )}
    </div>
  );
}
