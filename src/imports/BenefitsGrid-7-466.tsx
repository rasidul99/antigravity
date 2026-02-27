import svgPaths from "./svg-q5o0pqwds6";

function OverlayShadowOverlayBlur() {
  return (
    <div className="h-[88px] relative shrink-0 w-[80px]" data-name="Overlay+Shadow+OverlayBlur">
      <div className="absolute inset-[0_-20%_-18.18%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 104">
          <g data-figma-bg-blur-radius="12" filter="url(#filter0_dddd_7_479)" id="Overlay+Shadow+OverlayBlur">
            <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="88" rx="40" shapeRendering="crispEdges" width="80" />
            <path d={svgPaths.p38f86d80} fill="var(--fill-0, white)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="116" id="filter0_dddd_7_479" width="108" x="-12" y="-12">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_479" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="8" dy="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_7_479" mode="normal" result="effect2_dropShadow_7_479" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="12" dy="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="effect2_dropShadow_7_479" mode="normal" result="effect3_dropShadow_7_479" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="16" dy="16" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
              <feBlend in2="effect3_dropShadow_7_479" mode="normal" result="effect4_dropShadow_7_479" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_7_479" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_0_7_479_clip_path" transform="translate(12 12)">
              <rect height="88" rx="40" width="80" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
      <OverlayShadowOverlayBlur />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px]">রোগ প্রতিরোধ</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Heading 3:margin">
      <Heading />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4.66px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">প্রাকৃতিক রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে এবং</p>
        <p>সুস্থ রাখে।</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bottom-[-38.5px] content-stretch flex flex-col items-center opacity-10 pt-[6.5px] right-[-32.66px]" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[128px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[128px] text-center w-[128.678px]">
        <p className="leading-[128px] whitespace-pre-wrap">shield</p>
      </div>
    </div>
  );
}

function Card1ImmunityPrimaryGreen() {
  return (
    <div className="absolute bg-[#8dc440] content-stretch flex flex-col h-[320px] items-center justify-center left-0 overflow-clip p-[32px] right-[789.34px] rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.3),0px_10px_10px_-5px_rgba(0,0,0,0.2)] top-0" data-name="Card 1: Immunity (Primary Green)">
      <Margin />
      <Heading3Margin />
      <Container />
      <Container1 />
    </div>
  );
}

function OverlayShadowOverlayBlur1() {
  return (
    <div className="h-[88px] relative shrink-0 w-[80px]" data-name="Overlay+Shadow+OverlayBlur">
      <div className="absolute inset-[0_-20%_-18.18%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 104">
          <g data-figma-bg-blur-radius="12" filter="url(#filter0_dddd_7_476)" id="Overlay+Shadow+OverlayBlur">
            <rect fill="var(--fill-0, white)" fillOpacity="0.1" height="88" rx="40" shapeRendering="crispEdges" width="80" />
            <path d={svgPaths.p27f4a400} fill="var(--fill-0, #D4BBA0)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="116" id="filter0_dddd_7_476" width="108" x="-12" y="-12">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_476" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="8" dy="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_7_476" mode="normal" result="effect2_dropShadow_7_476" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="12" dy="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="effect2_dropShadow_7_476" mode="normal" result="effect3_dropShadow_7_476" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="16" dy="16" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
              <feBlend in2="effect3_dropShadow_7_476" mode="normal" result="effect4_dropShadow_7_476" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_7_476" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_0_7_476_clip_path" transform="translate(12 12)">
              <rect height="88" rx="40" width="80" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
      <OverlayShadowOverlayBlur1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#d4bba0] text-[24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px]">শক্তি বৃদ্ধি</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Heading 3:margin">
      <Heading1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[25.54px] pr-[25.56px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(212,187,160,0.8)] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">সারাদিনের ক্লান্তি দূর করে এবং কর্মশক্তি</p>
        <p>যোগায়।</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-[-38.5px] content-stretch flex flex-col items-center opacity-5 pt-[6.5px] right-[-32.66px]" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[128px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[128px] text-center w-[128.668px]">
        <p className="leading-[128px] whitespace-pre-wrap">bolt</p>
      </div>
    </div>
  );
}

