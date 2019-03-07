import {FormElement, query, customElement, Foundation, Adapter, property, html, observer, HTMLElementWithRipple} from '@material/mwc-base/form-element.js';
import {style} from '@material/mwc-radio/mwc-radio-css.js';
import {SelectionController} from '@material/mwc-radio/selection-controller.js';
import {ripple} from '@material/mwc-ripple/ripple-directive.js';
import MDCRadioFoundation from '@material/radio/foundation.js';
import { exmgRadioGroupItemStyles } from './exmg-radio-group-item-styles';
import { Radio } from '@material/mwc-radio/mwc-radio';

export interface RadioFoundation extends Foundation {
  isChecked(): boolean;
  setChecked(checked: boolean): void;
  isDisabled(): boolean;
  setDisabled(disabled: boolean): void;
  getValue(): string;
  setValue(value: string): void;
}

export declare var RadioFoundation: {
  prototype: RadioFoundation;
  new (adapter: Adapter): RadioFoundation;
};

@customElement('exmg-radio-group-item')
export class ExmgRadioGroupItem extends FormElement {

  @query('.mdc-radio')
  protected mdcRoot!: HTMLElementWithRipple;

  @query('input')
  protected formElement!: HTMLInputElement;

  @property({type: Boolean})
  @observer(function(this: ExmgRadioGroupItem, checked: boolean) {
    this.mdcFoundation.setChecked(checked);
  })
  checked = false;

  @property({type: Boolean})
  @observer(function(this: ExmgRadioGroupItem, disabled: boolean) {
    this.mdcFoundation.setDisabled(disabled);
  })
  disabled = false;

  @property({type: String})
  @observer(function(this: ExmgRadioGroupItem, value: string) {
    this.mdcFoundation.setValue(value);
  })
  value = '';

  @property({type: String})
  name = '';

  protected mdcFoundationClass: typeof RadioFoundation = <typeof RadioFoundation><unknown>MDCRadioFoundation;

  protected mdcFoundation!: RadioFoundation;

  private _selectionController: SelectionController | null = null;

  constructor() {
    super();
    // Selection Controller is only needed for native ShadowDOM
    if (!(<any>window)['ShadyDOM'] || !(<any>window)['ShadyDOM']['inUse']) {
      this._selectionController = SelectionController.getController(this);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this._selectionController) {
      this._selectionController.register(this);
    }
  }

  disconnectedCallback() {
    if (this._selectionController) {
      this._selectionController.unregister(this);
    }
  }

  focusNative() {
    this.formElement.focus();
  }

  static styles = [
    style,
    exmgRadioGroupItemStyles,
  ];

  get ripple() {
    return this.mdcRoot.ripple;
  }

  protected createAdapter(): Adapter {
    return {
      ...super.createAdapter(),
      getNativeControl: () => {
        return this.formElement;
      }
    };
  }

  private _changeHandler() {
    this.checked = this.formElement.checked;
    if (this._selectionController) {
      this._selectionController.update(this);
    }
  }

  private _focusHandler() {
    if (this._selectionController) {
      this._selectionController.focus(<Radio><unknown>this);
    }
  }

  private _clickHandler() {
    // Firefox has weird behavior with radios if they are not focused
    this.formElement.focus();
  }

  render() {
    return html`
      <label class="item ${this.checked && 'checked'}">
        <div class="mdc-radio" .ripple="${ripple()}">
          <input class="mdc-radio__native-control" type="radio" name="${this.name}" .checked="${this.checked}" .value="${this.value}"
          @change="${this._changeHandler}"
          @focus="${this._focusHandler}"
          @click="${this._clickHandler}">
          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
          </div>
        </div>
        <div class="label">
          <slot class="title"></slot>
          <slot class="title" name="title"></slot>
          <slot class="body" name="body"></slot>
        </div>
      </label>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    if (this._selectionController) {
      this._selectionController.update(this);
    }
  }
}
