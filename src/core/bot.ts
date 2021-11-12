import { Client, Intents } from "discord.js";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Ready!");
});

client.on("messageCreate", async (message) => {
  if (message.content === "ping") {
    await message.reply("pong");
  }
});

client
  .login(process.env.TOKEN)
  .then(() => console.log("Logged in!"))
  .catch((e) => console.log(e));
