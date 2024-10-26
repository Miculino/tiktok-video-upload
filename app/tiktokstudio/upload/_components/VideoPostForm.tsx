"use client";

// Next
import Image from "next/image";

// Components
import Button from "../../_components/Button";
import Card from "../../_components/Card";
import FormField from "./FormField";
import TextareaField from "./TextareaField";

// Zustand
// import { useVideoUploadStore } from "@/app/stores/videoUploadStore";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Zod Resolver
import { zodResolver } from "@hookform/resolvers/zod";

// Zod
import * as zod from "zod";

// React Select
import Select, { CSSObjectWithLabel, StylesConfig } from "react-select";

// Form Schema
const formSchema = zod.object({
  description: zod.string().max(4000, "Maximum limit of 4000 reached"),
  privacy: zod.enum(["everyone", "friends", "only-you"]),
});

type OptionType = {
  value: string;
  label: string;
};

const selectStyles: StylesConfig<OptionType, false> = {
  option: (provided: CSSObjectWithLabel, state) => ({
    ...provided,
    transition: "all .4s ease-in-out",
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "#e5e7eb"
      : state.isFocused
      ? "#f3f4f6"
      : undefined,
    color: "#000",
  }),
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    minWidth: "fit-content",
    maxWidth: "200px",
  }),
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    minWidth: "fit-content",
    maxWidth: "200px",
    padding: "10px",
  }),
  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    border: "none",
  }),
};

type FormData = zod.infer<typeof formSchema>;

const options = [
  { value: "everyone", label: "Everyone" },
  { value: "friends", label: "Friends" },
  { value: "only-you", label: "Only You" },
];

export default function VideoPostForm() {
  // const { video_file } = useVideoUploadStore();

  const { register, handleSubmit, control, watch } = useForm<FormData>({
    defaultValues: {
      description: "",
      privacy: "everyone",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <Card className="bg-white px-0 py-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Video Description */}
        <div className="p-6 flex flex-col gap-6">
          <FormField label="Description">
            <TextareaField
              fieldName="description"
              register={register}
              watch={watch}
            />
          </FormField>
          {/* Video Thumbnail */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-black">Cover</label>
            <div className="">
              <div className="bg-gray-200 w-40 h-52 grid place-content-center rounded-lg overflow-hidden hover:shadow-sm transition-all duration-300 border border-gray-300">
                <Image
                  className="opacity-30"
                  src="/ImagePlaceholder.svg"
                  width={48}
                  height={48}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Video Privacy */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-black">
              Who can watch this video
            </label>
            <div className="">
              <Controller
                control={control}
                name="privacy"
                render={({ field: { onChange, value, ref } }) => (
                  <Select
                    components={{ IndicatorSeparator: () => null }}
                    ref={ref}
                    styles={selectStyles}
                    value={options.filter((c) => value?.includes(c.value))}
                    onChange={(val) => onChange(val?.value)}
                    options={options}
                  />
                )}
              />
            </div>
          </div>
          {/* Post Time */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-black">
              When to post
            </label>
            <div className="text-black flex items-center gap-4">
              <div>
                <label className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full  bg-white border-8 p-[3px] border-primary">
                    <input type="radio" className="hidden" />
                  </div>

                  <span>Now</span>
                </label>
              </div>
              <div>
                <label className="flex gap-2">
                  <div className="w-5 h-5 rounded-full border border-gray-300">
                    <input type="radio" className="hidden" />
                  </div>
                  <span>Schedule</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <Button className="py-3 px-10" type="submit">
              Post
            </Button>
            <Button className="py-3 px-7" type="submit" intent="secondary">
              Discard
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
}
