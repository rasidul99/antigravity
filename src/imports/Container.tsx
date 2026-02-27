import svgPaths from "./svg-ent8bg643g";

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Li_Ador_Noirrit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">শিপিং এরিয়া *</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3851da00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image fill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Svg />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#87c73d] relative rounded-[16px] shrink-0 size-[18px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <ImageFill />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['FreeSans:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] w-[102.47px]">
          <p className="leading-[24px] whitespace-pre-wrap">ঢাকার ভিতরে (৳৭০)</p>
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center pl-[12px] pr-[359.53px] py-[13px] relative w-full">
          <Input />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['FreeSans:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[16px] w-[108.16px]">
          <p className="leading-[24px] whitespace-pre-wrap">ঢাকার বাহিরে (৳১২০)</p>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[13px] relative w-full">
          <div className="bg-white relative rounded-[16px] shrink-0 size-[16px]" data-name="Input">
            <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Label2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pt-[8px] relative size-full" data-name="Container">
      <Label />
      <Container1 />
    </div>
  );
}