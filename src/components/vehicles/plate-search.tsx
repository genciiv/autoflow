"use client";

import { useState } from "react";

export function PlateSearch() {
  const [plate, setPlate] = useState("");

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <label className="text-sm font-medium text-slate-700">
        Kërko sipas targës
      </label>

      <div className="mt-3 flex gap-3">
        <input
          value={plate}
          onChange={(e) =>
            setPlate(e.target.value.toUpperCase())
          }
          placeholder="AA123BB"
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3"
        />

        <button
          className="rounded-xl bg-slate-950 px-5 py-3 text-white"
        >
          Kërko
        </button>
      </div>
    </div>
  );
}