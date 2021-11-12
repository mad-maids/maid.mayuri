import { CommandContext } from "@model/commands";
import { Command } from "@delta/command";

export class GreetCommand implements Command {
  commandNames = ["greet", "hello"];

  getHelpMessage(commandPrefix: string): string {
    return `Use ${commandPrefix}greet to get a greeting.`;
  }

  async run(parsedUserCommand: CommandContext): Promise<void> {
    await parsedUserCommand.originalMessage.reply("hello, world!");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hasPermissionToRun(parsedUserCommand: CommandContext): boolean {
    return true;
  }
}
