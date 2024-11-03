"use client";

import { cn } from "@/lib/utils";
import { p } from "framer-motion/client";
import { useState } from "react";

const Calculator = () => {
  const [calculation, setCalculation] = useState("");
  const [display, setDisplay] = useState("0");
  const [calcDispaly, setCalcDispaly] = useState("");

  const handleClick = (value: string) => {
    if (calculation === "" && value !== "AC" && isNaN(parseFloat(value)))
      return;

    if (calculation.length > 12 && !["AC", "="].includes(value)) return;

    switch (value) {
      case "AC":
        setCalculation("");
        setCalcDispaly("");
        setDisplay("0");
        break;
      case "+/-":
        const sign = display[0] === "-" ? display.slice(1) : "-" + display;
        setCalculation(sign);
        setDisplay(sign);
        break;
      case "%":
        if (calculation !== "") {
          const percentage = parseFloat(calculation) / 100;
          setCalculation(percentage.toString());
          setDisplay(percentage.toString());
        }
        break;
      case "=":
        const result = eval(calculation);
        const displayValue =
          result % 1 === 0 ? result.toString() : result.toFixed(2);
        setDisplay(displayValue);
        setCalcDispaly(calculation);
        setCalculation("");
        break;
      default:
        setCalculation(calculation + value);
        setDisplay(calculation + value);
        if (calculation === "") setCalcDispaly("");
    }
  };

  const layout = [
    ["AC", "+/-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["", "0", ".", "="],
  ];
  return (
    <div className="flex flex-col gap-1 p-3 pt-6">
      <div className="w-full text-end text-xl h-7 font-semibold text-black/75">
        {calcDispaly}
      </div>
      <div className="w-full text-end text-3xl font-bold text-black mb-2">
        {display}
      </div>
      <div className="flex flex-col gap-2">
        {layout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((button, index) => (
              <button
                key={button}
                onClick={() => handleClick(button)}
                className={cn(
                  "w-14 h-14 flex justify-center items-center text-xl font-semibold rounded-full",
                  rowIndex === 0 ? "bg-black/10" : "bg-black/5",
                  index === 3 && "bg-[#f3ac42]"
                )}
              >
                {button}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
