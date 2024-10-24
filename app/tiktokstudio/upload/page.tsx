// Components
import CapcutAd from "./_components/CapcutAd";
import VideoUpload from "./_components/VideoUpload";

export default function Upload() {
  return (
    <section className="px-72 py-6 h-full">
      <div className="flex flex-col gap-6">
        <VideoUpload />
        <CapcutAd />
      </div>
    </section>
  );
}
