import svgPaths from "./svg-zpq9icupgt";

function Container() {
  return (
    <div className="h-[1.5px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 1.5">
        <g id="Container">
          <path d="M0 1.5V0H10.5V1.5H0V1.5" fill="var(--fill-0, #4B5563)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#151910] text-[18px] text-center w-[7.77px]">
          <p className="leading-[28px] whitespace-pre-wrap">1</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#8dc440] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

export default function BackgroundBorderShadow() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[12px] items-center p-[5px] relative rounded-[12px] size-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Button />
      <Container1 />
      <Button1 />
    </div>
  );
}