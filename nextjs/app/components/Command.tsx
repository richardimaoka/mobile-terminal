import { CommandAlreadyExecuted } from "./CommandAlreadyExecuted";
import { CommandWaitingForRun } from "./CommandWaitingForRun";

interface Props {
  prompt?: string;
  command: string;
  beforeRun?: boolean;
}

export function Command(props: Props) {
  return props.beforeRun ? (
    <CommandWaitingForRun prompt={props.prompt} command={props.command} />
  ) : (
    <CommandAlreadyExecuted prompt={props.prompt} command={props.command} />
  );
}
