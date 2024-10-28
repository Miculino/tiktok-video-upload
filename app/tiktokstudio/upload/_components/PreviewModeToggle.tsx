import { PREVIEW_MODES } from "@/app/constants/previewModes";

export default function PreviewModeToggle() {
  return (
    <div className="flex p-1 rounded-lg bg-gray-200 items-center">
      {PREVIEW_MODES.map((preview_mode, index) => (
        <label key={index} htmlFor={preview_mode.value}>
          <div className="py-1 px-4 bg-white rounded-md">
            <span>{preview_mode.label}</span>
          </div>
          <input
            className="hidden"
            type="radio"
            name="preview-mode"
            id="feed-view"
          />
        </label>
      ))}
    </div>
  );
}
