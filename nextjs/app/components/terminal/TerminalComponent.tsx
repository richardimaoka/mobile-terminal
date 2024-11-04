"use client";

import styles from "./TerminalComponent.module.css";
import { Command } from "./Command";
import { Output } from "./Output";
import { useEffect, useState } from "react";

type CommandProps = {
  type: "command";
  prompt: string;
  command: string;
};

type OutputProps = {
  type: "output";
  output: string;
};

type ItemTypeExtention = {
  id: number;
};

type ItemType = (CommandProps | OutputProps) & ItemTypeExtention;

const allItems: ItemType[] = [
  {
    id: 1,
    type: "command",
    prompt: "myuser>",
    // command: "sleep 100000000000000",
    command: "echo abcde",
  },
  {
    id: 2,
    type: "command",
    prompt: "myuser>",
    // command: "sleep 100000000000000",
    command: "echo abcde",
  },
  {
    id: 3,
    type: "output",
    output: "abcde",
  },
];

export default function TerminalComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const items = allItems.filter((_, i) => i <= currentStep);

  console.log("currentStep", currentStep);

  useEffect(() => {
    function onNextStep() {
      setCurrentStep(currentStep + 1);
    }

    document.addEventListener("nextStep", onNextStep);
    return () => {
      document.removeEventListener("nextStep", onNextStep);
    };
  }, [currentStep]);

  return (
    <div className={styles.comoponent}>
      {items.map((x, i): JSX.Element => {
        switch (x.type) {
          case "command":
            return (
              <Command
                key={x.id}
                prompt={x.prompt}
                command={x.command}
                beforeRun={i === items.length - 1}
              />
            );
          case "output":
            return <Output key={x.id} output={x.output} />;
        }
      })}
    </div>
  );
}
