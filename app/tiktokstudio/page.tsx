// Next
import Link from "next/link";

// Components
import KeyMetric from "./_components/KeyMetric";
import Card from "./_components/Card";
import ArrowRightIcon from "../icons/ArrowRightIcon";

export default function Home() {
  return (
    <section className="px-72 py-6 h-full">
      <Card className="bg-white flex flex-col gap-6">
        <div className="flex text-black justify-between">
          <div className="flex items-center gap-4">
            <h2 className="font-semibold text-xl">Key metrics</h2>
            <p className="text-sm text-gray-700">Last 7 days</p>
          </div>
          <Link
            href={"/tiktokstudio/analytics"}
            className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-500 duration-300"
          >
            <span>Show all</span>
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <KeyMetric />
          <KeyMetric />
          <KeyMetric />
          <KeyMetric />
          <KeyMetric />
          <KeyMetric />
        </div>
      </Card>
    </section>
  );
}
