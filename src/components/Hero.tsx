import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* Mobile Layout */}
      <div className="flex flex-col items-center bg-white w-full mt-  overflow-hidden md:hidden">
        {/* Mobile Hero Content */}
        <div className="relative flex items-center w-full px-4 pt-6 pb-[60px]">
          <div className="flex flex-col flex-grow items-start gap-[30px]">
            <div className="flex flex-col items-start w-full gap-7">
              <div className="flex flex-col items-start w-full gap-6">
                <div className="flex flex-col items-start w-full gap-3">
                  <p className="text-[#535967] font-urbanist text-[40px] font-bold leading-[40px] tracking-[-1.6px] w-full">
                    Strategic Advice
                  </p>
                  <Image
                    src="/images/megv1vhw-qf19f4i.png"
                    alt="Hero image"
                    width={161}
                    height={60}
                    className="rounded-[48px] flex-shrink-0"
                  />
                  <p className="text-black font-urbanist text-[40px] font-bold leading-[40px] tracking-[-1.6px] w-full">
                    <span className="text-[#0d1321]">That&nbsp;</span>
                    <span className="text-[#204199]">Drives Results</span>
                  </p>
                </div>
                <div className="flex flex-col items-start w-full gap-3">
                  <p className="text-[#0d1321] font-urbanist text-base font-semibold leading-6 w-[343px]">
                    Expert Financial Guidance & Strategic Advocacy for Your Future
                  </p>
                  <p className="text-[#535967] font-urbanist text-sm leading-[22px] w-[343px]">
                    We provide tailored financial solutions and dedicated advocacy services. Empowering individuals and businesses to make confident decisions.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-xl bg-[#204199] px-4 py-3 w-[181px] h-12">
                <p className="text-white font-urbanist text-lg font-medium leading-[25px]">Contact</p>
                <Image
                  src="/images/megv1vhw-xry6gqf.svg"
                  alt="Phone icon"
                  width={18}
                  height={18}
                />
              </div>
            </div>
            <p className="text-[#b5bac5] font-playfair text-[40px] italic leading-[40px] tracking-[-1.6px] w-full">
              Advisory
            </p>
          </div>
          <Image
            src="/images/megv1vhw-a3dhdm1.png"
            alt="Vector decoration"
            width={100}
            height={99}
            className="absolute right-4 bottom-4 flex-shrink-0 rotate-180"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-start justify-between w-full mt-[107px] pr-10 pl-[120px]">
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
    </>
  );
};

export default Hero;