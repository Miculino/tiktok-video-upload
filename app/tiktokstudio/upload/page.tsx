// Components
import CapcutAd from "./_components/CapcutAd";
import UploadStart from "./_components/UploadStart";

export default function Upload() {
  return (
    <section className="px-20 py-6 h-full">
      <div className="flex flex-col gap-6">
        <UploadStart />
        <CapcutAd />
      </div>
    </section>
  );
}
