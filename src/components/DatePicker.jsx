import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/20/solid";
import Calendar from "./ui/calendar";
import { format } from "date-fns";
import { useStore } from "../store";

export default function CurrentDateRange() {
  const { selectedDateRange, setSelectedDateRange } = useStore();

  return (
    <div className="w-full lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Overview
        </h2>

        <Popover className="relative z-60 ml-[2px]">
          <PopoverButton
            id="date"
            type="button"
            className="mt-1 rounded-full bg-white ml-[-10px] px-2.5 py-1  flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 hover:ring-1 ring-inset ring-gray-300 hover:shadow-sm"
          >
            <div className="flex items-center text-[clamp(0.75rem,1.5vw,1rem)] text-gray-500">
              <CalendarIcon
                aria-hidden="true"
                className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
              />
              {selectedDateRange?.from ? (
                selectedDateRange.to ? (
                  selectedDateRange.from.getTime() ===
                  selectedDateRange.to.getTime() ? (
                    format(selectedDateRange.from, "LLL dd, y")
                  ) : (
                    <>
                      {format(selectedDateRange.from, "LLL dd, y")} -{" "}
                      {format(selectedDateRange.to, "LLL dd, y")}
                    </>
                  )
                ) : (
                  format(selectedDateRange.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </div>
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom start"
            className="bg-white w-auto p-0 mt-1 ml-[9px] shadow-xl rounded-lg transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="hidden md:block">
              <Calendar
                mode="range"
                defaultMonth={selectedDateRange?.from}
                selected={selectedDateRange}
                onSelect={setSelectedDateRange}
                className="border rounded-lg"
                initialFocus
                required
                numberOfMonths={2}
              />
            </div>
            <div className="md:hidden">
              <Calendar
                mode="range"
                defaultMonth={selectedDateRange?.from}
                selected={selectedDateRange}
                onSelect={setSelectedDateRange}
                className="border rounded-lg"
                initialFocus
                required
                numberOfMonths={1}
              />
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}
