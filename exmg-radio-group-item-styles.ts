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
  .label > .title {
      text-transform: uppercase;
      color: #156fd8;
      font-weight: 500;
  }
  .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle {
      border-color: #156fd8;
  }
  .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle {
      border-color: #156fd8;
  }
`;
