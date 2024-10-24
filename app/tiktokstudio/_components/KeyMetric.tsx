import Card from "./Card";

export default function KeyMetric() {
  return (
    <Card className="flex flex-col gap-2 bg-gray-100">
      <p className="font-medium text-gray-400">Video views</p>
      <span className="font-semibold text-2xl text-black">0</span>
      <div className="text-gray-500 font-normal text-sm">
        <span>+0 (--)</span> vs. <span>Oct 9 - Oct 15</span>
      </div>
    </Card>
  );
}
