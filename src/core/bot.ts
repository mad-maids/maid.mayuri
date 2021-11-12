import chalk from "chalk";
import configs from "@utils/configs";
import validator from "@utils/validator";
import { CommandHandler } from "@utils/handler";
import { Client, Intents, Message } from "discord.js";

const handler = new CommandHandler(configs.prefix);

(async () => {
  await validator(configs);
})();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

client.on("ready", async () => {
  await console.log(chalk.blue("[LOG]"), "Ready");
  await client.user.setActivity(configs.activity.action, configs.activity.type);
  await console.log(
    chalk.blue("[LOG]"),
    chalk.green(configs.activity.type.type + " " + configs.activity.action),
    "Status"
  );
});

client.on("messageCreate", async (message: Message) => {
  await handler.handleMessage(message);
});

client.on("error", async (error: Error) => {
  await console.log(chalk.red("[ERROR]"), error);
});

client
  .login(configs.token)
  .then(async () => console.log(chalk.blue("[LOG]"), "Logged in"))
  .catch(async (e) => console.log(chalk.red("[ERROR]"), e));
