import { Component, h, Host } from '@stencil/core';
export class DiscordEmbedFields {
  render() {
    return (h(Host, { class: "discord-embed-fields" },
      h("slot", null)));
  }
  static get is() { return "discord-embed-fields"; }
  static get originalStyleUrls() { return {
    "$": ["discord-embed-fields.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-embed-fields.css"]
  }; }
}
