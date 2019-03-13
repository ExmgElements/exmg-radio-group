import {css} from 'lit-element';

// language=CSS
export const exmgRadioGroupItemStyles = css`
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;

    border: 1px solid rgba(0,0,0,.54);
    border-radius: 5px;
    font-family: 'Roboto', 'Noto', sans-serif;
    padding: 7px 10px;
    margin: 5px;
    cursor: pointer;
  }
  .item:focus-within {
      box-shadow: 0 0 0 3px rgba(131,192,253,.5);
  }
   .item.checked {
     border: 2px solid #156fd8;
     padding: 6px 9px;
   }
   .item.disabled {
     border-color: rgba(0,0,0,.26);
   }
  .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 5px;
  }
  .description > .title {
      text-transform: uppercase;
      color: #156fd8;
      font-weight: 500;
  }
  .item.disabled > .description {
      opacity: 0.26;
  }
  .mdc-radio.hide-radio-button {
      opacity: 0;
      width: 0;
      padding: 0;
  }
  .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle {
      border-color: #156fd8;
  }
  .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle {
      border-color: #156fd8;
  }
`;
