import React from 'react';
import styled from "styled-components";


const DivAlert = styled.div`


    margin: 0px auto;
    display:inline-block;
    width:100%;    
       
  
    h2{
      font-size: 3rem;
      font-weight: bold;
      text-align: center;    
      margin: 0px auto 100px auto;
      padding: 30px;          
    }
     

`;


function Alert(props){

    if (props.exibir === true) {
        return(
            <>
                <DivAlert>
                    <h2>E-mail cadastrado com sucesso!</h2>                    
                </DivAlert>
            </>
        )  
           
    }else{
        return <></>
    }    

}

export default Alert;