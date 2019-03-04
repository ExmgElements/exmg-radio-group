import {customElement, html, LitElement} from 'lit-element';
import {exmgRadioGroupItemStyles} from './exmg-radio-group-item-styles';

@customElement('exmg-radio-group-item')
export class ExmgRadioGroupItem extends LitElement {
  static styles = [
    exmgRadioGroupItemStyles,
  ];

  render() {
    return html`
      <div>
        <slot name="title"></slot>
        <slot name="body"></slot>
      </div>
    `;
  }
}
