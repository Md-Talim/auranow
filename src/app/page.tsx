import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const HomePage = () => {
  // mock data for now
  const hourlyForecast = [
    { time: "3 PM", icon: "sunny", temp: 20 },
    { time: "4 PM", icon: "sunny", temp: 21 },
    { time: "5 PM", icon: "partly-cloudy", temp: 19 },
    { time: "6 PM", icon: "rain", temp: 18 },
    { time: "7 PM", icon: "sunny", temp: 20 },
    { time: "8 PM", icon: "storm", temp: 17 },
  ];

  const dailyForcast = [
    { day: "Monday", icon: "sunny", high: 25, low: 15 },
    { day: "Tuesday", icon: "partly-cloudy", high: 22, low: 14 },
    { day: "Wednesday", icon: "rain", high: 20, low: 13 },
    { day: "Thursday", icon: "storm", high: 18, low: 12 },
    { day: "Friday", icon: "sunny", high: 24, low: 16 },
    { day: "Saturday", icon: "cloudy", high: 21, low: 14 },
    { day: "Sunday", icon: "sunny", high: 26, low: 17 },
  ];

  return (
    <div>
      <div className="my-12 lg:my-16">
        <h1 className="text-center font-grotesque text-[52px] leading-[120%]">
          How's the sky looking today?
        </h1>
      </div>

      <div className="space-y-12">
        <SearchForm />

        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <section className="w-full space-y-12">
            {/* Today's Weather */}
            <div className="w-full space-y-8">
              <div
                className={cn(
                  "flex flex-col md:flex-row items-center gap-4 justify-between px-6 py-10",
                  "bg-today-mobile md:bg-today-desktop lg:min-h-[286px] rounded-[20px]",
                )}
              >
                <div className="space-y-3 text-center md:text-left">
                  <p className="text-[28px] font-bold">Berlin, Germany</p>
                  <p className="text-lg font-medium">Tuesday, Aug 5, 2025</p>
                </div>

                <div className="flex items-center">
                  {/* show image */}
                  <Image
                    src="/icon-sunny.webp"
                    alt="sunny"
                    height={120}
                    width={120}
                  />
                  <p className="text-8xl italic font-semibold tracking-[-2px]">
                    20°
                  </p>
                </div>
              </div>

              <div className="flex gap-5 flex-wrap">
                <div className="space-y-6 flex-1 p-5 border border-neutral-600 bg-neutral-700 rounded-lg">
                  <p className="text-neutral-200 text-lg">Feels like</p>
                  <p className="text-[32px]">18°</p>
                </div>
                <div className="space-y-6 flex-1 p-5 border border-neutral-600 bg-neutral-700 rounded-lg">
                  <p className="text-neutral-200 text-lg">Humidity</p>
                  <p className="text-[32px]">46%</p>
                </div>
                <div className="space-y-6 flex-1 p-5 border border-neutral-600 bg-neutral-700 rounded-lg">
                  <p className="text-neutral-200 text-lg">Wind</p>
                  <p className="text-[32px]">14 km/h</p>
                </div>
                <div className="space-y-6 flex-1 p-5 border border-neutral-600 bg-neutral-700 rounded-lg">
                  <p className="text-neutral-200 text-lg">Precipitation</p>
                  <p className="text-[32px]">0 mm</p>
                </div>
              </div>
            </div>

            {/* Daily Forcast */}
            <div>
              <h2 className="text-xl">Daily forecast</h2>

              <div className="flex gap-4">
                {dailyForcast.map((day) => (
                  <div
                    key={day.day}
                    className="mt-5 flex-wrap flex-1 flex flex-col items-center gap-4 justify-center py-4 border border-neutral-600 bg-neutral-700 rounded-[20px]"
                  >
                    <p>{day.day}</p>
                    <Image
                      src={`/icon-${day.icon}.webp`}
                      alt={day.icon}
                      height={40}
                      width={40}
                    />
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-medium">{day.high}°</p>
                      <p className="text-lg text-neutral-400">{day.low}°</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hourly Forecast */}
          <section className="py-5 px-4 md:p-6 bg-neutral-800 rounded-[20px] w-full lg:max-w-[384px] space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl">Hourly forecast</h2>
              <Select defaultValue="tuesday">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monday">Monday</SelectItem>
                  <SelectItem value="tuesday">Tuesday</SelectItem>
                  <SelectItem value="wednesday">Wednesday</SelectItem>
                  <SelectItem value="thursday">Thursday</SelectItem>
                  <SelectItem value="friday">Friday</SelectItem>
                  <SelectItem value="saturday">Saturday</SelectItem>
                  <SelectItem value="sunday">Sunday</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <ul className="space-y-4">
              {hourlyForecast.map((hour) => (
                <li
                  key={hour.time}
                  className="flex items-center justify-between px-3 py-[10px] border border-neutral-600 bg-neutral-700 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={`/icon-${hour.icon}.webp`}
                      alt={hour.icon}
                      height={40}
                      width={40}
                    />
                    <p className="text-lg font-medium">{hour.time}</p>
                  </div>
                  <p className="text-base">{hour.temp}°</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

const SearchForm = () => {
  return (
    <form className="flex flex-col md:flex-row gap-2 items-center justify-center">
      <input
        placeholder="Search for a place..."
        className={cn(
          "placeholder:text-muted-foreground bg-neutral-800 selection:bg-primary selection:text-primary-foreground border-input flex w-full md:max-w-lg min-w-0 rounded-md border px-6 py-4 text-xl shadow-xs transition-[color,box-shadow] outline-none disabled:opacity-50",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        )}
      />
      <Button
        type="submit"
        size="lg"
        className="py-4 px-6 h-auto text-xl max-sm:w-full"
      >
        Search
      </Button>
    </form>
  );
};

export default HomePage;
