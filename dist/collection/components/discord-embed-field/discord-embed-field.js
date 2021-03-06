import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import clsx from 'clsx';
export class DiscordEmbedField {
  constructor() {
    /**
     * Whether this field should be displayed inline or not.
     */
    this.inline = false;
    /**
     * The index of this inline field
     * @remark This defines the position of this inline field. 1 is left, 2 is middle and 3 is right.
     * @oneof [1, 2, 3]
     * @default 1
     */
    this.inlineIndex = 1;
    this.validInlineIndices = new Set([1, 2, 3]);
  }
  checkInlineIndex(value) {
    if (!this.validInlineIndices.has(Number(value)))
      throw new RangeError('DiscordEmbedField `inlineIndex` prop must be one of: 1, 2, or 3');
  }
  componentWillRender() {
    this.checkInlineIndex(this.inlineIndex);
  }
  render() {
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-embed-fields') {
      throw new SyntaxError('All <discord-embed-field> components must be direct children of <discord-embed-fields>.');
    }
    return (h(Host, { class: clsx({
        'discord-embed-inline-field': this.inline,
        'discord-embed-inline-field-1': this.inline && this.inlineIndex === 1,
        'discord-embed-inline-field-2': this.inline && this.inlineIndex === 2,
        'discord-embed-inline-field-3': this.inline && this.inlineIndex === 3
      }, 'discord-embed-field') },
      h("div", { class: "discord-field-title" }, this.fieldTitle),
      h("slot", null)));
  }
  static get is() { return "discord-embed-field"; }
  static get originalStyleUrls() { return {
    "$": ["discord-embed-field.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-embed-field.css"]
  }; }
  static get properties() { return {
    "fieldTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The field's title."
      },
      "attribute": "field-title",
      "reflect": false
    },
    "inline": {
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
        "text": "Whether this field should be displayed inline or not."
      },
      "attribute": "inline",
      "reflect": false,
      "defaultValue": "false"
    },
    "inlineIndex": {
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
            "text": "This defines the position of this inline field. 1 is left, 2 is middle and 3 is right.",
            "name": "remark"
          }, {
            "text": "[1, 2, 3]",
            "name": "oneof"
          }, {
            "text": "1",
            "name": "default"
          }],
        "text": "The index of this inline field"
      },
      "attribute": "inline-index",
      "reflect": false,
      "defaultValue": "1"
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "inlineIndex",
      "methodName": "checkInlineIndex"
    }]; }
}
