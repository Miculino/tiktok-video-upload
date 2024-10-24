// Components
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import Link from "next/link";
import Card from "./Card";
import Image from "next/image";

export default function ResourceRecommendation() {
  return (
    <Card className="bg-white">
      <div className="flex text-black justify-between">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-xl">Knowledge for you</h2>
        </div>
        <Link
          href={"/tiktokstudio/analytics"}
          className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-500 duration-300"
        >
          <ArrowRightIcon />
        </Link>
      </div>
      <div className="text-black flex flex-col gap-4 mt-4">
        <div className="flex gap-2">
          <div className="w-full">
            <Image
              className="rounded-md"
              src={"/Personalize_Account.jpeg"}
              width={97}
              height={97}
              alt=""
            />
          </div>
          <div className="truncate">
            <h3 className="truncate text-base font-semibold">
              How to personalize your TikTok profile
            </h3>
            <p className="truncate text-sm">
              Once you&apos;ve set up your TikTok account, the next step is to
              personalize your profile. There are plen
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-full">
            <Image
              className="rounded-md"
              src={"/In-App_Editing.jpeg"}
              width={97}
              height={97}
              alt=""
            />
          </div>

          <div className="truncate">
            <h3 className="truncate text-base font-semibold">
              Editing In-App like a Pro
            </h3>
            <p className="truncate text-sm">
              Creative editing can add a whole new dimension to your videos.
              Fortunately, TikTok has a variety of
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
