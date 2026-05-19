export default function MacBookAir({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#2f9ddc] h-[832px] overflow-clip relative w-[1280px]"} data-name="MacBook Air - 2">
      <div className="[word-break:break-word] absolute font-['Sansita_One:Regular',sans-serif] h-[165px] leading-[0] left-[611px] not-italic text-[#f1fdff] text-[96px] top-[394px] tracking-[-3.84px] w-[748px]">
        <p className="leading-[normal] mb-0">Julian Badillo</p>
        <p className="leading-[normal]">​</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Alexandria:Bold',sans-serif] font-bold h-[81px] leading-[normal] left-[791px] text-[#29e7d1] text-[32px] top-[498px] tracking-[1.28px] w-[710px]">SOFTWARE ENGINEER</p>
      <div className="absolute left-[360px] size-[100px] top-[722px]" />
      <div className="absolute bg-[#32333c] h-[141px] left-0 top-0 w-[1280px]" />
      <p className="[word-break:break-word] absolute font-['Alexandria:Bold',sans-serif] font-bold h-[37px] leading-[normal] left-[673px] text-[#2f9ddc] text-[24px] top-[95px] tracking-[-0.48px] w-[92px]">SKILLS</p>
      <p className="[word-break:break-word] absolute font-['Alexandria:Bold',sans-serif] font-bold h-[37px] leading-[normal] left-[782px] text-[#2f9ddc] text-[24px] top-[92px] tracking-[-0.48px] w-[164px]">EXPERIENCE</p>
      <p className="[word-break:break-word] absolute font-['Alexandria:Bold',sans-serif] font-bold h-[38px] leading-[normal] left-[calc(50%+505px)] text-[#2f9ddc] text-[24px] top-[calc(50%-325px)] tracking-[-0.48px] w-[163px]">AWARDS</p>
      <p className="[word-break:break-word] absolute font-['Alexandria:Bold',sans-serif] font-bold h-[40px] leading-[normal] left-[972px] text-[#2f9ddc] text-[24px] top-[92px] tracking-[-0.48px] w-[146px]">EDUCATION</p>
      <p className="[word-break:break-word] absolute font-['Alexandria:Bold',sans-serif] font-bold h-[26px] leading-[normal] left-[555px] text-[#2f9ddc] text-[24px] top-[98px] tracking-[-0.48px] w-[90px]">HOME</p>
    </div>
  );
}