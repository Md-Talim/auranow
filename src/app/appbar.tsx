import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const AppBar = () => {
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
