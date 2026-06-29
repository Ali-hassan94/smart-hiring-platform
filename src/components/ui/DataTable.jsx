"use client";

import { motion } from "framer-motion";

export default function DataTable({
  columns,
  data,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      "
    >
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="
                p-5
                text-left
                "
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="
              border-t
              border-white/10
              "
            >
              {Object.values(row).map(
                (value, i) => (
                  <td
                    key={i}
                    className="p-5"
                  >
                    {value}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}