import { ComponentInterface } from '../../stencil-public-runtime';
export declare class DiscordInvite implements ComponentInterface {
  /**
   * The DiscordInvite element.
   */
  el: HTMLElement;
  /**
   * The server icon to display for the invite.
   */
  icon: string | undefined;
  /**
   * The server's name.
   * @default 'Discord Server'
   */
  name: string;
  /**
   * The URL to open when you click on the join button.
   */
  url: string;
  /**
   * The number of members online on the server.
   * @default 0
   */
  online: number;
  /**
   * The number of members on the server.
   * @default 0
   */
  members: number;
  /**
   * Whether the server is verified.
   * Only works if `partnered` is `false` or `undefined`.
   */
  verified: boolean;
  /**
   * Whether the server is partnered.
   * Only works if `verified` is `false` or `undefined`.
   */
  partnered: boolean;
  render(): any;
}
