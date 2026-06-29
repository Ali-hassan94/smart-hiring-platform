import PageTransition from "@/components/animations/PageTransition";
import { users } from "@/data/database";
import DataTable from "@/components/ui/DataTable";

export default function UsersPage() {
  const totalUsers = users.length;
  const recruiters = users.filter(
    (u) => u.role === "Recruiter"
  ).length;

  const candidates = users.filter(
    (u) => u.role === "Candidate"
  ).length;

  const admins = users.filter(
    (u) => u.role === "Admin"
  ).length;

  return (
    <PageTransition>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Platform Users
            </h1>

            <p className="text-gray-400 mt-2">
              Manage all candidates, recruiters and administrators.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search user..."
            className="
            w-full
            lg:w-80
            rounded-xl
            border
            border-cyan-500/20
            bg-white/5
            px-5
            py-3
            outline-none
            focus:border-cyan-400
            "
          />

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 p-6">
            <h3 className="text-gray-200">
              Total Users
            </h3>

            <p className="text-4xl font-bold mt-3">
              {totalUsers}
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-green-600 p-6">
            <h3 className="text-gray-200">
              Candidates
            </h3>

            <p className="text-4xl font-bold mt-3">
              {candidates}
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-violet-500 to-purple-700 p-6">
            <h3 className="text-gray-200">
              Recruiters
            </h3>

            <p className="text-4xl font-bold mt-3">
              {recruiters}
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-6">
            <h3 className="text-gray-200">
              Admins
            </h3>

            <p className="text-4xl font-bold mt-3">
              {admins}
            </p>
          </div>

        </div>

        {/* Mobile Cards */}

        <div className="grid md:hidden gap-5">

          {users.map((user) => (

            <div
              key={user.id}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-5
              "
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-bold text-lg">
                    {user.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {user.email}
                  </p>

                </div>

                <span
                  className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  ${
                    user.role === "Admin"
                      ? "bg-red-500/20 text-red-400"
                      : user.role === "Recruiter"
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "bg-green-500/20 text-green-400"
                  }
                  `}
                >
                  {user.role}
                </span>

              </div>

              <div className="flex gap-3 mt-5">

                <button
                  className="
                  flex-1
                  rounded-xl
                  bg-cyan-500
                  py-2
                  hover:bg-cyan-600
                  "
                >
                  Edit
                </button>

                <button
                  className="
                  flex-1
                  rounded-xl
                  bg-red-500
                  py-2
                  hover:bg-red-600
                  "
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Desktop Table */}

        <div
          className="
          hidden
          md:block
          overflow-x-auto
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          "
        >

          <table className="min-w-full">

            <thead className="bg-white/5">

              <tr>

                <th className="px-6 py-4 text-left">
                  ID
                </th>

                <th className="px-6 py-4 text-left">
                  Name
                </th>

                <th className="px-6 py-4 text-left">
                  Email
                </th>

                <th className="px-6 py-4 text-left">
                  Role
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user.id}
                  className="border-t border-white/10 hover:bg-white/5"
                >

                  <td className="px-6 py-5">
                    #{user.id}
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    {user.name}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {user.email}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      ${
                        user.role === "Admin"
                          ? "bg-red-500/20 text-red-400"
                          : user.role === "Recruiter"
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "bg-green-500/20 text-green-400"
                      }
                      `}
                    >
                      {user.role}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <span className="text-green-400">
                      Active
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      <button className="rounded-lg bg-cyan-500 px-4 py-2 hover:bg-cyan-600">
                        Edit
                      </button>

                      <button className="rounded-lg bg-red-500 px-4 py-2 hover:bg-red-600">
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Existing DataTable */}

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

      </div>
    </PageTransition>
  );
}