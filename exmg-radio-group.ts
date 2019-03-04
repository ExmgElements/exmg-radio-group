import {customElement, html, LitElement} from 'lit-element';
import './exmg-radio-group-item';
import {exmgRadioGroupStyles} from './exmg-radio-group-styles';

@customElement('exmg-radio-group')
export class ExmgRadioGroup extends LitElement {
  static styles = [
    exmgRadioGroupStyles,
  ];

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
