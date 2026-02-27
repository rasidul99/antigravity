import imgAsset35X1 from "figma:asset/fa6d3ba814473eeaa4a8f4153aeb8f530e6e7d10.png";

export default function Header() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(141,197,64,0.8)] content-stretch flex flex-col items-center justify-center pb-[13px] pt-[12px] relative size-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="h-[60px] relative shrink-0 w-[155px]" data-name="Asset 3@5x 1">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset35X1} />
      </div>
    </div>
  );
}