import chalk from "chalk";
import configs from "@utils/configs";
import validator from "@utils/validator";
import { CommandHandler } from "@utils/handler";
import { Client, Intents, Message } from "discord.js";

(async () => {
  await validator(configs);
})();

const handler = new CommandHandler(configs.prefix);

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", async () => {
  await console.log(chalk.blue("[LOG]"), "Ready...");
});

client.on("messageCreate", async (message: Message) => {
  await handler.handleMessage(message);
});

client.on("error", async (error: Error) => {
  await console.log(chalk.red("[ERROR]"), error);
});

client
  .login(configs.token)
  .then(async () => console.log(chalk.blue("[LOG]"), "Logged in..."))
  .catch(async (e) => console.log(chalk.red("[ERROR]"), e));
