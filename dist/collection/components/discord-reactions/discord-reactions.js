import { Component, h, Host } from '@stencil/core';
export class DiscordReactions {
  render() {
    return (h(Host, { class: "discord-reactions" },
      h("slot", null)));
  }
  static get is() { return "discord-reactions"; }
  static get originalStyleUrls() { return {
    "$": ["discord-reactions.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-reactions.css"]
  }; }
}
