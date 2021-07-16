import React, {useState} from 'react';
import {MainSection, SectionOne, SectionTwo, SectionThree, SectionFour} from './style';
import Alert from '../../components/alert';


const arrDados = [];
function HandleIncrementaArray(params) {
    
    arrDados.push(params);
        
        const dadosArray = arrDados.map((item) => {            
            return{                
                name: item.name,
                email: item.email
            }
        })    
    return dadosArray;
}

function Home(){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [alert, setAlert] = useState('');
    const [exibeForm, setExibeForm] = useState('');
    const [colorBorder, setColorBorder] = useState('');

    return(

        <MainSection>

            <SectionOne>
                
                <div className="topo">                
                    <img src="../../../assets/images/blackfriday-1.png" alt="blackfriday"/>
                </div>
                
                <div className="topo">
                    <h1>Descontos imperdíveis de até 70%</h1>
                </div>
                
            </SectionOne>

            <SectionTwo>
                
                    <div className="box">
                        
                        <img src="../../../assets/images/products/model-1.jpg" alt="model-1"/>
                        
                        <div className="preco">
                            <p className="precoDe">De: R$ 100,00 </p>
                            <p className="precoPor">Por: R$ 55,00 </p>
                        </div>                        
                    </div>
                    <div className="box">
                        <img src="../../../assets/images/products/model-2.jpg" alt="model-2"/>
                        <div className="preco">
                            <p className="precoDe">De: R$ 150,33 </p>
                            <p className="precoPor">Por: R$ 105,00 </p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="../../../assets/images/products/model-3.jpg" alt="model-3"/>
                        <div className="preco">
                            <p className="precoDe">De: R$ 90,00 </p>
                            <p className="precoPor">Por: R$ 35,19 </p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="../../../assets/images/products/model-4.jpg" alt="model-4"/>
                        <div className="preco">
                            <p className="precoDe">De: R$ 200,00 </p>
                            <p className="precoPor">Por: R$ 157,90 </p>
                        </div>
                    </div>
                
            </SectionTwo>


            <SectionThree>
                    

                        <div className="form">

                            <h2 style= {{display:`${exibeForm}`}}>
                                Cadastre o seu nome e e-mail para aproveitar as melhores ofertas!
                            </h2>
                            
                                <form style= {{display:`${exibeForm}`}} 
                                    onSubmit={(e) => {                        
                                    e.preventDefault();
                                        
                                    const dadosDoForm = new FormData(e.target);                        
                                    const inputName = dadosDoForm.get('nameField');
                                    const inputEmail = dadosDoForm.get('emailField');

                                    if ((inputName !== "") && (inputEmail !== "")) {
                                    
                                        let listaDeDados = HandleIncrementaArray({name: inputName, email:inputEmail});
                                                                
                                        const armazenar = JSON.stringify(listaDeDados).toString();
                                        console.log(armazenar);
                                        
                                        localStorage.setItem('cadastroEmail',armazenar );
                                        setEmail('');
                                        setName('');
                                        setAlert(true); 
                                        setExibeForm('none');

                                    }else{
                                        setColorBorder('3px solid #FF0000');
                                    }
                                    
                                    }}>
                                    
                                        <input
                                            type="text" 
                                            name="nameField"                                
                                            placeholder="Nome"                                
                                            onChange={ e => setName(e.target.value)}
                                            value={name}
                                            style={{border:`${colorBorder}`}}
                                        />
                                    
                                
                                        <input
                                            type="email" 
                                            name="emailField"                                
                                            placeholder="E-mail:"                                
                                            onChange={ e => setEmail(e.target.value)}
                                            value={email}
                                            style={{border:`${colorBorder}`}}
                                        />

                                        <button type="submit" className="btnSubmit">Garantir oferta!</button>    
                                </form>
                        </div>
                    

                <Alert exibir={alert}></Alert>

            </SectionThree>
            
            <SectionFour>
                
                <div className="footer">

                    <p>Claudio Pereira Filho | Hiring Coders #2 | Gama Academy | VTEX</p>
                    
                    <a href="https://github.com/claudiopereirafilho" >
                        <svg class="octicon octicon-mark-github v-align-middle" 
                        height="23" width="23" viewBox="0 0 16 16" 
                        version="1.1"  aria-hidden="true">
                            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        <span className="github"> claudiopereirafilho</span>
                    </a>

                </div>

            </SectionFour>


        </MainSection>
            
    )
}
export default Home;