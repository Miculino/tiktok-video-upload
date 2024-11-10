import React from "react";

export default function TimelineRuler() {
  return (
    <div className="w-[896px] absolute top-0 flex">
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className="bg-timeline-divider bg-repeat-x bg-[position:-1px_top] bg-[length:20%_6px] w-[calc(1792px/7)] p-0"
        >
          <div className="text-[10px] text-gray-300 shadow-line px-1 pt-3">
            00:00:{(25 % 7) * index}
          </div>
        </div>
      ))}
    </div>
  );
}
