import styles from "./TerminalComponent.module.css";
import { Command } from "./Command";
import { Output } from "./Output";

type CommandProps = {
  type: "command";
  prompt?: string;
  command: string;
};

type OutputProps = {
  type: "output";
  output: string;
};

type CommonProps = {
  isLastElement: boolean;
};

type CommandOrOutputProps = (CommandProps | OutputProps) & CommonProps;

function CommandOrOutput(props: CommandOrOutputProps): JSX.Element {
  switch (props.type) {
    case "command":
      return (
        <Command
          prompt={props.prompt}
          command={props.command}
          beforeRun={props.isLastElement}
        />
      );
    case "output":
      return <Output output={props.output} />;
  }
}

export default function TerminalComponent() {
  type ItemTypeExtention = {
    id: number;
  };
  type ItemType = (CommandProps | OutputProps) & ItemTypeExtention;

  const items: ItemType[] = [
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
  ];

  return (
    <div className={styles.comoponent}>
      {items.map((x, i) => (
        <CommandOrOutput
          key={x.id}
          {...x}
          isLastElement={items.length - 1 === i}
        />
      ))}
    </div>
  );
}
