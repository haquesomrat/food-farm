import { Inter, Open_Sans, Poppins, Rubik_Mono_One } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const rubik_mono = Rubik_Mono_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
