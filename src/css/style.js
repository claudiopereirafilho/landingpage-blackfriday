import { createGlobalStyle } from 'styled-components' 

//body background: #D9E6F6;
const GlobalStyle = createGlobalStyle`

  /* Reset CSS */
  *{    
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    text-decoration: none; 
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    background: #000000;
    color:#FFF;
    font-size: 1.2rem;
  }

  img{
    max-width:100%;
    height: auto;
    display: block;
  }
`
export default GlobalStyle