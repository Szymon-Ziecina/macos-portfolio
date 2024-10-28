import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCurrentTime = (locale: "en" | "pl" = "en") => {
  const now = new Date();

  const days = {
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    pl: [
      "Niedziela",
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota",
    ],
  };

  const months = {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    pl: [
      "Stycznia",
      "Lutego",
      "Marca",
      "Kwietnia",
      "Maja",
      "Czerwca",
      "Lipca",
      "Sierpnia",
      "Września",
      "Października",
      "Listopada",
      "Grudnia",
    ],
  };

  const day = days[locale][now.getDay()];
  const month = months[locale][now.getMonth()];
  const date = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();

  return { day, month, date, hour, minute };
};

declare global {
  interface String {
    capitalize(): string;
  }
}

// Implement the method on String.prototype
String.prototype.capitalize = function (): string {
  return this.toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export {};
