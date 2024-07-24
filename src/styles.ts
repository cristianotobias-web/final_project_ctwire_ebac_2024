import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#ffffff',
  pink: '#E66767',
  transparent: 'transparent',
  pinkLight: '#FFEBD9',
  black: '#000000',
  red: '#ff0000',
  green: '#008000',
  golden: '#BF8D50',
  blue: '#0000ff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalCss = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    list-style: none;
 }

 body {
    background-color: ${colors.black};
    color: ${colors.pink};

    .container {
      max-width: 1024px;
      margin: 0 auto;

    .form-control {
      margin-bottom: 3px;
      border: 1px solid ${colors.blue};
      padding: 10px;
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      label {
        cursor: pointer;
      }
      input {
       width: 100%;
       background-color: ${colors.black};
       border: none;
       font-size: 16px;
       color: ${colors.blue};
      }
       input:focus {
        outline: none; /* Remove the default outline */
        border: none;  /* Ensure no border is applied */
      }
    }

     @media (max-width: ${breakpoints.tablet}){
      width: 100%;
    }   
    }
 }
`

export default GlobalCss
