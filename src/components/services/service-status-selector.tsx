"use client";

import { useState } from "react";

const statuses = [
  "Draft",
  "Pending",
  "In Progress",
  "Waiting Parts",
  "Completed",
  "Invoiced",
  "Paid",
];

export function ServiceStatusSelector() {
  const [status, setStatus] = useState("In Progress");

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <label className="text-sm font-medium text-slate-700">
        Statusi
      </label>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3"
      >
        {statuses.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}