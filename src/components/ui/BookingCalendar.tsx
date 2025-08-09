"use client";
import { useState } from "react";
import Calendar from "react-calendar";

export default function BookingCalendar() {
  const [value, setValue] = useState<Date | Date[]>(new Date());
  return (
    <div className="max-w-md mx-auto">
      <Calendar onChange={setValue} value={value} />
      <div className="mt-4 text-sm text-zinc-300">
        Selected: {Array.isArray(value) ? value.map(v => v.toDateString()).join(" – ") : value.toDateString()}
      </div>
    </div>
  );
}
