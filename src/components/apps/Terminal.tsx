"use client";

import { useRouter } from "@/i18n/routing";
import { Command } from "@/types";
import { useTranslations } from "next-intl";
import React, { useRef, useState } from "react";

const Terminal = () => {
  const commandRef = useRef<HTMLInputElement>(null);
  const [commands, setCommands] = useState<Command[]>([]);
  const router = useRouter();
  const t = useTranslations("Terminal");

  const handleCommand = (input: string): string => {
    switch (input) {
      case "help":
        return t("help");
      case "skills":
        return t("skills");
      case "projects":
        return t("projects");
      default:
        return t("notFound");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (commandRef.current) {
      const input = commandRef.current.value.trim();
      if (input === "clear") {
        setCommands([]);
        commandRef.current.value = "";
        return;
      }
      if (input.startsWith("open")) {
        const appName = input.split(" ")[1];
        if (appName) {
          router.push(`/home/${appName}`);
        }
        commandRef.current.value = "";
        return;
      }
      let output = handleCommand(input);
      setCommands([...commands, { input, output }]);
      commandRef.current.value = "";
    }
  };

  return (
    <div className="h-full bg-white text-black p-2">
      {commands?.map((command, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex gap-2">
            <ComandLine />
            <p>{command.input}</p>
          </div>
          <p style={{ whiteSpace: "pre-wrap" }}>{command.output}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <ComandLine />
        <input
          type="text"
          ref={commandRef}
          className="focus:outline-none"
          autoFocus
        />
      </form>
    </div>
  );
};

const ComandLine = () => <p>szymon@Szymons-MacBook-Pro ~ %</p>;

export default Terminal;
