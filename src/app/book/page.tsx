import BookingCalendar from "../../components/ui/BookingCalendar";

export const metadata = {
  title: "Book — CatalystIQ",
};

export default function BookPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Book a Consultation</h1>
      <BookingCalendar />
    </div>
  );
}
