import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import clsx from 'clsx';
import { handleTimestamp } from '../../util';
import Boost from '../svgs/boost';
import DMCall from '../svgs/dm-call';
import DMEdit from '../svgs/dm-edit';
import DMMissedCall from '../svgs/dm-missed-call';
import SystemAlert from '../svgs/system-alert';
import SystemError from '../svgs/system-error';
import Thread from '../svgs/thread';
import UserJoin from '../svgs/user-join';
import UserLeave from '../svgs/user-leave';
export class DiscordSystemMessage {
  constructor() {
    /**
     * The timestamp to use for the message date.
     */
    this.timestamp = new Date();
    /**
     * The type of system message this is, this will change the icon shown.
     * Valid values: `join`, `leave`, `call`, `missed-call`, `boost`, `edit`, `thread`, `alert`, and `error`.
     */
    this.type = 'join';
    /**
     * Whether this message is to show channel name changes, used to match Discord's style.
     */
    this.channelName = false;
  }
  handleType(value) {
    if (typeof value !== 'string') {
      throw new TypeError('DiscordSystemMessage `type` prop must be a string.');
    }
    else if (!['join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread', 'alert', 'error'].includes(value)) {
      throw new RangeError("DiscordSystemMessage `type` prop must be one of: 'join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread' 'alert', 'error'");
    }
  }
  updateTimestamp(value) {
    return handleTimestamp(value);
  }
  componentWillRender() {
    this.timestamp = handleTimestamp(this.timestamp);
  }
  render() {
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-messages') {
      throw new Error('All <discord-system-message> components must be direct children of <discord-messages>.');
    }
    let icon = '';
    switch (this.type) {
      case 'join':
        icon = h(UserJoin, null);
        break;
      case 'leave':
        icon = h(UserLeave, null);
        break;
      case 'call':
        icon = h(DMCall, null);
        break;
      case 'missed-call':
        icon = h(DMMissedCall, null);
        break;
      case 'edit':
        icon = h(DMEdit, null);
        break;
      case 'boost':
        icon = h(Boost, null);
        break;
      case 'thread':
        icon = h(Thread, null);
        break;
      case 'alert':
        icon = h(SystemAlert, null);
        break;
      case 'error':
        icon = h(SystemError, null);
        break;
    }
    return (h(Host, { class: clsx('discord-system-message', `discord-${this.type}-system-message`, { 'discord-channel-name-change': this.channelName }) },
      h("div", { class: "discord-message-icon" }, icon),
      h("div", { class: "discord-message-content" },
        h("span", null,
          h("slot", null),
          h("span", { class: "discord-message-timestamp" }, this.timestamp)),
        h("slot", { name: "reactions" }))));
  }
  static get is() { return "discord-system-message"; }
  static get originalStyleUrls() { return {
    "$": ["discord-system-message.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-system-message.css"]
  }; }
  static get properties() { return {
    "timestamp": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "DiscordTimestamp",
        "resolved": "Date | null | string",
        "references": {
          "DiscordTimestamp": {
            "location": "import",
            "path": "../../util"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The timestamp to use for the message date."
      },
      "attribute": "timestamp",
      "reflect": true,
      "defaultValue": "new Date()"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'join' | 'leave' | 'call' | 'missed-call' | 'boost' | 'edit' | 'thread' | 'alert' | 'error'",
        "resolved": "\"alert\" | \"boost\" | \"call\" | \"edit\" | \"error\" | \"join\" | \"leave\" | \"missed-call\" | \"thread\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of system message this is, this will change the icon shown.\nValid values: `join`, `leave`, `call`, `missed-call`, `boost`, `edit`, `thread`, `alert`, and `error`."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'join'"
    },
    "channelName": {
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
        "text": "Whether this message is to show channel name changes, used to match Discord's style."
      },
      "attribute": "channel-name",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "type",
      "methodName": "handleType"
    }, {
      "propName": "timestamp",
      "methodName": "updateTimestamp"
    }]; }
}
