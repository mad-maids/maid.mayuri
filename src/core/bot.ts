import chalk from "chalk";
import { Client, Intents } from "discord.js";

if (!process.env.TOKEN) {
  console.log(chalk.red("[ERROR]") + " Token not found!");
  process.exit(1);
}

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(chalk.blue("[LOG]"), "Ready...");
});

client.on("messageCreate", async (message) => {
  if (message.content === "ping") {
    await message.reply("pong");
  }
});

client
  .login(process.env.TOKEN)
  .then(() => console.log(chalk.blue("[LOG]"), "Logged in..."))
  .catch((e) => console.log(chalk.red("[ERROR]"), e));
