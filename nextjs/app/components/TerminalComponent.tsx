import styles from "./TerminalComponent.module.css";
import { Command } from "./Command";
import { Output } from "./Output";

type CommandPropsExtended = {
  type: "command";
  prompt?: string;
  command: string;
};

type OutputPropsExtended = {
  type: "output";
  output: string;
};

type LastElementExtension = {
  isLastElement: boolean;
};

type CommandOrOutputProps = (CommandPropsExtended | OutputPropsExtended) &
  LastElementExtension;

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
  type IdExtention = {
    id: number;
  };
  type ItemType = (CommandPropsExtended | OutputPropsExtended) & IdExtention;

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
