import styled from 'styled-components';

export const MainSection = styled.main`

  background-image: url('../../../assets/images/bg-abstract.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SectionOne = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto;

  text-align: center;
  align-content: space-between;
  align-items: center;
  
  .topo {
    flex: 1 1 200px;
    margin:10px;
    min-height: 100%;
    padding: 20px;
  }

  h1{
    font-size: 3rem;
    font-weight: bold;
    text-align: left;    
    margin: 0px auto;    
    border:1px solid red;
    background-color: #FF0000;
    padding: 30px;
  }


`;

export const SectionTwo = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto;
  
  .preco{
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    margin: 10px auto;    
    background-color: #FF0000;
    padding: 10px 30px;
    border-radius: 20px;
  }
  .precoDe{
    font-size:1rem;
    text-decoration: line-through;
  }
  .precoPor{
    
  }

  .box{
    flex:1 1 200px;
    margin: 10px;
    padding: 20px;
  }

  .box img{
    border-radius: 20px;    
  }

`;

export const SectionThree = styled.section`
    
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    background-color:rgb(0, 0, 0);    
    margin: 0 auto;
    align-content: center;
    text-align: center;

    .form{
      margin: 50px auto;    
      flex: 1 1 200px;    
    
      h2{
        font-size: 3rem;
        font-weight: bold;
        text-align: center;    
        margin: 50px auto;
        padding: 30px;          
      }
    }
      
      .form input{
          margin: 20px 10px;
          min-height:30px;
          width:500px;     
          max-width:100%;   
          border-radius:10px 10px;
          padding:20px;
          border: 0;
          color: #000000;
          background-color:#FFFFFF;
          
          &:focus,
          &:active{      
            border:none;
            box-shadow: none;
            outline:none;
          } 

          @media(min-width:320px) and (max-width:600px){                   
            width: 300px;
            max-width: 100%;
            margin: 10px auto;
            
          }

          @media(min-width:601px) and (max-width:800px){                   
            width: 350px;
            max-width: 100%;
            margin: 10px 10px;
            
          }

          @media(min-width:801px) and (max-width:1281px){                   
            width: 400px;
            max-width: 100%;
            margin: 10px 10px;
            
          }


      }
         
          .btnSubmit{
            margin: 20px 10px;
            min-height:20px;
            width:200px;     
            max-width:100%;   
            border-radius:10px 10px;    
            padding:20px;
            border: 0;
            color: #FFFFFF;
            font-weight:bold;
            background-color:#FF0000;
            cursor: pointer;
        }    
    

    

`;

export const SectionFour = styled.section`

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 200px;
  margin: 0px auto;    
  align-content: center;
  text-align: center;
  background-color: #FF0000;
  font-weight: bold;


  .footer{
    max-width: 1200px;
    padding: 30px;    
    margin: 50px auto;    
    flex: 1 1 200px;  
  }

  .footer p{
    text-align: center;
    margin: 20px auto;    
  }
  .footer a{
    align-content:center;
    color: #FFFFFF;
  }
`;