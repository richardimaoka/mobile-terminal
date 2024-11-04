import { CommandAlreadyExecuted } from "./CommandAlreadyExecuted";

interface Props {
  prompt?: string;
  command: string;
}

export function Command(props: Props) {
  return (
    <CommandAlreadyExecuted prompt={props.prompt} command={props.command} />
  );
}
