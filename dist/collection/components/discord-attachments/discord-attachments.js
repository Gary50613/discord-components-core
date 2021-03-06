import { Component, h, Host } from '@stencil/core';
export class DiscordAttachments {
  render() {
    return (h(Host, { class: "discord-attachments" },
      h("slot", null)));
  }
  static get is() { return "discord-attachments"; }
  static get originalStyleUrls() { return {
    "$": ["discord-attachments.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-attachments.css"]
  }; }
}
