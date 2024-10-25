// React Hook Form
import { UseFormRegister, UseFormWatch } from "react-hook-form";

// CLSX
import clsx from "clsx";

// Constants
import { VIDEO_POST_DESCRIPTION_CHAR_LIMIT } from "@/app/constants/videoPostFormLimits";

type FormData = {
  description: string;
  privacy: "everyone" | "friends" | "only-you";
};

interface TextareaFieldProps {
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  fieldName: "description";
}

export default function TextareaField({
  register,
  watch,
  fieldName,
}: TextareaFieldProps) {
  const description = watch(fieldName);

  const isDescriptionLimitReached =
    description.length === VIDEO_POST_DESCRIPTION_CHAR_LIMIT;

  return (
    <div className="relative flex flex-col rounded-lg overflow-hidden bg-gray-200">
      <textarea
        {...register(fieldName)}
        maxLength={4000}
        className="bg-inherit w-full resize-none focus:outline-none text-black p-4"
      ></textarea>
      <div className="flex items-center justify-between px-4 py-2 pb-4">
        <div className="text-gray-500 flex items-center gap-4">
          <button>
            <span className="font-semibold text-sm"># Hashtags</span>
          </button>
          <button>
            <span className="font-semibold text-sm">@ Mention</span>
          </button>
        </div>
        <div
          className={clsx(
            "text-sm",
            isDescriptionLimitReached ? "text-red-400" : "text-gray-400"
          )}
        >
          {description.length} / {VIDEO_POST_DESCRIPTION_CHAR_LIMIT}
        </div>
      </div>
    </div>
  );
}
