// React
import { ChangeEvent } from "react";

// Zustand
import { usePreviewModeStore } from "@/app/stores/previewModeStore";

// CLSX
import clsx from "clsx";

// Constants
import { PREVIEW_MODES } from "@/app/constants/previewModes";

export default function PreviewModeToggle() {
  const { switchPreviewMode, previewMode } = usePreviewModeStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.id) {
      switchPreviewMode(e.currentTarget.id as "feed" | "profile" | "web");
    }
  };

  return (
    <div className="flex p-1 rounded-lg bg-gray-200 items-center justify-between text-center">
      {PREVIEW_MODES.map((preview_mode, index) => (
        <label className="w-full" key={index} htmlFor={preview_mode.value}>
          <div
            className={clsx(
              "py-1 px-4 rounded-sm cursor-pointer transition-all duration-150",
              preview_mode.value === previewMode
                ? "bg-white"
                : "hover:bg-white/30"
            )}
          >
            <span>{preview_mode.label}</span>
          </div>
          <input
            onChange={handleChange}
            className="hidden"
            type="radio"
            name="preview-mode"
            id={preview_mode.value}
          />
        </label>
      ))}
    </div>
  );
}
