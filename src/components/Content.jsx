export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img src={content.img} alt={content.title} className="w-[300px] rounded-[10px] mb-[3px]" />
      <span className="text-[12px] text-[#d7fa00] border-[1px] border-solid border-[#d7fa00] rounded-[3px] py-[4px] px-[5px]">모집중</span>
      <div className="text-[18px] font-semibold">{content.title}</div>
      <p className="text-[12px] text-[#a0a0a0]">{content.subtitle}</p>
    </div>
  );
}
