/**
 * Discord bot config.
 *
 * Revisions to this file should not be committed to the repository.
 */
import { ActivitiesOptions } from "discord.js";

export type BotConfig = {
  /** the Discord bot token. */
  token: string;
  /** Prefix used for bot commands. */
  prefix: string;
  /** The name of the role that gives ultimate power over the bot. */
  botOwnerRoleName: string;
  /** The bot will add reactions to the command messages indicating success or failure. */
  enableReactions: boolean;
  /** The activity of bot. */
  activity: {
    /** The type of activity. */
    type: ActivitiesOptions;
    /** The name of the activity. */
    action: string;
  };
};

const config: BotConfig = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  botOwnerRoleName: process.env.OWNER,
  enableReactions: process.env.REACTIONS === "true",
  activity: {
    type: { type: "PLAYING" },
    action: "with other maids!",
  },
};

export default config;
