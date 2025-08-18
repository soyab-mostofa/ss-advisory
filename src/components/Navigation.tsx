import Image from "next/image";

const Navigation = () => {
  return (
    <div className="flex items-center justify-center w-full gap-[351px] bg-white px-[120px] py-5">
      <Image
        src="/images/megv1vhw-25cglug.svg"
        alt="SS Advisory Logo"
        width={71}
        height={75}
        className="flex-shrink-0"
      />
      <div className="flex items-center justify-between w-[778px] min-w-[778px]">
        <div className="inline-flex items-center gap-7 border border-[#dde2eb] rounded-xl bg-[#f8f8f8] py-[7px] px-[15px] pl-[7px]">
          <div className="flex items-center justify-center gap-[10px] rounded-lg bg-[#d4e4ff] px-4 py-1 w-[90px]">
            <p className="text-[#204199] font-urbanist text-lg leading-[25px]">Home</p>
          </div>
          <div className="relative w-px h-4">
            <div className="absolute top-2 -left-2 bg-[#dde2eb] w-4 h-px rotate-90"></div>
          </div>
          <p className="text-[#545660] font-urbanist text-lg leading-[25px]">Services</p>
          <div className="relative w-px h-4">
            <div className="absolute top-2 -left-2 bg-[#dde2eb] w-4 h-px rotate-90"></div>
          </div>
          <p className="text-[#545660] font-urbanist text-lg leading-[25px]">Careers</p>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl bg-[#204199] px-4 py-2 w-36 h-11">
          <p className="text-white font-urbanist text-base font-medium leading-6">Contact</p>
          <Image
            src="/images/megv1vhw-xry6gqf.svg"
            alt="Phone icon"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;