import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import '@polymer/paper-radio-button/paper-radio-button.js';
import {exmgRadioGroupItemStyles} from './exmg-radio-group-item-styles';

enum ItemType {
  BUTTON = 'button',
  BLOCK = 'block',
}

@customElement('exmg-radio-group-item')
export class ExmgRadioGroupItem extends LitElement {
  @property({type: String})
  type: string = ItemType.BUTTON;

  static styles = [
    exmgRadioGroupItemStyles,
  ];

  private getTemplate(): TemplateResult|undefined {
    switch (this.type) {
      case ItemType.BUTTON:
        return html`
          <paper-radio-button><slot></slot></paper-radio-button>
        `;

      case ItemType.BLOCK:
        return html`
          <paper-radio-button>
            <slot name="title"></slot>
            <slot name="body"></slot>                
          </paper-radio-button>
        `;

      default:
        return undefined;
    }
  }

  render() {
    return html`
        ${this.getTemplate()}
    `;
  }
}
