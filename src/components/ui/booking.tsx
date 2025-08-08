// components/Booking.tsx
export default function Booking() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
      <iframe
        src="https://calendly.com/kdcanfield89@gmail.com"
        width="100%"
        height="700"
        frameBorder="0"
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
}
