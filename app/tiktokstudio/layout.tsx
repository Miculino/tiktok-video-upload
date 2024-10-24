// Components
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <section className="flex pt-[62px]">
        <Sidebar />
        <main className="w-[calc(100%-240px)] ml-auto">{children}</main>
      </section>
    </>
  );
}
