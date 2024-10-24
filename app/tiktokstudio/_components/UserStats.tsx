// Components
import Image from "next/image";
import Card from "./Card";

export default function UserStats() {
  return (
    <Card className="bg-white flex flex-col gap-4">
      <div className="flex items-center gap-2 ">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src={"/Dinu.jpg"}
            width={48}
            height={48}
            alt=""
          />
        </div>

        <span className="text-black font-medium text-lg">@dinu_cu_taitei</span>
      </div>
      <div className="flex gap-20 text-black justify-between">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400">Following</p>
          <span className="text-lg font-semibold">2</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400">Followers</p>
          <span className="text-lg font-semibold">0</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400">Likes</p>
          <span className="text-lg font-semibold">2</span>
        </div>
      </div>
    </Card>
  );
}
