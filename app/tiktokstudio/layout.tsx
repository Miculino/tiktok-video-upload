"use client";

// Components
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

// React-Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <section className="flex pt-[62px]">
        <Sidebar />
        <main className="w-[calc(100%-240px)] ml-auto">{children}</main>
      </section>
    </QueryClientProvider>
  );
}
