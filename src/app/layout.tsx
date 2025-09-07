import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { AutoThemeSwitcher } from "@/app/theme";
import { cn } from "@/lib/utils";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["300", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const grotesque = Bricolage_Grotesque({
  weight: ["700"],
  variable: "--font-grotesque",
});

export const metadata: Metadata = {
  title: "AuraNow",
  description: "Real-time weather forecasts with a clean, responsive UI.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={cn(dmSans.variable, grotesque.variable, "antialiased")}>
        <AutoThemeSwitcher>{children}</AutoThemeSwitcher>
      </body>
    </html>
  );
};

export default RootLayout;
