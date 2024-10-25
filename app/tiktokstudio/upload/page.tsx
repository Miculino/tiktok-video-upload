// Components
import CapcutAd from "./_components/CapcutAd";
import UploadStart from "./_components/UploadStart";
import VideoPostForm from "./_components/VideoPostForm";

export default function Upload() {
  return (
    <section className="px-20 py-6 h-full">
      <div className="flex flex-col gap-6">
        <UploadStart />
        {/* <VideoPostForm /> */}
        {/* <CapcutAd /> */}
      </div>
    </section>
  );
}
