// Components
import Sidebar from "./_components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
