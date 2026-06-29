import AdminSidebar from "@/components/dashboard/AdminSidebar";
import CandidateSidebar from "../../components/dashboard/CandidateSidebar";
import CandidateTopbar from "../../components/dashboard/CandidateTopbar";
import RecruiterSidebar from "../../components/dashboard/RecruiterSidebar";
import StatCard from "../../components/dashboard/StatCard";
import Timeline from "../../components/dashboard/Timeline";

export default function AdminLayout({
  children,
}) {
  return (
    <div className="flex">
      <AdminSidebar />
<CandidateSidebar/>
<CandidateTopbar/>
<RecruiterSidebar/>
<StatCard/>
<Timeline/>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}