import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import Fragment from '../../Fragment';
import LaunchIcon from '../svgs/launch-icon';
export class DiscordButton {
  constructor() {
    /**
     * The name of the emoji used in the button.
     */
    this.emojiName = 'emoji';
    /**
     * Whether to show the button as disabled.
     */
    this.disabled = false;
    /**
     * The type of button this is, this will change the color of the button.
     * Valid values: `primary`, `secondary`, `success`, `destructive`.
     */
    this.type = 'secondary';
  }
  handleType(value) {
    if (typeof value !== 'string') {
      throw new TypeError('DiscordButton `type` prop must be a string.');
    }
    else if (!['primary', 'secondary', 'success', 'destructive'].includes(value)) {
      throw new RangeError("DiscordButton `type` prop must be one of: 'primary', 'secondary', 'success', 'destructive'");
    }
  }
  render() {
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-action-row') {
      throw new Error('All <discord-button> components must be direct children of <discord-action-row>.');
    }
    const content = (h(Fragment, null,
      this.emoji && h("img", { src: this.emoji, alt: this.emojiName, draggable: false, class: "discord-button-emoji" }),
      h("span", null,
        h("slot", null)),
      this.url && h(LaunchIcon, { class: "discord-button-launch" })));
    return this.url && !this.disabled ? (h("a", { class: "discord-button discord-button-secondary", href: this.url, target: "_blank", rel: "noopener noreferrer" }, content)) : (h(Host, { class: `discord-button discord-button-${this.type} discord-button-${this.disabled ? 'disabled' : 'hoverable'}` }, content));
  }
  static get is() { return "discord-button"; }
  static get originalStyleUrls() { return {
    "$": ["discord-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-button.css"]
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
        "text": "The emoji URL to use in the button."
      },
      "attribute": "emoji",
      "reflect": false
    },
    "emojiName": {
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
        "text": "The name of the emoji used in the button."
      },
      "attribute": "emoji-name",
      "reflect": false,
      "defaultValue": "'emoji'"
    },
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
        "text": "The URL for the button. Setting this will force the button type to be `secondary`."
      },
      "attribute": "url",
      "reflect": false
    },
    "disabled": {
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
        "tags": [],
        "text": "Whether to show the button as disabled."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'primary' | 'secondary' | 'success' | 'destructive'",
        "resolved": "\"destructive\" | \"primary\" | \"secondary\" | \"success\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of button this is, this will change the color of the button.\nValid values: `primary`, `secondary`, `success`, `destructive`."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'secondary'"
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "type",
      "methodName": "handleType"
    }]; }
}
