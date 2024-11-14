import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

const stats = [
  {
    name: "Total Saved",
    stat: "71,897",
    previousStat: "70,946",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "Avg. Savings Rate",
    stat: "58.16%",
    previousStat: "56.14%",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "Rate of progress",
    stat: "24.57%",
    previousStat: "28.62%",
    change: "4.05%",
    changeType: "decrease",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="scale-[clamp(0.85,0.9vw,1)]">
      <dl className="mt-[clamp(0.75rem,1.5vw,1.25rem)] grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-md md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((item) => (
          <div
            key={item.name}
            className="px-[clamp(0.75rem,1.5vw,1.5rem)] py-[clamp(1rem,1.5vw,1.5rem)]"
          >
            <dt className="text-[clamp(0.75rem,1.5vw,1rem)] font-normal text-gray-900">
              {item.name}
            </dt>
            <dd className="mt-[clamp(0.2rem,0.75vw,0.5rem)] flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-[clamp(1rem,2vw,1.5rem)] font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-[clamp(0.65rem,1.25vw,0.875rem)] font-medium text-gray-500">
                  from {item.previousStat}
                </span>
              </div>

              <div
                className={classNames(
                  item.changeType === "increase"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800",
                  "inline-flex items-baseline rounded-full px-[clamp(0.4rem,1vw,0.75rem)] py-[clamp(0.1rem,0.3vw,0.25rem)] text-[clamp(0.65rem,1.25vw,0.875rem)] font-medium md:mt-2 lg:mt-0"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowUpIcon
                    aria-hidden="true"
                    className="-ml-1 mr-0.5 size-[clamp(0.875rem,1.25vw,1.25rem)] shrink-0 self-center text-green-500"
                  />
                ) : (
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="-ml-1 mr-0.5 size-[clamp(0.875rem,1.25vw,1.25rem)] shrink-0 self-center text-red-500"
                  />
                )}
                <span className="sr-only">
                  {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                  by{" "}
                </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
