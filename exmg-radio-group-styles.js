import { css } from 'lit-element';
// language=CSS
export const exmgRadioGroupStyles = css `
    paper-radio-group {
        display: flex;
    }
    paper-radio-group[invalid] {
        border: 1px solid red;
    }
    paper-radio-group.horizontal {
        flex-direction: row;
    }
    paper-radio-group.vertical {
        flex-direction: column;
    }
`;
