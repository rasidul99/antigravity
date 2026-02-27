import imgRawMineralShilajitInAWoodenBowl from "figma:asset/454dba44005cc8508954c99ffb21efc5405497ce.png";
import imgPremiumRedSaffronThreadsInABowl from "figma:asset/bcb6393b88956e7888e3946fa2aa1d40a91643a4.png";
import imgPureOrganicHoneyInAWoodenVessel from "figma:asset/bd471f6d5664a4a34fd4a14996cdbf276d6b1329.png";
import imgAshwagandhaRootPowderInAWoodenBowl from "figma:asset/5d8d8f184d82dbdea8e52b7ea18a6f542317b1c9.png";
import imgKoreanRedGinsengRootMacro from "figma:asset/4f36de550dac39ddbfdc94ed65a93f73e1858b21.png";
import imgBlackCuminSeedsInSmallBowl from "figma:asset/06459fbdd8bbf943fc0fad06f0ecb2b3016831c7.png";
import imgCrackedWalnutHalvesInBowl from "figma:asset/ff6192a0387081502c3cf3a6a485d0e420f1082c.png";
import imgRoastedCashewNutsInWoodenBowl from "figma:asset/cc61242b0aa8e5db8221289efb18007dfc1a5d02.png";

function Heading() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.01px)] top-[280px]" data-name="Heading 3">
      <div className="flex flex-col font-['Li_Ador_Noirrit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">শিলাজিৎ</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.01px)] top-[308px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[105.92px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Energy & Vitality`}</p>
      </div>
    </div>
  );
}

function RawMineralShilajitInAWoodenBowl() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Raw mineral shilajit in a wooden bowl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRawMineralShilajitInAWoodenBowl} />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 size-[166.39px]" data-name="Overlay+Shadow">
      <RawMineralShilajitInAWoodenBowl />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[64px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[44.81px] pt-[44.8px] px-[24px] relative w-full">
          <OverlayShadow />
          <div className="absolute inset-0 opacity-50" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)" }} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[24px] right-0 top-0" data-name="Margin">
      <BackgroundShadow />
    </div>
  );
}

function Ingredient1Shilajit() {
  return (
    <div className="absolute h-[328px] left-0 right-[864px] top-0" data-name="Ingredient 1: Shilajit">
      <Heading />
      <Container />
      <Margin />
    </div>
  );
}

function Heading1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.01px)] top-[280px]" data-name="Heading 3">
      <div className="flex flex-col font-['Li_Ador_Noirrit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">জাফরান</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[308px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[102.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Mood Enhancer</p>
      </div>
    </div>
  );
}

function PremiumRedSaffronThreadsInABowl() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Premium red saffron threads in a bowl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPremiumRedSaffronThreadsInABowl} />
      </div>
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 size-[166.39px]" data-name="Overlay+Shadow">
      <PremiumRedSaffronThreadsInABowl />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[64px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[44.81px] pt-[44.8px] px-[24px] relative w-full">
          <OverlayShadow1 />
          <div className="absolute inset-0 opacity-50" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)" }} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[24px] right-0 top-0" data-name="Margin">
      <BackgroundShadow1 />
    </div>
  );
}

function Ingredient2Saffron() {
  return (
    <div className="absolute h-[328px] left-[288px] right-[576px] top-0" data-name="Ingredient 2: Saffron">
      <Heading1 />
      <Container1 />
      <Margin1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[280px]" data-name="Heading 3">
      <div className="flex flex-col font-['Li_Ador_Noirrit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">মধু</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.01px)] top-[308px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[96.42px]">
        <p className="leading-[20px] whitespace-pre-wrap">Natural Carrier</p>
      </div>
    </div>
  );
}

function PureOrganicHoneyInAWoodenVessel() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Pure organic honey in a wooden vessel">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPureOrganicHoneyInAWoodenVessel} />
      </div>
    </div>
  );
}

function OverlayShadow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 size-[166.39px]" data-name="Overlay+Shadow">
      <PureOrganicHoneyInAWoodenVessel />
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[64px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[44.81px] pt-[44.8px] px-[24px] relative w-full">
          <OverlayShadow2 />
          <div className="absolute inset-0 opacity-50" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)" }} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[24px] right-0 top-0" data-name="Margin">
      <BackgroundShadow2 />
    </div>
  );
}

function Ingredient3Honey() {
  return (
    <div className="absolute h-[328px] left-[576px] right-[288px] top-0" data-name="Ingredient 3: Honey">
      <Heading2 />
      <Container2 />
      <Margin2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[280px]" data-name="Heading 3">
      <div className="flex flex-col font-['Li_Ador_Noirrit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">অশ্বগন্ধা</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.01px)] top-[308px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[83.14px]">
        <p className="leading-[20px] whitespace-pre-wrap">Stress Relief</p>
      </div>
    </div>
  );
}

function AshwagandhaRootPowderInAWoodenBowl() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Ashwagandha root powder in a wooden bowl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAshwagandhaRootPowderInAWoodenBowl} />
      </div>
    </div>
  );
}

function OverlayShadow3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 size-[166.39px]" data-name="Overlay+Shadow">
      <AshwagandhaRootPowderInAWoodenBowl />
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[64px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[44.81px] pt-[44.8px] px-[24px] relative w-full">
          <OverlayShadow3 />
          <div className="absolute inset-0 opacity-50" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)" }} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[24px] right-0 top-0" data-name="Margin">
      <BackgroundShadow3 />
    </div>
  );
}

function Ingredient4Ashwagandha() {
  return (
    <div className="absolute h-[328px] left-[864px] right-0 top-0" data-name="Ingredient 4: Ashwagandha">
      <Heading3 />
      <Container3 />
      <Margin3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[280px]" data-name="Heading 3">
      <div className="flex flex-col font-['Li_Ador_Noirrit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">জিনসেং</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[308px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[111.88px]">
        <p className="leading-[20px] whitespace-pre-wrap">Physical Stamina</p>
      </div>
    </div>
  );
}

function KoreanRedGinsengRootMacro() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Korean red ginseng root macro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgKoreanRedGinsengRootMacro} />
      </div>
    </div>
  );
}

function OverlayShadow4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 size-[166.39px]" data-name="Overlay+Shadow">
      <KoreanRedGinsengRootMacro />
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[64px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[44.81px] pt-[44.8px] px-[24px] relative w-full">
          <OverlayShadow4 />
          <div className="absolute inset-0 opacity-50" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)" }} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Margin4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[24px] right-0 top-0" data-name="Margin">
      <BackgroundShadow4 />
    </div>
  );
}

function Ingredient5Ginseng() {
  return (
    <div className="absolute h-[328px] left-0 right-[864px] top-[376px]" data-name="Ingredient 5: Ginseng">
      <Heading4 />
      <Container4 />
      <Margin4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[280px]" data-name="Heading 3">
      <div className="flex flex-col font-['Li_Ador_Noirrit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">কালিজিরা</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.01px)] top-[308px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[102.58px]">
        <p className="leading-[20px] whitespace-pre-wrap">Immunity Boost</p>
      </div>
    </div>
  );
}

function BlackCuminSeedsInSmallBowl() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Black cumin seeds in small bowl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBlackCuminSeedsInSmallBowl} />
      </div>
    </div>
  );
}

function OverlayShadow5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 size-[166.39px]" data-name="Overlay+Shadow">
      <BlackCuminSeedsInSmallBowl />
    </div>
  );
}

function BackgroundShadow5() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[64px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[44.81px] pt-[44.8px] px-[24px] relative w-full">
          <OverlayShadow5 />
          <div className="absolute inset-0 opacity-50" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)" }} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Margin5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[24px] right-0 top-0" data-name="Margin">
      <BackgroundShadow5 />
    </div>
  );
}

function Ingredient6BlackSeed() {
  return (
    <div className="absolute h-[328px] left-[288px] right-[576px] top-[376px]" data-name="Ingredient 6: Black Seed">
      <Heading5 />
      <Container5 />
      <Margin5 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.01px)] top-[280px]" data-name="Heading 3">
      <div className="flex flex-col font-['Li_Ador_Noirrit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">আখরোট</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[308px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[79.75px]">
        <p className="leading-[20px] whitespace-pre-wrap">Brain Health</p>
      </div>
    </div>
  );
}

function CrackedWalnutHalvesInBowl() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Cracked walnut halves in bowl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCrackedWalnutHalvesInBowl} />
      </div>
    </div>
  );
}

function OverlayShadow6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 size-[166.39px]" data-name="Overlay+Shadow">
      <CrackedWalnutHalvesInBowl />
    </div>
  );
}

function BackgroundShadow6() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[64px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[44.81px] pt-[44.8px] px-[24px] relative w-full">
          <OverlayShadow6 />
          <div className="absolute inset-0 opacity-50" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)" }} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Margin6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[24px] right-0 top-0" data-name="Margin">
      <BackgroundShadow6 />
    </div>
  );
}

function Ingredient7Walnut() {
  return (
    <div className="absolute h-[328px] left-[576px] right-[288px] top-[376px]" data-name="Ingredient 7: Walnut">
      <Heading6 />
      <Container6 />
      <Margin6 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[280px]" data-name="Heading 3">
      <div className="flex flex-col font-['Li_Ador_Noirrit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">কাজু বাদাম</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[308px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[91.78px]">
        <p className="leading-[20px] whitespace-pre-wrap">Natural Power</p>
      </div>
    </div>
  );
}

function RoastedCashewNutsInWoodenBowl() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Roasted cashew nuts in wooden bowl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRoastedCashewNutsInWoodenBowl} />
      </div>
    </div>
  );
}

function OverlayShadow7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 size-[166.39px]" data-name="Overlay+Shadow">
      <RoastedCashewNutsInWoodenBowl />
    </div>
  );
}

function BackgroundShadow7() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[64px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[44.81px] pt-[44.8px] px-[24px] relative w-full">
          <OverlayShadow7 />
          <div className="absolute inset-0 opacity-50" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)" }} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Margin7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[24px] right-0 top-0" data-name="Margin">
      <BackgroundShadow7 />
    </div>
  );
}

function Ingredient8Cashew() {
  return (
    <div className="absolute h-[328px] left-[864px] right-0 top-[376px]" data-name="Ingredient 8: Cashew">
      <Heading7 />
      <Container7 />
      <Margin7 />
    </div>
  );
}

export default function IngredientsGrid4X2OnDesktop() {
  return (
    <div className="relative size-full" data-name="Ingredients Grid (4x2 on desktop)">
      <Ingredient1Shilajit />
      <Ingredient2Saffron />
      <Ingredient3Honey />
      <Ingredient4Ashwagandha />
      <Ingredient5Ginseng />
      <Ingredient6BlackSeed />
      <Ingredient7Walnut />
      <Ingredient8Cashew />
    </div>
  );
}