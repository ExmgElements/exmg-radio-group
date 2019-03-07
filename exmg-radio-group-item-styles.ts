import {css} from 'lit-element';

// language=CSS
export const exmgRadioGroupItemStyles = css`
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;

    border: 1px solid #dadada;
    border-radius: 5px;
    font-family: 'Roboto', 'Noto', sans-serif;
    padding: 7px;
  }
   .item.checked {
     border: 3px solid #156fd8;
     padding: 5px;
   }
  .label {
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  .label.title {
      text-transform: uppercase;
      color: #156fd8;
      font-weight: 500;
  }
`;
export const exmgRadioGroupItemStyles1 = css`
  :host(:focus) {
    outline: none;
  }
  .item {
    border: 1px solid #dadada;
    border-radius: 5px;
    display: inline-block;
    font-family: 'Roboto', 'Noto', sans-serif;
    padding: 7px;
  }
  .item.checked {
    border: 3px solid #156fd8;
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
