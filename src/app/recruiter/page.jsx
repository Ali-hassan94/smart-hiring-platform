import RecruiterSidebar from "@/components/dashboard/RecruiterSidebar";

export default function RecruiterLayout({
  children,
}) {
  return (
    <div className="flex">
      <RecruiterSidebar />

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}