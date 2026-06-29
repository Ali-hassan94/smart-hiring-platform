import CandidateSidebar from "@/components/dashboard/CandidateSidebar";
import CandidateTopbar from "@/components/dashboard/CandidateTopbar";

export default function CandidateLayout({
  children
}) {
  return (
    <div className="flex">
      <CandidateSidebar />

      <div className="flex-1">
        <CandidateTopbar />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}