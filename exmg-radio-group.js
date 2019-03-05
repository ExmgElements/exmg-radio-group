var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { property, query, customElement, html, LitElement } from 'lit-element';
import '@polymer/paper-radio-group/paper-radio-group.js';
import './exmg-radio-group-item';
import { exmgRadioGroupStyles } from './exmg-radio-group-styles';
let ExmgRadioGroup = class ExmgRadioGroup extends LitElement {
    constructor() {
        super(...arguments);
        this.selected = '';
        this.required = false;
        this.vertical = false;
        this.invalid = false;
    }
    get value() {
        return this.selected;
    }
    validate() {
        this.invalid =
            this.required
                && !this.selected;
        return !this.invalid;
    }
    onPaperRadioGroupChanged() {
        this.selected = this.paperRadioGroupElem.selected;
        this.dispatchEvent(new CustomEvent('exmg-radio-group-changed', { detail: { selected: this.selected }, composed: true, bubbles: true }));
    }
    render() {
        return html `
      <paper-radio-group
        selected="${this.selected}"
        selectable="exmg-radio-group-item"
        @paper-radio-group-changed="${this.onPaperRadioGroupChanged}"
        class="${this.vertical ? 'vertical' : 'horizontal'}"
        ?invalid="${this.invalid}"
      >
        <slot></slot>
      </paper-radio-group>
    `;
    }
};
ExmgRadioGroup.styles = [
    exmgRadioGroupStyles,
];
__decorate([
    property({ type: String })
], ExmgRadioGroup.prototype, "name", void 0);
__decorate([
    property({ type: String })
], ExmgRadioGroup.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean })
], ExmgRadioGroup.prototype, "required", void 0);
__decorate([
    property({ type: Boolean })
], ExmgRadioGroup.prototype, "vertical", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'invalid' })
], ExmgRadioGroup.prototype, "invalid", void 0);
__decorate([
    query('paper-radio-group')
], ExmgRadioGroup.prototype, "paperRadioGroupElem", void 0);
ExmgRadioGroup = __decorate([
    customElement('exmg-radio-group')
], ExmgRadioGroup);
export { ExmgRadioGroup };
