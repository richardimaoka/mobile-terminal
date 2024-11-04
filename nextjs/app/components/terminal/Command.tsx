import { CommandAlreadyExecuted } from "./CommandAlreadyExecuted";
import { CommandBeforeRun } from "./CommandBeforeRun";

interface Props {
  prompt?: string;
  command: string;
  beforeRun?: boolean;
}

export type CommandProps = Props;

export function Command(props: Props) {
  return props.beforeRun ? (
    <CommandBeforeRun prompt={props.prompt} command={props.command} />
  ) : (
    <CommandAlreadyExecuted prompt={props.prompt} command={props.command} />
  );
}
