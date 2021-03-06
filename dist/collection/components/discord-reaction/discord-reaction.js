import { Component, Element, h, Prop } from '@stencil/core';
import clsx from 'clsx';
export class DiscordReaction {
  constructor() {
    /**
     * The name of the emoji to use as alternative image text.
     * @default ':emoji'
     */
    this.name = ':emoji:';
    /**
     * The number of people who reacted.
     * @default 1
     */
    this.count = 1;
    /**
     * Whether the reaction should show as reacted by the user.
     * @default false
     */
    this.reacted = false;
    /**
     * Whether the reaction should be reactive.
     * @remark When the reaction is interactive left clicking it will add 1 to the counter.
     * Whereas when holding the Shift key and left clicking it will decrease the counter.
     * The counter cannot go below 1.
     * @default false
     */
    this.interactive = false;
  }
  render() {
    return (h("div", { class: clsx('discord-reaction', { 'discord-reaction-reacted': this.reacted }), onClick: this.handleReactionClick.bind(this) },
      h("div", { class: "discord-reaction-inner" },
        h("img", { src: this.emoji, alt: this.name, draggable: false }),
        h("span", { class: "discord-reaction-count" }, this.count))));
  }
  handleReactionClick(event) {
    if (this.interactive) {
      if (event.shiftKey) {
        this.count--;
      }
      else {
        this.count++;
      }
      if (this.count <= 0) {
        this.count = 1;
      }
    }
  }
  static get is() { return "discord-reaction"; }
  static get originalStyleUrls() { return {
    "$": ["discord-reaction.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-reaction.css"]
  }; }
  static get properties() { return {
    "emoji": {
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
        "text": "The reaction emoji image URL."
      },
      "attribute": "emoji",
      "reflect": false
    },
    "name": {
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
        "tags": [{
            "text": "':emoji'",
            "name": "default"
          }],
        "text": "The name of the emoji to use as alternative image text."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "':emoji:'"
    },
    "count": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "1",
            "name": "default"
          }],
        "text": "The number of people who reacted."
      },
      "attribute": "count",
      "reflect": false,
      "defaultValue": "1"
    },
    "reacted": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "false",
            "name": "default"
          }],
        "text": "Whether the reaction should show as reacted by the user."
      },
      "attribute": "reacted",
      "reflect": false,
      "defaultValue": "false"
    },
    "interactive": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "When the reaction is interactive left clicking it will add 1 to the counter.\nWhereas when holding the Shift key and left clicking it will decrease the counter.\nThe counter cannot go below 1.",
            "name": "remark"
          }, {
            "text": "false",
            "name": "default"
          }],
        "text": "Whether the reaction should be reactive."
      },
      "attribute": "interactive",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
