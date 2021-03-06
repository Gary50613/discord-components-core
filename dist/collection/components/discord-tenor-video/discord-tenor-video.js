import { Component, Element, h, Host, Prop } from '@stencil/core';
export class DiscordTenorVideo {
  render() {
    return (h(Host, { class: "discord-tenor-video" },
      h("div", { class: "discord-tenor-video-wrapper", style: { height: `${this.height}px`, width: `${this.width}px` } },
        h("video", { muted: true, preload: "auto", autoplay: true, loop: true, src: this.url, height: this.height, width: this.width }))));
  }
  static get is() { return "discord-tenor-video"; }
  static get originalStyleUrls() { return {
    "$": ["discord-tenor-video.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-tenor-video.css"]
  }; }
  static get properties() { return {
    "url": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The URL for the video"
      },
      "attribute": "url",
      "reflect": false
    },
    "height": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The height of the video in pixels"
      },
      "attribute": "height",
      "reflect": false
    },
    "width": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The width of the video in pixels"
      },
      "attribute": "width",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
