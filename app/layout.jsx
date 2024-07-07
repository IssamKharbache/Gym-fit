import { Oswald } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "GYM FIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
