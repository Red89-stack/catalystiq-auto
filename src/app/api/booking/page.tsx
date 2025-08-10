"use client";

import { useMemo, useState } from "react";
import BookingDatePicker from "@/components/ui/BookingDatePicker";

const TIMES = ["09:00","10:00","11:00","13:00","15:00","17:00"];
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export async function OPTIONS() {
  return new Response(null, { status: 204, headers: cors });
}

export async function POST(req: Request) {
  const body = await req.json();
  // ...do work...
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json", ...cors },
  });
}

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string | undefined>();

  const selectedStart = useMemo(() => {
    if (!date || !time) return undefined;
    const [h, m] = time.split(":").map(Number);
    const d = new Date(date);
    d.setHours(h, m, 0, 0);
    return d;
  }, [date, time]);

  return (
    <section className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-semibold">Book an appointment</h1>

      <div className="space-y-4">
        <label className="block text-sm opacity-80">Choose a date</label>
        <BookingDatePicker value={date} onChange={setDate} />
      </div>

      {date && (
        <div className="space-y-3">
          <label className="block text-sm opacity-80">
            Available times for {date.toDateString()}
          </label>
          <div className="grid grid-cols-3 gap-2">
            {TIMES.map((t) => (
              <button
                key={t}
                className={`rounded-md border px-3 py-2 hover:bg-zinc-800 ${
                  time === t ? "ring-2 ring-white" : ""
                }`}
                onClick={() => setTime(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        disabled={!selectedStart}
        className="mt-4 rounded-md bg-white/10 px-4 py-2 disabled:opacity-50"
        onClick={() => {
          if (!selectedStart) return;
          // TODO: save to Supabase here
          console.log("Book:", selectedStart.toISOString());
          alert(`Booked ${selectedStart.toString()}`);
        }}
      >
        {selectedStart ? "Confirm booking" : "Select date & time"}
      </button>
    </section>
  );
}


