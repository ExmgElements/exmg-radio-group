import {css} from 'lit-element';

export const exmgRadioGroupItemStyles = css`
  :host(:focus) {
    outline: none;
  }
  
  .item {
    border: 3px solid #156fd8;
    border-radius: 5px;
    display: inline-block;
    padding: 5px;
    font-family: 'Roboto', 'Noto', sans-serif;
  }
  
  .title {
    text-transform: uppercase;
    color: #156fd8;
    font-weight: 500;
  }
`;
