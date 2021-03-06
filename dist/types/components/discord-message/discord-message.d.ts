import { ComponentInterface } from '../../stencil-public-runtime';
import { DiscordTimestamp } from '../../util';
export declare class DiscordMessage implements ComponentInterface {
  /**
   * The DiscordMessage element.
   */
  el: HTMLElement;
  /**
   * The id of the profile data to use.
   */
  profile: string;
  /**
   * The message author's username.
   * @default 'User'
   */
  author: string;
  /**
   * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
   */
  avatar: string;
  /**
   * Whether the message author is a bot or not.
   * Only works if `server` is `false` or `undefined`.
   */
  bot: boolean;
  /**
   * Whether the message author is a server crosspost webhook or not.
   * Only works if `bot` is `false` or `undefined`.
   */
  server: boolean;
  /**
   * Whether the bot is verified or not.
   * Only works if `bot` is `true`
   */
  verified: boolean;
  /**
   * Whether the message has been edited or not.
   */
  edited: boolean;
  /**
   * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
   */
  roleColor: string;
  /**
   * Whether to highlight this message.
   */
  highlight: boolean;
  /**
   * The timestamp to use for the message date.
   */
  timestamp: DiscordTimestamp;
  /**
   * Whether to use 24-hour format for the timestamp.
   */
  twentyFour: boolean;
  updateTimestamp(value: DiscordTimestamp): string | null;
  componentWillRender(): void;
  render(): any;
}
