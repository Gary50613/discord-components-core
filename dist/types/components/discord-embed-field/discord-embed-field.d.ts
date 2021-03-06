import { ComponentInterface } from '../../stencil-public-runtime';
export declare class DiscordEmbedField implements ComponentInterface {
  /**
   * The DiscordEmbedField element
   */
  el: HTMLElement;
  /**
   * The field's title.
   */
  fieldTitle: string;
  /**
   * Whether this field should be displayed inline or not.
   */
  inline: boolean;
  /**
   * The index of this inline field
   * @remark This defines the position of this inline field. 1 is left, 2 is middle and 3 is right.
   * @oneof [1, 2, 3]
   * @default 1
   */
  inlineIndex: number;
  private validInlineIndices;
  checkInlineIndex(value: DiscordEmbedField['inlineIndex']): void;
  componentWillRender(): void;
  render(): any;
}
