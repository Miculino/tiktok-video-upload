// Components
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <section className="flex bg-gray-100">
        <Sidebar />
        <main>{children}</main>
      </section>
    </>
  );
}
