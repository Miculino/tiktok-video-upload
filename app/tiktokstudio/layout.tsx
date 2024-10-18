// Components
import Sidebar from "./_components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-[62px] w-full bg-red-200">
        <p>Navbar</p>
      </div>
      <section className="flex bg-white">
        <Sidebar />
        <main>{children}</main>
      </section>
    </>
  );
}
