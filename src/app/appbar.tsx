import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AppBar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-10">
      <Link href="/">
        <Image src="/logo.svg" alt="AuraNow logo" width={128} height={32} />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            className="flex gap-x-2 bg-popover rounded-xl"
          >
            <Image src="/icon-units.svg" alt="Units" width={16} height={16} />
            Units
            <Image
              src="/icon-dropdown.svg"
              alt="Dropdown"
              width={16}
              height={16}
            />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-[200px] p-4 space-y-4">
          <div>
            <p className="text-sm font-medium text-neutral-300 mb-1">
              Temperature
            </p>
            <Select defaultValue="celsius">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="celsius">Celsius (°C)</SelectItem>
                <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-sm font-medium text-neutral-300 mb-1">
              Wind Speed
            </p>
            <Select defaultValue="kmh">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kmh">Kilometers per hour (km/h)</SelectItem>
                <SelectItem value="mph">Miles per hour (mph)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-sm font-medium text-neutral-300 mb-1">
              Precipitation
            </p>
            <Select defaultValue="mm">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mm">Millimeters (mm)</SelectItem>
                <SelectItem value="in">Inches (in)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
