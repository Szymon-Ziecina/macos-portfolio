"use client";

import { getCurrentTime } from "@/lib/utils";
import { ClockProps, timeProps } from "@/types";
import { useEffect, useState } from "react";

const Clock = ({ variant, locale }: ClockProps) => {
  const [time, setTime] = useState<timeProps | null>(null);

  useEffect(() => {
    // Set the initial time after the component mounts
    setTime(getCurrentTime(locale));

    const interval = setInterval(() => {
      setTime(getCurrentTime(locale));
    }, 1000);

    return () => clearInterval(interval);
  }, [locale]);

  if (!time) return <div className="w-20" />;

  return variant === "big" ? (
    <BigClock time={time} />
  ) : (
    <SmallClock time={time} />
  );
};

const BigClock = ({ time }: { time: timeProps }) => {
  return (
    <p className="text-4xl sf-rounded font-semibold text-white/70 text-center">
      {time.day}, {time.month} {time.date}
      <br />
      <span className="text-8xl font-extrabold">
        {time.hour}:{time.minute.toString().padStart(2, "0")}
      </span>
    </p>
  );
};

const SmallClock = ({ time }: { time: timeProps }) => {
  return (
    <p className="text-base sf-rounded text-black text-center">
      {time.day.slice(0, 3)}, {time.month.slice(0, 3)} {time.date} &nbsp;{" "}
      {time.hour}:{time.minute.toString().padStart(2, "0")}
    </p>
  );
};

export default Clock;
