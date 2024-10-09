"use client";

import { getCurrentTime } from "@/lib/utils";
import { ClockProps } from "@/types";
import { useEffect, useState } from "react";

const Clock = ({ variant, locale }: ClockProps) => {
  const [time, setTime] = useState(getCurrentTime(locale));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime(locale));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-4xl font-semibold text-white/70 text-center">
      {time.day}, {time.month} {time.date}
      {variant === "big" && <br />}
      <span className="text-8xl font-extrabold">
        {time.hour}:{time.minute.toString().padStart(2, "0")}
      </span>
    </p>
  );
};

export default Clock;
