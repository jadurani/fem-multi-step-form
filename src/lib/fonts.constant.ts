import { Ubuntu } from "next/font/google";

export const AppFont = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--app-font"
});