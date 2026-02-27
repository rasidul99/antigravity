function Container1() {
  return <div className="h-0 shrink-0 w-full" data-name="Container" />;
}

function Heading() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Li_Ador_Noirrit:Bold',sans-serif] leading-[0] left-[163.86px] not-italic text-[#1f2937] text-[30px] text-center top-[-0.38px]">
        <span className="leading-[36px]">{`মূল `}</span>
        <span className="leading-[36px] text-[#8dc540]">উপাদানসমূহ</span>
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[87.755px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Li_Ador_Noirrit:Regular',sans-serif] leading-[29.25px] left-[163.91px] not-italic text-[#4b5563] text-[18px] text-center top-[0.38px] w-[327px] whitespace-pre-wrap">আমরা ব্যবহার করি বিশ্বের সেরা উৎস থেকে সংগৃহীত সম্পূর্ণ প্রাকৃতিক ও ভেষজ উপাদান। প্রতিটি উপাদান বিশুদ্ধ এবং পরীক্ষিত।</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[15.994px] items-start relative size-full" data-name="Container">
      <Container1 />
      <Heading />
      <Paragraph />
    </div>
  );
}