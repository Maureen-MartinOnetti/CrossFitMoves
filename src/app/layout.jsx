import "./globals.css";
import localFont from "next/font/local";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const customFont = localFont({
  src: [
    {
      path: "../fonts/CrossfitDemo-Black.otf",
      weight: "900",
      style: "black",
    },
    {
      path: "../fonts/CrossfitDemo-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/CrossfitDemo-Demi.otf",
      weight: "600",
      style: "black",
    },
    {
      path: "../fonts/CrossfitDemo-Hairline.otf",
      weight: "100",
      style: "hairline",
    },
    {
      path: "../fonts/CrossfitDemo-Heavy.otf",
      weight: "900",
      style: "heavy",
    },
    {
      path: "../fonts/CrossfitDemo-HeavyItalic.otf",
      weight: "900",
      style: "heavyItalic",
    },
    {
      path: "../fonts/CrossfitDemo-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/CrossfitDemo-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/CrossfitDemo-Thin.otf",
      weight: "100",
      style: "thin",
    },
  ],
});

export const metadata = {
  title: "Crossfit",
  description: "Mais c'est quoi ça?!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={cn(customFont.className, "light")}>
      <body className="w-full flex flex-col min-h-screen items-stretch justify-start">
        <main className="w-full flex-1 mx-auto flex flex-col min-h-full">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
