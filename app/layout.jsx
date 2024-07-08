import { Oswald } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "FIT GYM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
