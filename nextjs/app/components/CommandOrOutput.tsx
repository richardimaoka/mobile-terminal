import { Command, CommandProps } from "./Command";
import { Output, OutputProps } from "./Output";

type CommandPropsExtended = {
  type: "command";
  isLastElement: boolean;
} & CommandProps;

type OutputPropsExtended = {
  type: "output";
} & OutputProps;

type Props = CommandPropsExtended | OutputPropsExtended;
export type CommandOrOutputProps = Props;

export function CommandOrOutput(props: Props): JSX.Element {
  switch (props.type) {
    case "command":
      return (
        <Command
          prompt={props.prompt}
          command={props.command}
          beforeRun={props.beforeRun}
        />
      );
    case "output":
      return <Output output={props.output} />;
  }
}
