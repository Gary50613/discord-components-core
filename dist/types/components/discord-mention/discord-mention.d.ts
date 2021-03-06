import { ComponentInterface } from '../../stencil-public-runtime';
export declare class DiscordMention implements ComponentInterface {
  /**
   * The DiscordMention element
   */
  el: HTMLElement;
  /**
   * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
   */
  highlight: boolean;
  /**
   * The color to use for this mention. Only works for role mentions and must be in hex format.
   */
  color: string;
  /**
   * The type of mention this should be. This will prepend the proper prefix character.
   * Valid values: `user`, `channel`, `role`, `voice`, and `locked`.
   */
  type: 'user' | 'channel' | 'role' | 'voice' | 'locked' | 'thread';
  handleType(value: string): void;
  componentWillRender(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  setHoverColor(): void;
  resetHoverColor(): void;
  render(): any;
}