function Card2EnergyCocoaBrown() {
  return (
    <div className="absolute bg-[#5d4037] content-stretch flex flex-col h-[320px] items-center justify-center left-[394.66px] overflow-clip p-[32px] right-[394.67px] rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.3),0px_10px_10px_-5px_rgba(0,0,0,0.2)] top-0" data-name="Card 2: Energy (Cocoa Brown)">
      <Margin1 />
      <Heading3Margin1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function OverlayShadowOverlayBlur2() {
  return (
    <div className="h-[81.985px] relative shrink-0 w-[81.991px]" data-name="Overlay+Shadow+OverlayBlur">
      <div className="absolute inset-[0_-19.51%_-19.52%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.9909 97.9846">
          <g data-figma-bg-blur-radius="12" filter="url(#filter0_dddd_7_470)" id="Overlay+Shadow+OverlayBlur">
            <rect fill="var(--fill-0, #5D4037)" fillOpacity="0.1" height="81.9846" rx="40.9923" shapeRendering="crispEdges" width="81.9909" />
            <path d={svgPaths.p65d080} fill="var(--fill-0, #5D4037)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="109.985" id="filter0_dddd_7_470" width="109.991" x="-12" y="-12">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_470" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="8" dy="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_7_470" mode="normal" result="effect2_dropShadow_7_470" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="12" dy="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="effect2_dropShadow_7_470" mode="normal" result="effect3_dropShadow_7_470" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="16" dy="16" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
              <feBlend in2="effect3_dropShadow_7_470" mode="normal" result="effect4_dropShadow_7_470" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_7_470" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_0_7_470_clip_path" transform="translate(12 12)">
              <rect height="81.9846" rx="40.9923" width="81.9909" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
      <OverlayShadowOverlayBlur2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5d4037] text-[24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px]">প্রকৃতির বিশুদ্ধতা</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Heading 3:margin">
      <Heading2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[19.41px] pr-[19.43px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(93,64,55,0.8)] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">১০০% ভেষজ উপাদান দিয়ে তৈরি, কোনো</p>
        <p>কেমিক্যাল নেই।</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-[-38.5px] content-stretch flex flex-col items-center opacity-5 pt-[6.5px] right-[-32.66px]" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[128px] justify-center leading-[0] not-italic relative shrink-0 text-[#5d4037] text-[128px] text-center w-[128.678px]">
        <p className="leading-[128px] whitespace-pre-wrap">eco</p>
      </div>
    </div>
  );
}

function Card4NaturalSoftTan() {
  return (
    <div className="absolute bg-[#d4bba0] content-stretch flex flex-col h-[320px] items-center justify-center left-[789.33px] overflow-clip p-[32px] right-[0.01px] rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.3),0px_10px_10px_-5px_rgba(0,0,0,0.2)] top-0" data-name="Card 4: Natural (Soft Tan)">
      <Margin2 />
      <Heading3Margin2 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function OverlayShadowOverlayBlur3() {
  return (
    <div className="h-[81.985px] relative shrink-0 w-[81.991px]" data-name="Overlay+Shadow+OverlayBlur">
      <div className="absolute inset-[0_-19.51%_-19.52%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.9909 97.9846">
          <g data-figma-bg-blur-radius="12" filter="url(#filter0_dddd_7_470)" id="Overlay+Shadow+OverlayBlur">
            <rect fill="var(--fill-0, #5D4037)" fillOpacity="0.1" height="81.9846" rx="40.9923" shapeRendering="crispEdges" width="81.9909" />
            <path d={svgPaths.p65d080} fill="var(--fill-0, #5D4037)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="109.985" id="filter0_dddd_7_470" width="109.991" x="-12" y="-12">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_470" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="8" dy="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_7_470" mode="normal" result="effect2_dropShadow_7_470" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="12" dy="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="effect2_dropShadow_7_470" mode="normal" result="effect3_dropShadow_7_470" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="16" dy="16" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
              <feBlend in2="effect3_dropShadow_7_470" mode="normal" result="effect4_dropShadow_7_470" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_7_470" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_0_7_470_clip_path" transform="translate(12 12)">
              <rect height="81.9846" rx="40.9923" width="81.9909" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
      <OverlayShadowOverlayBlur3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5d4037] text-[24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px]">সম্পূর্ণ প্রাকৃতিক</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Heading 3:margin">
      <Heading3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[19.41px] pr-[19.43px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(93,64,55,0.8)] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">১০০% ভেষজ উপাদান দিয়ে তৈরি, কোনো</p>
        <p>কেমিক্যাল নেই।</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-[-38.5px] content-stretch flex flex-col items-center opacity-5 pt-[6.5px] right-[-32.66px]" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[128px] justify-center leading-[0] not-italic relative shrink-0 text-[#5d4037] text-[128px] text-center w-[128.678px]">
        <p className="leading-[128px] whitespace-pre-wrap">eco</p>
      </div>
    </div>
  );
}

function Card4NaturalSoftTan1() {
  return (
    <div className="absolute bg-[#d4bba0] content-stretch flex flex-col h-[320px] items-center justify-center left-0 overflow-clip p-[32px] right-[789.34px] rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.3),0px_10px_10px_-5px_rgba(0,0,0,0.2)] top-[352px]" data-name="Card 4: Natural (Soft Tan)">
      <Margin3 />
      <Heading3Margin3 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function OverlayShadowOverlayBlur4() {
  return (
    <div className="h-[84.7px] relative shrink-0 w-[88px]" data-name="Overlay+Shadow+OverlayBlur">
      <div className="absolute inset-[0_-18.18%_-18.89%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 100.7">
          <g data-figma-bg-blur-radius="12" filter="url(#filter0_dddd_7_482)" id="Overlay+Shadow+OverlayBlur">
            <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="84.7" rx="42.35" shapeRendering="crispEdges" width="88" />
            <path d={svgPaths.p3aad8580} fill="var(--fill-0, white)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="112.7" id="filter0_dddd_7_482" width="116" x="-12" y="-12">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_482" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="8" dy="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_7_482" mode="normal" result="effect2_dropShadow_7_482" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="12" dy="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="effect2_dropShadow_7_482" mode="normal" result="effect3_dropShadow_7_482" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="16" dy="16" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
              <feBlend in2="effect3_dropShadow_7_482" mode="normal" result="effect4_dropShadow_7_482" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_7_482" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_0_7_482_clip_path" transform="translate(12 12)">
              <rect height="84.7" rx="42.35" width="88" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
      <OverlayShadowOverlayBlur4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px]">হার্ট ভালো রাখে</p>
      </div>
    </div>
  );
}

function Heading3Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Heading 3:margin">
      <Heading4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[6.32px] pr-[6.33px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">কার্ডিওভ্যাসকুলার স্বাস্থ্য ভালো রাখতে সহায়তা</p>
        <p>করে।</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bottom-[-38.5px] content-stretch flex flex-col items-center opacity-10 pt-[6.5px] right-[-32.66px]" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[128px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[128px] text-center w-[128.668px]">
        <p className="leading-[128px] whitespace-pre-wrap">favorite</p>
      </div>
    </div>
  );
}

function Card5HeartHealthPrimaryGreenDarkerShadeVariantForCheckerboardFeel() {
  return (
    <div className="absolute bg-[#7dae39] content-stretch flex flex-col h-[320px] items-center justify-center left-[394.66px] overflow-clip p-[32px] right-[394.67px] rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.3),0px_10px_10px_-5px_rgba(0,0,0,0.2)] top-[352px]" data-name="Card 5: Heart Health (Primary Green - darker shade variant for checkerboard feel)">
      <Margin4 />
      <Heading3Margin4 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function OverlayShadowOverlayBlur5() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Overlay+Shadow+OverlayBlur">
      <div className="absolute inset-[0_-18.18%_-18.18%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
          <g data-figma-bg-blur-radius="12" filter="url(#filter0_dddd_7_473)" id="Overlay+Shadow+OverlayBlur">
            <rect fill="var(--fill-0, white)" fillOpacity="0.1" height="88" rx="44" shapeRendering="crispEdges" width="88" />
            <path d={svgPaths.pce3f800} fill="var(--fill-0, #D4BBA0)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="116" id="filter0_dddd_7_473" width="116" x="-12" y="-12">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_473" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="8" dy="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_7_473" mode="normal" result="effect2_dropShadow_7_473" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="12" dy="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="effect2_dropShadow_7_473" mode="normal" result="effect3_dropShadow_7_473" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="16" dy="16" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
              <feBlend in2="effect3_dropShadow_7_473" mode="normal" result="effect4_dropShadow_7_473" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_7_473" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_0_7_473_clip_path" transform="translate(12 12)">
              <rect height="88" rx="44" width="88" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
      <OverlayShadowOverlayBlur5 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#d4bba0] text-[24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px]">হজমে সহায়তা</p>
      </div>
    </div>
  );
}

function Heading3Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Heading 3:margin">
      <Heading5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[16.95px] pr-[16.96px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Sans_Bengali:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(212,187,160,0.8)] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">হজমশক্তি বৃদ্ধি করে এবং পেটের সমস্যা দূর</p>
        <p>করে।</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bottom-[-38.5px] content-stretch flex flex-col items-center opacity-5 pt-[6.5px] right-[-32.66px]" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[128px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[128px] text-center w-[128.678px]">
        <p className="leading-[128px] whitespace-pre-wrap">spa</p>
      </div>
    </div>
  );
}

function Card6DigestionCocoaBrown() {
  return (
    <div className="absolute bg-[#5d4037] content-stretch flex flex-col h-[320px] items-center justify-center left-[789.33px] overflow-clip p-[32px] right-[0.01px] rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.3),0px_10px_10px_-5px_rgba(0,0,0,0.2)] top-[352px]" data-name="Card 6: Digestion (Cocoa Brown)">
      <Margin5 />
      <Heading3Margin5 />
      <Container10 />
      <Container11 />
    </div>
  );
}

export default function BenefitsGrid() {
  return (
    <div className="relative size-full" data-name="Benefits Grid">
      <Card1ImmunityPrimaryGreen />
      <Card2EnergyCocoaBrown />
      <Card4NaturalSoftTan />
      <Card4NaturalSoftTan1 />
      <Card5HeartHealthPrimaryGreenDarkerShadeVariantForCheckerboardFeel />
      <Card6DigestionCocoaBrown />
    </div>
  );
}