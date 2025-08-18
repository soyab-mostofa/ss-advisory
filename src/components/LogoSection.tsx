import Image from "next/image";

const LogoSection = () => {
  return (
    <div className=" items-center w-full hidden md:flex gap-16 bg-[#f8f8f8] px-[120px] pb-[100px]">
      <div className="flex items-center py-7 overflow-hidden">
        <Image src="/images/megv1vhw-2uipje2.svg" alt="Logo 1" width={189} height={34} />
      </div>
      <div className="flex items-center py-7 overflow-hidden">
        <Image src="/images/megv1vhw-g81p5yu.svg" alt="Logo 2" width={189} height={34} />
      </div>
      <div className="flex items-center py-7 overflow-hidden">
        <Image src="/images/megv1vhw-8yk32pg.svg" alt="Logo 3" width={189} height={34} />
      </div>
      <div className="flex items-center py-7 overflow-hidden">
        <Image src="/images/megv1vhw-9ii3cry.svg" alt="Logo 4" width={189} height={34} />
      </div>
      <div className="flex items-center py-7 overflow-hidden">
        <Image src="/images/megv1vhw-bpjvtjl.svg" alt="Logo 5" width={189} height={34} />
      </div>
    </div>
  );
};

export default LogoSection;