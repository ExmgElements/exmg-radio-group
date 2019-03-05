import {property, query, customElement, html, LitElement} from 'lit-element';
import '@polymer/paper-radio-group/paper-radio-group.js';
import './exmg-radio-group-item';
import {exmgRadioGroupStyles} from './exmg-radio-group-styles';

@customElement('exmg-radio-group')
export class ExmgRadioGroup extends LitElement {
  @property({type: String})
  selected: string = '';

  @property({type: Boolean})
  vertical: boolean = false;

  @query('paper-radio-group')
  private paperRadioGroupElem?: any;

  private onPaperRadioGroupChanged(): void {
    this.selected = this.paperRadioGroupElem.selected;

    this.dispatchEvent(
      new CustomEvent(
        'exmg-radio-group-changed',
        {detail: {selected: this.selected}, composed: true, bubbles: true}
        )
    );
  }

  static styles = [
    exmgRadioGroupStyles,
  ];

  render() {
    return html`
      <paper-radio-group
        selected="${this.selected}"
        selectable="exmg-radio-group-item"
        @paper-radio-group-changed="${this.onPaperRadioGroupChanged}"
        class="${this.vertical ? 'vertical' : 'horizontal'}"
      >
        <slot></slot>
      </paper-radio-group>
    `;
  }
}
