var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, LitElement, property } from 'lit-element';
import '@polymer/paper-radio-button/paper-radio-button.js';
import { exmgRadioGroupItemStyles } from './exmg-radio-group-item-styles';
var ItemType;
(function (ItemType) {
    ItemType["BUTTON"] = "button";
    ItemType["BLOCK"] = "block";
})(ItemType || (ItemType = {}));
let ExmgRadioGroupItem = class ExmgRadioGroupItem extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.type = ItemType.BUTTON;
        this.checked = false;
    }
    getTemplate() {
        switch (this.type) {
            case ItemType.BUTTON:
                return html `
          <paper-radio-button name="${this.name}" ?checked="${this.checked}">
            <slot></slot>
          </paper-radio-button>
        `;
            case ItemType.BLOCK:
                return html `
          <paper-radio-button name="${this.name}" ?checked="${this.checked}">
            <div class="label">
              <slot class="title" name="title"></slot>
              <slot name="body"></slot>
            </div>
          </paper-radio-button>
        `;
            default:
                return undefined;
        }
    }
    render() {
        return html `
      <div class="item ${this.checked && 'checked'}">
        ${this.getTemplate()}
      </div>
    `;
    }
};
ExmgRadioGroupItem.styles = [
    exmgRadioGroupItemStyles,
];
__decorate([
    property({ type: String })
], ExmgRadioGroupItem.prototype, "name", void 0);
__decorate([
    property({ type: String })
], ExmgRadioGroupItem.prototype, "type", void 0);
__decorate([
    property({ type: Boolean })
], ExmgRadioGroupItem.prototype, "checked", void 0);
ExmgRadioGroupItem = __decorate([
    customElement('exmg-radio-group-item')
], ExmgRadioGroupItem);
export { ExmgRadioGroupItem };
