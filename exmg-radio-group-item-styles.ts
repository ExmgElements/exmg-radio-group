import {css} from 'lit-element';

// language=CSS
export const exmgRadioGroupItemStyles = css`
  :host(:focus) {
    outline: none;
  }
  .item {
    border: 3px solid #156fd8;
    border-radius: 5px;
    display: inline-block;
    font-family: 'Roboto', 'Noto', sans-serif;
    padding: 5px;
  }
  .label {
    /**
      --paper-radio-button-label-spacing | Spacing between the label and the button | 10px
      This spacing will cause that child block will be out of bounds. We have to apply negative margin on it,
      and increase this margin 2 times to make it visually look nice
     */
    margin-right: calc(var(--paper-radio-button-label-spacing, 10px) * 2);
  }
  .title {
    text-transform: uppercase;
    color: #156fd8;
    font-weight: 500;
  }
`;
