import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './navBar';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className={inter.className}>
        <main>{children}</main>
      </div>
    </>
  );
}
