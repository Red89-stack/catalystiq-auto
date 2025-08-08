"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function BookingPage() {
  const params = useSearchParams();
  const user = params.get("user") || "anonymous";
  const service = params.get("service") || "general";

  const [date, setDate] = useState<Date | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = async () => {
    if (!date) return;
    const response = await fetch("/api/book", {
      method: "POST",
      body: JSON.stringify({
        user,
        service,
        date: date.toISOString(),
      }),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Booking failed");
    }
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Book an Appointment</h1>
      <p className="mb-2">User: <strong>{user}</strong></p>
      <p className="mb-4">Service: <strong>{service}</strong></p>

      <Calendar
        onChange={(val) => setDate(val as Date)}
        value={date}
        className="rounded-lg p-2"
      />

      {date && (
        <div className="mt-4">
          <p>Selected Date: <strong>{date.toDateString()}</strong></p>
          <button
            onClick={handleBooking}
            className="mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </div>
      )}

      {submitted && (
        <p className="mt-4 text-green-400">✅ Appointment successfully booked!</p>
      )}
    </div>
  );
}
