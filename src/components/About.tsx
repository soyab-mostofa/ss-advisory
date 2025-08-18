import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-start w-full bg-[#f8f8f8] px-[120px] py-[100px] gap-[60px]">
      <div className="flex flex-col items-start w-full gap-[45px]">
        <div className="flex items-center w-full gap-[237px]">
          <div className="flex flex-col items-start gap-2">
            <p className="text-[#204199] font-urbanist text-[100px] font-bold leading-[100px] tracking-[-4px]">12+</p>
            <p className="text-[#0d1321] font-urbanist text-xl leading-7">Years of Experience</p>
          </div>
          <div className="flex flex-col items-start w-full gap-6">
            <div className="inline-flex items-center gap-2 mr-[605px] rounded-l-lg px-3 py-[6px] pr-[60px] bg-gradient-to-r from-[#2041991a] to-[#ffffff1a]">
              <div className="w-2 h-2 bg-[#204199] rounded-full"></div>
              <p className="text-[#041e3a] font-urbanist text-xl leading-7">ABOUT US</p>
            </div>
            <p className="text-black font-urbanist text-5xl font-medium leading-[58px] tracking-[-1.92px] w-[789px]">
              <span className="text-[#0d1321]">Dedicated to&nbsp;</span>
              <span className="text-[#b5bac5]">empowering clients through strategic financial guidance and reliable, results-focused advocacy.</span>
            </p>
          </div>
        </div>
        <Image
          src="/images/megv1vhw-9xzmxbt.png"
          alt="Main content image"
          width={1200}
          height={460}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;