"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function BookingDatePicker({
  value,
  onChange,
  label = "Pick a date",
}: {
  value?: Date;
  onChange: (d: Date) => void;
  label?: string;
}) {
  const [date, setDate] = useState<Date | undefined>(value);

  return (
    <div className="flex items-center gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            {date ? date.toDateString() : label}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              if (d) {
                setDate(d);
                onChange(d);
              }
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

