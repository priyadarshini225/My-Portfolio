import { Quicksand, Poppins } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"], weights: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Priyadarshini's Portfolio",
  description: "A showcase of my work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

