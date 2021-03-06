import { Component, Element, h, Prop } from '@stencil/core';
import { defaultDiscordAvatars } from '../../options';
import GuildBadge from '../svgs/guild-badge';
import PartnerBadgeOverlay from '../svgs/partner-badge-overlay';
import VerifiedBadgeOverlay from '../svgs/verified-badge-overlay';
export class DiscordInvite {
  constructor() {
    /**
     * The server icon to display for the invite.
     */
    this.icon = defaultDiscordAvatars.blue;
    /**
     * The server's name.
     * @default 'Discord Server'
     */
    this.name = 'Discord Server';
    /**
     * The number of members online on the server.
     * @default 0
     */
    this.online = 0;
    /**
     * The number of members on the server.
     * @default 0
     */
    this.members = 0;
    /**
     * Whether the server is verified.
     * Only works if `partnered` is `false` or `undefined`.
     */
    this.verified = false;
    /**
     * Whether the server is partnered.
     * Only works if `verified` is `false` or `undefined`.
     */
    this.partnered = false;
  }
  render() {
    return (h("div", { class: "discord-invite" },
      h("div", { class: "discord-invite-header" }, "You've been invited to join a server"),
      h("div", { class: "discord-invite-root" },
        h("img", { class: "discord-invite-icon", src: this.icon, alt: this.name }),
        h("div", { class: "discord-invite-info" },
          h("div", { class: "discord-invite-title" },
            ((this.verified && !this.partnered) || (!this.verified && this.partnered)) && (h("div", { class: "discord-invite-badge" },
              h(GuildBadge, { "aria-label": this.partnered ? 'Discord Partner' : 'Verified', class: `discord-invite-badge-${this.partnered ? 'partnered' : 'verified'}` }),
              h("div", { class: "discord-invite-badge-container" }, this.partnered ? h(PartnerBadgeOverlay, null) : h(VerifiedBadgeOverlay, null)))),
            h("span", { class: "discord-invite-name" }, this.name)),
          h("div", { class: "discord-invite-counts" },
            h("i", { class: "discord-invite-status discord-invite-status-online" }),
            h("span", { class: "discord-invite-count" },
              this.online.toLocaleString(),
              " Online"),
            h("i", { class: "discord-invite-status" }),
            h("span", { class: "discord-invite-count" },
              this.members.toLocaleString(),
              " Members"))),
        h("a", { class: "discord-invite-join", href: this.url, target: "_blank", rel: "noopener noreferrer" }, "Join"))));
  }
  static get is() { return "discord-invite"; }
  static get originalStyleUrls() { return {
    "$": ["discord-invite.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-invite.css"]
  }; }
  static get properties() { return {
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The server icon to display for the invite."
      },
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "defaultDiscordAvatars.blue"
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
            "text": "'Discord Server'",
            "name": "default"
          }],
        "text": "The server's name."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "'Discord Server'"
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
        "text": "The URL to open when you click on the join button."
      },
      "attribute": "url",
      "reflect": false
    },
    "online": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "0",
            "name": "default"
          }],
        "text": "The number of members online on the server."
      },
      "attribute": "online",
      "reflect": false,
      "defaultValue": "0"
    },
    "members": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "0",
            "name": "default"
          }],
        "text": "The number of members on the server."
      },
      "attribute": "members",
      "reflect": false,
      "defaultValue": "0"
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
        "text": "Whether the server is verified.\nOnly works if `partnered` is `false` or `undefined`."
      },
      "attribute": "verified",
      "reflect": false,
      "defaultValue": "false"
    },
    "partnered": {
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
        "text": "Whether the server is partnered.\nOnly works if `verified` is `false` or `undefined`."
      },
      "attribute": "partnered",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
