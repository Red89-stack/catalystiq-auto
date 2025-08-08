"use client";
import { useState } from "react";

export default function BookingDate() {
  const [date, setDate] = useState<string>("");
  return (
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="bg-zinc-800 text-white p-2 rounded"
    />
  );
}
