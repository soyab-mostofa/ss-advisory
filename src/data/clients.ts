export interface ClientLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Sourced from Figma design: About Us → Logo Container
// All logos now served from public/images/home/logos/
export const clientLogos: ClientLogo[] = [
  {
    src: "/images/home/logos/jamroll.svg",
    alt: "Jamroll",
    width: 177,
    height: 27,
  },
  {
    src: "/images/home/logos/cha-n-chill.svg",
    alt: "Cha N Chill",
    width: 89,
    height: 80,
  },
  {
    src: "/images/home/logos/client-logo-3.svg",
    alt: "Client logo",
    width: 130,
    height: 28,
  },
  {
    src: "/images/home/logos/zeezpay.svg",
    alt: "ZEEZpay",
    width: 176,
    height: 52,
  },
  {
    src: "/images/home/logos/inkam.svg",
    alt: "Inkam",
    width: 123,
    height: 32,
  },
  {
    src: "/images/home/logos/client-logo-6.svg",
    alt: "Client logo 6",
    width: 143,
    height: 43,
  },
];
