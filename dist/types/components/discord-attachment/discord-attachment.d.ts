import { ComponentInterface } from '../../stencil-public-runtime';
export declare class DiscordAttachment implements ComponentInterface {
  /**
   * The DiscordEmbed element.
   */
  el: HTMLElement;
  /**
   * The URL for the image attachment
   * @important Should be a valid image URL, i.e. matching the regex `/\.(bmp|jpe?g|png|gif|webp|tiff)$/i`
   */
  url: string;
  /**
   * The height of the image in pixels
   */
  height: number;
  /**
   * The width of the image in pixels
   */
  width: number;
  /**
   * The alt text to show in case the image was unable to load
   * @default 'discord attachment'
   */
  alt: string;
  componentWillRender(): void;
  render(): any;
}
