import {property, customElement, html, LitElement} from 'lit-element';
import '@polymer/paper-radio-group/paper-radio-group.js';
import './exmg-radio-group-item';
import {exmgRadioGroupStyles} from './exmg-radio-group-styles';

@customElement('exmg-radio-group')
export class ExmgRadioGroup extends LitElement {
  @property({type: String})
  selected: string = '';

  static styles = [
    exmgRadioGroupStyles,
  ];

  render() {
    return html`
      <paper-radio-group selected="${this.selected}">
        <slot></slot>
      </paper-radio-group>
    `;
  }
}
