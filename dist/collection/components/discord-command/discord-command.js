import { Component, Element, h, Host, Prop } from '@stencil/core';
import { avatars, profiles } from '../../options';
import CommandIcon from '../svgs/command-icon';
export class DiscordCommand {
  constructor() {
    /**
     * The message author's username.
     * @default 'User'
     */
    this.author = 'User';
  }
  render() {
    var _a, _b, _c;
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-message') {
      throw new Error('All <discord-command> components must be direct children of <discord-message>.');
    }
    const resolveAvatar = (avatar) => { var _a, _b; return (_b = (_a = avatars[avatar]) !== null && _a !== void 0 ? _a : avatar) !== null && _b !== void 0 ? _b : avatars.default; };
    const defaultData = { author: this.author, bot: false, verified: false, server: false, roleColor: this.roleColor };
    const profileData = (_a = Reflect.get(profiles, this.profile)) !== null && _a !== void 0 ? _a : {};
    const profile = Object.assign(Object.assign(Object.assign({}, defaultData), profileData), { avatar: resolveAvatar((_b = profileData.avatar) !== null && _b !== void 0 ? _b : this.avatar) });
    const messageParent = parent.parentElement;
    return (h(Host, { class: "discord-replied-message discord-executed-command" },
      messageParent.compactMode ? (h("div", { class: "discord-reply-badge" },
        h(CommandIcon, null))) : (h("img", { class: "discord-replied-message-avatar", src: profile.avatar, alt: profile.author })),
      h("span", { class: "discord-replied-message-username", style: { color: (_c = profile.roleColor) !== null && _c !== void 0 ? _c : '' } }, profile.author),
      ' used ',
      h("div", { class: "discord-replied-message-content discord-command-name" }, this.command)));
  }
  static get is() { return "discord-command"; }
  static get originalStyleUrls() { return {
    "$": ["discord-command.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-command.css"]
  }; }
  static get properties() { return {
    "profile": {
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
        "text": "The id of the profile data to use."
      },
      "attribute": "profile",
      "reflect": false
    },
    "author": {
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
            "text": "'User'",
            "name": "default"
          }],
        "text": "The message author's username."
      },
      "attribute": "author",
      "reflect": false,
      "defaultValue": "'User'"
    },
    "avatar": {
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
        "text": "The message author's avatar. Can be an avatar shortcut, relative path, or external link."
      },
      "attribute": "avatar",
      "reflect": false
    },
    "roleColor": {
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
        "text": "The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp)."
      },
      "attribute": "role-color",
      "reflect": false
    },
    "command": {
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
        "text": "The name of the command invoked."
      },
      "attribute": "command",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
