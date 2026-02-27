import svgPaths from "./svg-sohy3ay5iw";

function Container() {
  return <div className="absolute h-[1272.209px] left-[-260.42px] top-[-603.12px] w-[950.136px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="absolute left-[88.28px] size-[23.991px] top-[18px]" data-name="Icon">
      <div className="absolute inset-[-8.34%_-8.34%_-16.67%_-8.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9929 29.9922">
          <g filter="url(#filter0_d_2012_132)" id="Icon">
            <path d={svgPaths.p2cc4a580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
            <path d="M4.99964 7.99822H22.9933" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
            <path d={svgPaths.p18d9aa00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="31.9915" id="filter0_d_2012_132" width="31.9915" x="-1.99929" y="-0.999645">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2012_132" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2012_132" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[27.997px] items-start left-[124.26px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)] top-[15.99px] w-[210.767px]" data-name="Text">
      <p className="font-['Li_Ador_Noirrit:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-center text-white">অর্ডার কনফার্ম করুন ৩২২০৳</p>
    </div>
  );
}

function Container2() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[61.34px] to-[rgba(0,0,0,0)] via-1/2 via-[rgba(255,255,255,0.2)] w-[212px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute bg-[#e87b00] h-[59.986px] left-[3px] overflow-clip rounded-[9px] top-[3px] w-[423.31px]" data-name="Container">
      <Icon />
      <Text />
      <div className="absolute flex h-[60px] items-center justify-center left-[-429.86px] top-[-0.01px] w-[224.753px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none scale-y-98 skew-x-12">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative rounded-[14px] shadow-[0px_4px_15px_0px_rgba(232,123,0,0.4)] size-full" data-name="Button">
      <Container />
      <Container1 />
    </div>
  );
}