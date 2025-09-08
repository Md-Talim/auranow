import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import Image from "next/image";
import { AutoThemeSwitcher } from "@/app/theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
        <div className="max-w-4xl mx-auto min-h-screen">
          <AutoThemeSwitcher>
            <AppBar />
            <main>{children}</main>
          </AutoThemeSwitcher>
        </div>
      </body>
    </html>
  );
};

const AppBar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-10">
      <Image src="/logo.svg" alt="AuraNow logo" width={128} height={32} />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-x-2 px-4 py-2 rounded-xl bg-[var(--neutral-800)]">
            <Image src="/icon-units.svg" alt="Units" width={16} height={16} />
            Units
            <Image
              src="/icon-dropdown.svg"
              alt="Open menu"
              width={12}
              height={12}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Switch to Imperial</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-xs text-neutral-400">
            Temperature
          </DropdownMenuLabel>
          <DropdownMenuItem>Celsius (C)</DropdownMenuItem>
          <DropdownMenuItem>Fahrenheit (F)</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default RootLayout;
