import { Component, h, Host, Prop } from '@stencil/core';
import clsx from 'clsx';
import { defaultBackground, defaultMode, defaultTheme } from '../../options';
export class DiscordMessages {
  componentWillRender() {
    if (this.lightTheme || (defaultTheme === 'light' && this.lightTheme)) {
      this.lightTheme = true;
    }
    if (this.compactMode || (defaultMode === 'compact' && this.compactMode)) {
      this.compactMode = true;
    }
    if (this.noBackground || (defaultBackground === 'none' && this.noBackground)) {
      this.noBackground = true;
    }
  }
  render() {
    return (h(Host, { class: clsx({
        'discord-light-theme': this.lightTheme,
        'discord-compact-mode': this.compactMode,
        'discord-no-background': this.noBackground
      }, 'discord-messages') },
      h("slot", null)));
  }
  static get is() { return "discord-messages"; }
  static get originalStyleUrls() { return {
    "$": ["discord-messages.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-messages.css"]
  }; }
  static get properties() { return {
    "lightTheme": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether to use light theme or not."
      },
      "attribute": "light-theme",
      "reflect": true
    },
    "noBackground": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether to exclude the background or not."
      },
      "attribute": "no-background",
      "reflect": true
    },
    "compactMode": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether to use compact mode or not."
      },
      "attribute": "compact-mode",
      "reflect": true
    }
  }; }
}
