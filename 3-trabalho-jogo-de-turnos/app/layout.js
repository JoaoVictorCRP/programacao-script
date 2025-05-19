import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Share_Tech_Mono} from "next/font/google";

const shareTech = Share_Tech_Mono({
    subsets: ["latin"],
    weight: ["400"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Herói vs. Vilão",
  description: "Trabalho de Programação Script - RPG de turno",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${shareTech.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
