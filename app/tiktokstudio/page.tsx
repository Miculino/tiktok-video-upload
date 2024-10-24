// Next
import Link from "next/link";

// Components
import KeyMetric from "./_components/KeyMetric";
import Card from "./_components/Card";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import LatestComments from "./_components/LatestComments";
import UserStats from "./_components/UserStats";
import ResourceRecommendation from "./_components/ResourceRecommendation";
import RecentPosts from "./_components/RecentPosts";

export default function Home() {
  return (
    <section className="w-full px-20 py-6 h-full">
      <div className="flex  gap-6 mx-auto">
        <div className="flex w-2/3 flex-col gap-6">
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
          <LatestComments />
        </div>
        <div className="flex flex-col w-1/3 gap-6">
          <UserStats />
          <ResourceRecommendation />
          <RecentPosts />
        </div>
      </div>
    </section>
  );
}
