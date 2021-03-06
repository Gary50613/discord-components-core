import { ComponentInterface } from '../../stencil-public-runtime';
import { DiscordTimestamp } from '../../util';
export declare class DiscordSystemMessage implements ComponentInterface {
  /**
   * The DiscordSystemMessage element.
   */
  el: HTMLElement;
  /**
   * The timestamp to use for the message date.
   */
  timestamp: DiscordTimestamp;
  /**
   * The type of system message this is, this will change the icon shown.
   * Valid values: `join`, `leave`, `call`, `missed-call`, `boost`, `edit`, `thread`, `alert`, and `error`.
   */
  type: 'join' | 'leave' | 'call' | 'missed-call' | 'boost' | 'edit' | 'thread' | 'alert' | 'error';
  /**
   * Whether this message is to show channel name changes, used to match Discord's style.
   */
  channelName: boolean;
  handleType(value: string): void;
  updateTimestamp(value: DiscordTimestamp): string | null;
  componentWillRender(): void;
  render(): any;
}
