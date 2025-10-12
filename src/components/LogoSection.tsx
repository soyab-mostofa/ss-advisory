import Image from "next/image";
import { clientLogos } from "../data/clients";

const LogoSection = () => {
  return (
    <section
      aria-label="Client logos"
      className="w-full hidden md:flex bg-[#f8f8f8] px-[120px] pb-[100px]"
    >
      <ul className="flex items-center gap-16 w-full" role="list">
        {clientLogos.map((logo, idx) => (
          <li
            key={`${logo.src}-${idx}`}
            className="flex items-center py-7 overflow-hidden"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LogoSection;
