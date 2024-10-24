// Next
import Link from "next/link";
import Image from "next/image";

// Components
import Card from "./Card";

// Icons
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";

function LatestCommentsEmptyState() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center text-black pb-6">
      <Image src={"/EmptyComments.svg"} width={137} height={80} alt="" />
      <h3 className="text-lg font-semibold">No comments yet</h3>
      <p className="text-sm">Your latest comments will appear here.</p>
    </div>
  );
}

export default function LatestComments() {
  return (
    <Card className="bg-white flex flex-col gap-6">
      <div className="flex text-black justify-between">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-xl">Latest comments</h2>
          {/* <p className="text-sm text-gray-700">Last 7 days</p> */}
        </div>
        <Link
          href={"/tiktokstudio/analytics"}
          className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-500 duration-300"
        >
          <span>Show all</span>
          <ArrowRightIcon />
        </Link>
      </div>
      <div>
        <LatestCommentsEmptyState />
      </div>
    </Card>
  );
}
