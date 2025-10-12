import Image from "next/image";
import TextRevealAnimation from "./TextRevealAnimation";
import ImageRevealAnimation from "./ImageRevealAnimation";
import { SectionLabel } from "./ui/SectionLabel";
import Counter from "./Counter";
import { clientLogos } from "../data/clients";
import InfiniteScroll from "./ui/InfiniteScroll";

const About = () => {
  return (
    <>
      {/* Mobile Layout */}
      <div className="flex flex-col items-start w-full bg-[#f8f8f8] px-4 py-12 gap-6 md:hidden">
        <div className="flex flex-col items-start w-full gap-7">
          <div className="flex flex-col items-start w-full gap-4">
            <SectionLabel label="ABOUT US" showLine={false} />
            <div className="flex flex-col items-start w-full gap-3">
              <div className="flex flex-col items-start w-full gap-1">
                <p className="text-[#204199] font-urbanist text-5xl font-bold leading-[48px] tracking-[-1.92px]">
                  <Counter target={12} suffix="+" className="" />
                </p>
                <p className="text-[#0d1321] font-urbanist text-base leading-6">
                  Years of Experience
                </p>
              </div>
              <TextRevealAnimation
                text="Specialized in comprehensive accounting, tax planning, and compliance services that drive business growth and financial stability."
                className="text-black font-urbanist text-2xl font-medium leading-[29px] tracking-[-0.96px] w-full"
                highlightStart="Specialized in"
                highlightEnd="financial stability."
              />
            </div>
          </div>
          <ImageRevealAnimation
            src="/images/megv1vhw-9xzmxbt.png"
            alt="Main content image"
            aspectRatio="343 / 229"
            className="w-full h-auto"
          />
        </div>
        <div
          className="flex flex-col items-start w-full gap-1"
          aria-label="Client logos"
        >
          <InfiniteScroll speed={25} direction="left" className="py-1">
            <div className="flex items-center gap-6">
              {clientLogos.map((logo, idx) => {
                const width = Math.min(120, logo.width); // slightly smaller on mobile
                const height = Math.max(
                  16,
                  Math.round((width / logo.width) * logo.height)
                );
                return (
                  <div
                    key={`${logo.src}-${idx}`}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={width}
                      height={height}
                      className="object-contain opacity-90"
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col items-start w-full bg-[#f8f8f8] px-[120px] py-[100px] gap-[60px]">
        <div className="flex flex-col items-start w-full gap-[45px]">
          <div className="flex items-center w-full gap-[237px]">
            <div className="flex flex-col items-start gap-2">
              <p className="text-[#204199] font-urbanist text-[100px] font-bold leading-[100px] tracking-[-4px]">
                <Counter target={12} suffix="+" className="" />
              </p>
              <p className="text-[#0d1321] font-urbanist text-xl leading-7">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col items-start w-full gap-6">
              <SectionLabel
                label="ABOUT US"
                showLine={false}
                className="mr-[605px]"
              />
              <TextRevealAnimation
                text="Specialized in comprehensive accounting, tax planning, and compliance services that drive business growth and financial stability."
                className="text-black font-urbanist text-5xl font-medium leading-[58px] tracking-[-1.92px] w-[789px] md:w-full"
                highlightStart="Specialized in"
                highlightEnd="financial stability."
              />
            </div>
          </div>
          <ImageRevealAnimation
            src="/images/megv1vhw-9xzmxbt.png"
            alt="Main content image"
            aspectRatio="1200 / 460"
            className="w-full h-auto max-h-[460px]"
          />
        </div>
      </div>
    </>
  );
};

export default About;
