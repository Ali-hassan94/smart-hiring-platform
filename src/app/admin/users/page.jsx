import PageTransition from "@/components/animations/PageTransition";
// import { users } from "@/data/users";
import DataTable from "@/components/ui/DataTable";
import { users } from "@/data/database";
export default function UsersPage() {
  return (
    <PageTransition>
      <div className="rounded-3xl border border-white/10 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Platform Users
        </h1>

        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Role</th>
              <th className="text-left">Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        
        </table>
       
      </div>
       <DataTable
        columns={[
          "ID",
          "Name",
          "Role",
          "Status",
          "Email",
        ]}
        data={users}
      />
    </PageTransition>
  );
}