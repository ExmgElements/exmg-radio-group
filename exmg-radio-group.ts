import {property, customElement, html, LitElement} from 'lit-element';
import '@polymer/paper-radio-group/paper-radio-group.js';
import {exmgRadioGroupStyles} from './exmg-radio-group-styles';
import {ExmgRadioGroupItem} from './exmg-radio-group-item';

new ExmgRadioGroupItem; // run @customElement binding

@customElement('exmg-radio-group')
export class ExmgRadioGroup extends LitElement {
  @property({type: String})
  name?: string;

  @property({type: String, reflect: true})
  selected: string = '';

  @property({type: Boolean})
  required: boolean = false;

  @property({type: Boolean})
  vertical: boolean = false;

  @property({type: Boolean, reflect: true, attribute: 'invalid'})
  private invalid: boolean = false;

  get value() {
    return this.selected;
  }

  public validate(): boolean {
    this.invalid =
      this.required
      && !this.selected;

    return !this.invalid;
  }

  static styles = [
    exmgRadioGroupStyles,
  ];

  private handleRadioGroupItemChanged(e: Event) {
    const {detail} = <CustomEvent>e;

    this.selected = detail.value;

    this.dispatchEvent(
      new CustomEvent(
        'exmg-radio-group-changed',
        {detail: {selected: this.selected}, composed: true, bubbles: true}
      )
    );
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener('exmg-radio-group-item-changed', this.handleRadioGroupItemChanged);

    this.querySelectorAll('exmg-radio-group-item').forEach((item: Element) => {
      const litItem = <ExmgRadioGroupItem>item;

      if (this.selected === litItem.value) {
        litItem.checked = true;
      }
    });
  }

  disconnectedCallback(): void {
    this.removeEventListener('exmg-radio-group-item-changed', this.handleRadioGroupItemChanged);

    super.disconnectedCallback();
  }

  render() {
    return html`
      <div
        class="radio-group-container"
        class="radio-group-container ${this.vertical ? 'vertical' : 'horizontal'}"
        ?invalid="${this.invalid}"
      >
        <slot></slot>
      </div>
    `;
  }
}
