// Next
import Link from "next/link";

// Components
import Card from "./Card";

// Icons
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";

export default function RecentPosts() {
  return (
    <Card className="h-full bg-white">
      <div className="flex text-black justify-between">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-xl">Recent Posts</h2>
        </div>
        <Link
          href={"/tiktokstudio/analytics"}
          className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-500 duration-300"
        >
          <ArrowRightIcon />
        </Link>
      </div>
    </Card>
  );
}
