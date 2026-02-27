import svgPaths from "./svg-bpaeem9s4g";
import imgAhmedKPortrait from "figma:asset/313744e84df97594724fc8668885f33555de352a.png";
import imgSteveJPortrait from "figma:asset/ca5325972fd76f553b7cc3d3c7088723c6d50d6b.png";
import imgRahulMPortrait from "figma:asset/cada0639f302047ac82f31e521b91301b4227070.png";
import imgWhatsAppImage20260202At101737Pm1 from "figma:asset/0e4d44a636d7e5aaa339ee796aa215e2c2018b8d.png";

function Container2() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.pf8747d7} fill="var(--fill-0, #8DC540)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(141,197,64,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container2 />
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8dc540] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[20px]">প্রাকৃতিক ভেষজ উপাদান</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute h-[12px] left-0 top-[64.5px] w-[257.67px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257.67 12">
        <g clipPath="url(#clip0_6_139)" id="SVG">
          <path d={svgPaths.p2d222c00} id="Vector" stroke="var(--stroke-0, #8DC540)" strokeWidth="15.1068" />
        </g>
        <defs>
          <clipPath id="clip0_6_139">
            <rect fill="white" height="12" width="257.67" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start mr-[-140.9px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8dc540] text-[72px] tracking-[-1.8px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[72px]">প্রাণশক্তি</p>
      </div>
      <Svg />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-end pr-[140.9px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[72px] mr-[-140.9px] relative shrink-0 text-[#1f2937] text-[72px] tracking-[-1.8px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">ফিরিয়ে আনুন</p>
        <p>{`আপনার `}</p>
      </div>
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Medium',sans-serif] justify-center leading-[32.5px] not-italic relative shrink-0 text-[#475569] text-[20px] w-full whitespace-pre-wrap">
        <p className="mb-0">হারানো যৌবন ও শক্তি ফিরে পেতে ১০০% কার্যকরী প্রাকৃতিক সমাধান।</p>
        <p>কোন পার্শ্বপ্রতিক্রিয়া ছাড়াই।</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.982px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9815 20">
        <g id="Container">
          <path d={svgPaths.pb5c2400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e87b00] content-stretch flex gap-[12px] h-[64px] items-center justify-center px-[40px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[64px] left-0 right-[-0.04px] rounded-[9999px] shadow-[0px_20px_25px_-5px_rgba(232,123,0,0.2),0px_8px_10px_-6px_rgba(232,123,0,0.2)] top-0" data-name="Button:shadow" />
      <Container7 />
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[100.39px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">অর্ডার করুন</p>
      </div>
    </div>
  );
}

function AhmedKPortrait() {
  return (
    <div className="max-w-[344px] relative rounded-[9999px] shadow-[0px_0px_0px_2px_#f3f4f6] shrink-0 size-[48px]" data-name="Ahmed K portrait">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAhmedKPortrait} />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#e2e8f0] mr-[-12px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <AhmedKPortrait />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function SteveJPortrait() {
  return (
    <div className="max-w-[344px] relative rounded-[9999px] shadow-[0px_0px_0px_2px_#f3f4f6] shrink-0 size-[48px]" data-name="Steve J portrait">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSteveJPortrait} />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#e2e8f0] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <SteveJPortrait />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-12px] relative shrink-0 size-[40px]" data-name="Margin">
      <BackgroundBorder1 />
    </div>
  );
}

function RahulMPortrait() {
  return (
    <div className="max-w-[344px] relative rounded-[9999px] shadow-[0px_0px_0px_2px_#f3f4f6] shrink-0 size-[48px]" data-name="Rahul M portrait">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRahulMPortrait} />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#e2e8f0] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <RahulMPortrait />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-12px] relative shrink-0 size-[40px]" data-name="Margin">
      <BackgroundBorder2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-start pr-[12px] relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Margin />
      <Margin1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p>
          <span className="leading-[20px]">৫০০০+</span>
          <span className="font-['Noto_Sans_Bengali:Medium',sans-serif] leading-[20px] not-italic text-[#475569]">{` সন্তুষ্ট গ্রাহক`}</span>
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-[16px] relative self-stretch shrink-0" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[20px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start max-w-[672px] min-h-px min-w-px relative" data-name="Container">
      <OverlayBorder />
      <Container3 />
      <Container6 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <div className="blur-[12px] rounded-bl-[292.5px] rounded-br-[382.5px] rounded-tl-[180px] rounded-tr-[360px] shrink-0 size-[450px]" data-name="Gradient+Blur" style={{ backgroundImage: "linear-gradient(135deg, rgba(141, 197, 64, 0.2) 0%, rgba(141, 197, 64, 0.05) 100%)" }} />
    </div>
  );
}

function Blur() {
  return (
    <div className="absolute blur-[0.5px] content-stretch flex flex-col items-start justify-center opacity-80 right-[40px] size-[64px] top-[40px]" data-name="Blur">
      <div className="bg-[rgba(251,191,36,0.2)] blur-[6px] flex-[1_0_0] min-h-px min-w-px rounded-[9999px] w-full" data-name="Overlay+Blur" />
    </div>
  );
}

function Blur1() {
  return (
    <div className="absolute blur-[0.5px] bottom-[80px] content-stretch flex flex-col items-start justify-center left-[40px] opacity-60 size-[48px]" data-name="Blur">
      <div className="bg-[rgba(21,128,61,0.2)] blur-[6px] flex-[1_0_0] min-h-px min-w-px rounded-[9999px] w-full" data-name="Overlay+Blur" />
    </div>
  );
}

function Container13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-80px)] top-[calc(50%-20px)] w-[320px]" data-name="Container">
      <div className="h-[419px] relative rounded-[75px] shrink-0 w-[408px]" data-name="WhatsApp Image 2026-02-02 at 10.17.37 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[75px]">
          <img alt="" className="absolute h-full left-[-113.43%] max-w-none top-0 w-[233.58%]" src={imgWhatsAppImage20260202At101737Pm1} />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
        <g id="Container">
          <path d={svgPaths.p1c671000} fill="var(--fill-0, #EA580C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ffedd5] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">গ্যারান্টি</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[20px]">প্রিমিয়াম কোয়ালিটি</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.7)] bottom-[128px] content-stretch flex gap-[12px] items-center max-w-[200px] p-[17px] right-[-16px] rounded-[16px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)]" />
      <Background />
      <Container15 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[16.992px] relative shrink-0 w-[16.995px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9955 16.9923">
        <g id="Container">
          <path d={svgPaths.p12cee600} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dcfce7] h-[40px] relative rounded-[9999px] shrink-0 w-[39.73px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">উপাদান</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">১০০%</p>
        <p>প্রাকৃতিক</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.7)] content-stretch flex gap-[12px] items-center left-[-32px] max-w-[180px] p-[17px] rounded-[16px] top-[80px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.05)]" />
      <Background1 />
      <Container19 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[600px] items-center justify-center min-h-px min-w-px relative" data-name="Container">
      <Container12 />
      <Blur />
      <Blur1 />
      <Container13 />
      <OverlayBorderShadowOverlayBlur />
      <OverlayBorderShadowOverlayBlur1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[80px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container11 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start pt-[96px] px-[32px] relative size-full" data-name="Section">
      <div className="absolute bg-[#8dc540] blur-[60px] left-[-266.67px] opacity-15 rounded-[9999px] size-[800px] top-[-266.67px]" data-name="Background+Blur" />
      <div className="absolute bg-[#8dc540] blur-[50px] bottom-[-200px] opacity-15 right-[-200px] rounded-[9999px] size-[600px]" data-name="Background+Blur" />
      <Container />
    </div>
  );
}