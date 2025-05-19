import "./globals.css";
import { Share_Tech_Mono} from "next/font/google";

const shareTech = Share_Tech_Mono({
    subsets: ["latin"],
    weight: ["400"]
})

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
