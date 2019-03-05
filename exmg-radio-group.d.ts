import { LitElement } from 'lit-element';
import '@polymer/paper-radio-group/paper-radio-group.js';
import './exmg-radio-group-item';
export declare class ExmgRadioGroup extends LitElement {
    name?: string;
    selected: string;
    required: boolean;
    vertical: boolean;
    private invalid;
    private paperRadioGroupElem?;
    readonly value: string;
    validate(): boolean;
    private onPaperRadioGroupChanged;
    static styles: import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
