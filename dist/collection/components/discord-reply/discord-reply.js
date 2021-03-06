import { Component, Element, h, Host, Prop } from '@stencil/core';
import Fragment from '../../Fragment';
import { avatars, profiles } from '../../options';
import AttachmentReply from '../svgs/attachment-reply';
import CommandReply from '../svgs/command-reply';
import ReplyIcon from '../svgs/reply-icon';
import VerifiedTick from '../svgs/verified-tick';
export class DiscordReply {
  constructor() {
    /**
     * The message author's username.
     * @default 'User'
     */
    this.author = 'User';
    /**
     * Whether the message author is a bot or not.
     * Only works if `server` is `false` or `undefined`.
     */
    this.bot = false;
    /**
     * Whether the message author is a server crosspost webhook or not.
     * Only works if `bot` is `false` or `undefined`.
     */
    this.server = false;
    /**
     * Whether the bot is verified or not.
     * Only works if `bot` is `true`
     */
    this.verified = false;
    /**
     * Whether the message has been edited or not.
     */
    this.edited = false;
    /**
     * Whether the referenced message is from a response of a slash command.
     */
    this.command = false;
    /**
     * Whether the referenced message contains attachments.
     */
    this.attachment = false;
    /**
     * Whether this reply pings the original message sender, prepending an "@" on the author's username.
     */
    this.mentions = false;
  }
  render() {
    var _a, _b, _c;
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-message') {
      throw new Error('All <discord-reply> components must be direct children of <discord-message>.');
    }
    const resolveAvatar = (avatar) => { var _a, _b; return (_b = (_a = avatars[avatar]) !== null && _a !== void 0 ? _a : avatar) !== null && _b !== void 0 ? _b : avatars.default; };
    const defaultData = { author: this.author, bot: this.bot, verified: this.verified, server: this.server, roleColor: this.roleColor };
    const profileData = (_a = Reflect.get(profiles, this.profile)) !== null && _a !== void 0 ? _a : {};
    const profile = Object.assign(Object.assign(Object.assign({}, defaultData), profileData), { avatar: resolveAvatar((_b = profileData.avatar) !== null && _b !== void 0 ? _b : this.avatar) });
    const messageParent = parent.parentElement;
    return (h(Host, { class: "discord-replied-message" },
      messageParent.compactMode ? (h("div", { class: "discord-reply-badge" },
        h(ReplyIcon, null))) : (h("img", { class: "discord-replied-message-avatar", src: profile.avatar, alt: profile.author })),
      h(Fragment, null,
        profile.bot && !profile.server && (h("span", { class: "discord-application-tag" },
          profile.verified && h(VerifiedTick, null),
          "Bot")),
        profile.server && !profile.bot && h("span", { class: "discord-application-tag" }, "Server")),
      h("span", { class: "discord-replied-message-username", style: { color: (_c = profile.roleColor) !== null && _c !== void 0 ? _c : '' } },
        this.mentions && '@',
        profile.author),
      h("div", { class: "discord-replied-message-content" },
        h("slot", null),
        this.edited ? h("span", { class: "discord-message-edited" }, "(edited)") : ''),
      this.command ? (h(CommandReply, { class: "discord-replied-message-content-icon" })) : (this.attachment && h(AttachmentReply, { class: "discord-replied-message-content-icon" }))));
  }
  static get is() { return "discord-reply"; }
  static get originalStyleUrls() { return {
    "$": ["discord-reply.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-reply.css"]
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
    "bot": {
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
        "text": "Whether the message author is a bot or not.\nOnly works if `server` is `false` or `undefined`."
      },
      "attribute": "bot",
      "reflect": false,
      "defaultValue": "false"
    },
    "server": {
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
        "text": "Whether the message author is a server crosspost webhook or not.\nOnly works if `bot` is `false` or `undefined`."
      },
      "attribute": "server",
      "reflect": false,
      "defaultValue": "false"
    },
    "verified": {
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
        "text": "Whether the bot is verified or not.\nOnly works if `bot` is `true`"
      },
      "attribute": "verified",
      "reflect": false,
      "defaultValue": "false"
    },
    "edited": {
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
        "text": "Whether the message has been edited or not."
      },
      "attribute": "edited",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "Whether the referenced message is from a response of a slash command."
      },
      "attribute": "command",
      "reflect": false,
      "defaultValue": "false"
    },
    "attachment": {
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
        "text": "Whether the referenced message contains attachments."
      },
      "attribute": "attachment",
      "reflect": false,
      "defaultValue": "false"
    },
    "mentions": {
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
        "text": "Whether this reply pings the original message sender, prepending an \"@\" on the author's username."
      },
      "attribute": "mentions",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
