/**
 * Discord bot config.
 *
 * Revisions to this file should not be committed to the repository.
 */

export type BotConfig = {
  /** the Discord bot token. */
  token: string;
  /** Prefix used for bot commands. */
  prefix: string;
  /** The name of the role that gives ultimate power over the bot. */
  botOwnerRoleName: string;
  /** The bot will add reactions to the command messages indicating success or failure. */
  enableReactions: boolean;
};

const config: BotConfig = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  botOwnerRoleName: process.env.OWNER,
  enableReactions: process.env.REACTIONS === "true",
};

export default config;
