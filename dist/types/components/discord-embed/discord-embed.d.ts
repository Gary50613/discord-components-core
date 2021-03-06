import { ComponentInterface } from '../../stencil-public-runtime';
import { DiscordTimestamp } from '../../util';
export declare class DiscordEmbed implements ComponentInterface {
  /**
   * The DiscordEmbed element.
   */
  el: HTMLElement;
  /**
   * The color to use for the embed's left border. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
   */
  color: string;
  /**
   * The author's name.
   */
  authorName: string;
  /**
   * The author's avatar URL.
   */
  authorImage: string;
  /**
   * The URL to open when you click on the author's name.
   */
  authorUrl: string;
  /**
   * The embed title.
   */
  embedTitle: string;
  /**
   * The URL to open when you click on the embed title.
   */
  url: string;
  /**
   * The thumbnail image to use.
   */
  thumbnail: string;
  /**
   * The embed image to use (displayed at the bottom).
   */
  image: string;
  /**
   * The embed video to use (displayed at the bottom, same slot as the image).
   * @important YouTube videos will not be playable on your projects, this is due to YouTube using DASH to play their videos rather
   * than providing the raw media stream (in a container such as mp4 or ogg). Links to regular MP4 files (such as on a CDN) however
   * will autoplay!
   * @note Video takes priority over image.
   * @remark Providing both a video and an image will ensure the image is shown to users with browsers
   * that do not support HTML5 video playback.
   * @example https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg
   */
  video: string;
  /**
   * The provider to show above the embed, for example for YouTube videos it will show "YouTube" at the top of the embed (above the author)
   * @example YouTube
   */
  provider: string;
  /**
   * The image to use next to the footer text.
   */
  footerImage: string;
  /**
   * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
   */
  timestamp?: DiscordTimestamp;
  updateTimestamp(value?: DiscordTimestamp): string | null;
  componentWillRender(): void;
  render(): any;
  private renderMedia;
}
