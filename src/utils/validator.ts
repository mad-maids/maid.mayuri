import { BotConfig } from "@utils/configs";
import chalk from "chalk";

export default async (config: BotConfig) => {
  if (!config.token) {
    console.log(chalk.red("[ERROR]") + " Token is required");
    process.exit(1);
  }
};
