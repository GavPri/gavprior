import './globals.css'
export const metadata = {
  title: "Gavin Prior | Full stack developer",
  description: "A Portfolio website for Gavin Prior",
};

import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoFlex.className}>
      <body>{children}</body>
    </html>
  );
}
