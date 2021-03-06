import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import hexToRgba from 'hex-to-rgba';
import ChannelThread from '../svgs/channel-thread';
import LockedVoiceChannel from '../svgs/locked-voice-channel';
import VoiceChannel from '../svgs/voice-channel';
export class DiscordMention {
  constructor() {
    /**
     * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
     */
    this.highlight = false;
    /**
     * The type of mention this should be. This will prepend the proper prefix character.
     * Valid values: `user`, `channel`, `role`, `voice`, and `locked`.
     */
    this.type = 'user';
  }
  handleType(value) {
    if (typeof value !== 'string') {
      throw new TypeError('DiscordMention `type` prop must be a string.');
    }
    else if (!['user', 'channel', 'role', 'voice', 'locked', 'thread'].includes(value)) {
      throw new RangeError("DiscordMention `type` prop must be one of: 'user', 'channel', 'role', 'voice', 'locked', 'thread' ");
    }
  }
  componentWillRender() {
    this.handleType(this.type);
  }
  componentDidLoad() {
    if (this.color && this.type === 'role') {
      this.el.addEventListener('mouseover', this.setHoverColor.bind(this));
      this.el.addEventListener('mouseout', this.resetHoverColor.bind(this));
    }
  }
  disconnectedCallback() {
    if (this.color && this.type === 'role') {
      this.el.removeEventListener('mouseover', this.setHoverColor.bind(this));
      this.el.removeEventListener('mouseout', this.resetHoverColor.bind(this));
    }
  }
  setHoverColor() {
    this.el.style.backgroundColor = hexToRgba(this.color, 0.3);
  }
  resetHoverColor() {
    this.el.style.backgroundColor = hexToRgba(this.color, 0.1);
  }
  render() {
    const { color, type } = this;
    const colorStyle = !color || type !== 'role' ? {} : { color, 'background-color': hexToRgba(color, 0.1) };
    let mentionPrepend = '';
    switch (this.type) {
      case 'channel':
        mentionPrepend = '#';
        break;
      case 'user':
      case 'role':
        mentionPrepend = '@';
        break;
      case 'voice':
        mentionPrepend = h(VoiceChannel, { class: "discord-mention-icon" });
        break;
      case 'locked':
        mentionPrepend = h(LockedVoiceChannel, { class: "discord-mention-icon" });
        break;
      case 'thread':
        mentionPrepend = h(ChannelThread, { class: "discord-mention-icon" });
        break;
    }
    return (h(Host, { style: colorStyle, class: `discord-mention discord-${type}-mention` },
      mentionPrepend,
      h("slot", null)));
  }
  static get is() { return "discord-mention"; }
  static get originalStyleUrls() { return {
    "$": ["discord-mention.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-mention.css"]
  }; }
  static get properties() { return {
    "highlight": {
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
        "text": "Whether this entire message block should be highlighted (to emulate the \"logged in user\" being pinged)."
      },
      "attribute": "highlight",
      "reflect": false,
      "defaultValue": "false"
    },
    "color": {
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
        "text": "The color to use for this mention. Only works for role mentions and must be in hex format."
      },
      "attribute": "color",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'user' | 'channel' | 'role' | 'voice' | 'locked' | 'thread'",
        "resolved": "\"channel\" | \"locked\" | \"role\" | \"thread\" | \"user\" | \"voice\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of mention this should be. This will prepend the proper prefix character.\nValid values: `user`, `channel`, `role`, `voice`, and `locked`."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'user'"
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "type",
      "methodName": "handleType"
    }]; }
}
