import { Component, h, Host } from '@stencil/core';
export class DiscordActionRow {
  render() {
    return (h(Host, { class: "discord-action-row" },
      h("slot", null)));
  }
  static get is() { return "discord-action-row"; }
  static get originalStyleUrls() { return {
    "$": ["discord-action-row.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-action-row.css"]
  }; }
}
