import {customElement, html, LitElement, property, TemplateResult} from 'lit-element';
import '@polymer/paper-radio-button/paper-radio-button.js';
import {exmgRadioGroupItemStyles} from './exmg-radio-group-item-styles';
import {Radio} from '@material/mwc-radio';
import {observer} from '@material/mwc-base/form-element.js';

@customElement('exmg-radio-group-item')
export class ExmgRadioGroupItem extends LitElement {
  @property({type: Boolean})
  @observer(function (this: Radio, checked: boolean) {
    console.log('checked', checked);
  })
  checked = false;

  @property({type: Boolean})
  disabled = false;

  @property({type: String})
  value = '';

  @property({type: String})
  name = '';

  static styles = [
    exmgRadioGroupItemStyles,
  ];

  private getId() {
    return `id-${this.name}-${this.value}`;
  }

  private zzz() {
    console.log('zzz');
  }

  private getTemplate(): TemplateResult|undefined {

    return html`
        <mwc-radio
          id="${this.getId()}"
          name="${this.name}"
          value="${this.value}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          @click="${this.zzz}"
        ></mwc-radio>
        <label for="${this.getId()}">
          <slot></slot>
        </label>
    `;
  }

  render() {
    return html`
      <div class="item ${this.checked && 'checked'}">
        ${this.getTemplate()}
      </div>
    `;
  }
}
