import { LitElement, TemplateResult } from 'lit-element';
import '@polymer/paper-radio-button/paper-radio-button.js';
export declare class ExmgRadioGroupItem extends LitElement {
    name: string;
    type: string;
    checked: boolean;
    static styles: import("lit-element").CSSResult[];
    private getTemplate;
    render(): TemplateResult;
}
