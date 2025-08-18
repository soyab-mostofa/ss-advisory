import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-start justify-between w-full mt-[107px] pr-10 pl-[120px]">
      <div className="flex flex-col items-start gap-12">
        <div className="flex flex-col items-start w-full gap-6">
          <p className="text-[#535967] font-urbanist text-[100px] font-bold leading-[100px] tracking-[-4px]">Strategic Advice</p>
          <div className="flex items-center w-full gap-8">
            <Image
              src="/images/megv1vhw-qf19f4i.png"
              alt="Hero image"
              width={200}
              height={80}
              className="rounded-[100px]"
            />
            <p className="text-black font-urbanist text-[100px] font-bold leading-[100px] tracking-[-4px]">
              <span className="text-[#0d1321]">That&nbsp;</span>
              <span className="text-[#204199]">Drives Results</span>
            </p>
          </div>
        </div>
        <div className="inline-flex items-center w-full gap-[60px] mr-[92px]">
          <p className="text-[#b5bac5] font-playfair text-[100px] italic leading-[100px] tracking-[-4px]">Advisory</p>
          <div className="inline-flex flex-col items-start gap-4">
            <p className="text-[#0d1321] font-urbanist text-lg font-semibold leading-[25px]">Expert Financial Guidance & Strategic Advocacy for Your Future</p>
            <p className="text-[#535967] font-urbanist text-base leading-6 w-[511px]">
              We provide tailored financial solutions and dedicated advocacy services.<br />
              Empowering individuals and businesses to make confident decisions.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/images/megv1vhw-a3dhdm1.png"
        alt="Vector decoration"
        width={212}
        height={211}
        className="mt-[247px] rotate-180"
      />
    </div>
  );
};

export default Hero;