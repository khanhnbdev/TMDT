const imgCart1 = "/assets/a6621b77-66de-4589-8455-0a1d1a10a6e5.svg";
const imgComponent2 = "/assets/9c064855-8204-40b1-953b-cc5a5bf67ac9.svg";
const imgUnderLine = "/assets/5f9ff643-dace-4b05-a79b-2ba996943796.svg";
const imgWishlist = "/assets/3931428d-caaa-4652-8c0d-380a5cf9c543.svg";
const imgCart1WithBuy = "/assets/d253498a-d73d-435a-a7ef-72fdd8f7150a.svg";

function Cart1({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="39:286" data-name="Cart1">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCart1} />
    </div>
  );
}

function Component2({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="35:243" data-name="Component 2" role="button" tabIndex={0} aria-label="Search">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgComponent2} />
    </div>
  );
}

type SearchComponentSetProps = {
  className?: string;
  property1?: "Active";
};

function SearchComponentSet({ className, property1 = "Active" }: SearchComponentSetProps) {
  return (
    <div className={className || "bg-[#f5f5f5] content-stretch flex flex-col items-center justify-center pl-[20px] pr-[12px] py-[7px] relative rounded-[4px]"} data-node-id="35:259">
      <div className="content-stretch flex gap-[34px] items-center justify-center relative shrink-0" data-node-id="35:246">
        <input className="font-['Poppins:Regular'] leading-[18px] relative shrink-0 text-[12px] text-black bg-transparent outline-none w-[153px]" placeholder="What are you looking for?" aria-label="Search products" data-node-id="35:224" />
        <Component2 className="relative shrink-0 size-[24px]" />
      </div>
    </div>
  );
}

function UnderLine({ className }: { className?: string }) {
  return (
    <div className={className || "h-0 relative w-[48px]"} data-node-id="106:1332" data-name="UnderLine">
      <div className="absolute inset-[-1px_0_0_0]">
        <img alt="" className="block max-w-none size-full" src={imgUnderLine} />
      </div>
    </div>
  );
}

type HeaderProps = {
  className?: string;
  header?: "About" | "Contact" | "Header-Home Hover";
};

function Header({ className, header = "Contact" }: HeaderProps) {
  const isAbout = header === "About";
  const isContact = header === "Contact";
  const isHeaderHomeHover = header === "Header-Home Hover";
  return (
    <div className={className || `relative ${isAbout ? "h-[24px] w-[48px]" : isContact ? "h-[24px] w-[66px]" : "content-stretch flex flex-col items-center"}`} role="button" tabIndex={0} id={isAbout ? "node-149_1769" : isContact ? "node-149_1765" : "node-149_1770"}>
      <p className={`[word-break:break-word] font-["Poppins:Regular"] leading-[24px] not-italic text-[16px] text-black text-center whitespace-nowrap ${["Contact", "About"].includes(header) ? "absolute inset-0" : "relative shrink-0"}`} id={isAbout ? "node-149_1754" : isContact ? "node-149_1750" : "node-149_1602"}>
        {isAbout ? "About" : isHeaderHomeHover ? "Home" : "Contact"}
      </p>
      {isHeaderHomeHover && <UnderLine className="h-0 relative shrink-0 w-[48px]" />}
    </div>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[24px] relative w-[118px]"} data-node-id="128:1513" data-name="Logo">
      <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold inset-0 leading-[24px] not-italic text-[24px] text-black tracking-[0.72px] whitespace-nowrap" data-node-id="128:1512">
        Exclusive
      </p>
    </div>
  );
}

export default function Header1() {
  return (
    <div className="content-stretch flex gap-[148px] items-center relative size-full" data-node-id="149:1535" data-name="Header">
      <div className="content-stretch flex gap-[190px] items-start relative shrink-0" data-node-id="I149:1535;149:1502">
        <Logo className="h-[24px] relative shrink-0 w-[118px]" />
        <div className="content-stretch flex gap-[48px] items-start relative shrink-0" data-node-id="I149:1535;149:1504">
          <Header className="content-stretch flex flex-col items-center relative shrink-0" header="Header-Home Hover" />
          <Header className="h-[24px] relative shrink-0 w-[66px]" />
          <Header className="h-[24px] relative shrink-0 w-[48px]" header="About" />
          <a className="block cursor-pointer h-[24px] relative shrink-0 w-[61px]" role="button" tabIndex={0} data-node-id="I149:1535;149:2239" data-name="Header">
            <p className="[word-break:break-word] absolute font-['Poppins:Regular'] inset-0 leading-[24px] not-italic text-[16px] text-black text-center whitespace-nowrap" data-node-id="I149:1535;149:2239;149:1758">
              Sign Up
            </p>
          </a>
        </div>
      </div>
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="I149:1535;149:1511">
        <SearchComponentSet className="bg-[#f5f5f5] content-stretch flex flex-col items-center justify-center pl-[20px] pr-[12px] py-[7px] relative rounded-[4px] shrink-0" />
        <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-node-id="I149:1535;149:1513">
          <div className="relative shrink-0 size-[32px]" role="button" tabIndex={0} aria-label="Open wishlist" data-node-id="I149:1535;149:1514" data-name="Wishlist">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWishlist} />
          </div>
          <a className="block cursor-pointer relative shrink-0 size-[32px]" role="button" tabIndex={0} aria-label="Open cart" data-node-id="I149:1535;149:1515" data-name="Cart1 with buy">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCart1WithBuy} />
          </a>
        </div>
      </div>
    </div>
  );
}
