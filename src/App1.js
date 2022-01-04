import React from 'react';

/*const Bemvindo = (props) => {
  return(
      <div>
          <h2> Bem-Vindo(a) {props.nome}</h2>
          <h3>Tenho {props.idade} Anos</h3>
      </div>
    );
}*/

const Equipe = (props) => {
  return (
    <div>
      <Sobre usernome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social fb={props.facebook}/>
      <hr/>
    </div>
  );
}

const Sobre = (props) => {
  return(
    <div>
        <h2>Olá sou o(a) {props.nome} </h2>
        <h3>Cargo:  {props.cargo} </h3> 
        <h3>Idade: {props.idade} </h3>
    </div>
  );
}

const Social = (props) =>{
  return(
      <div>
        <a href={props.fb}> Facebook </a>
        <a> Linkedin </a>
        <a> Youtube </a>
      </div>
  );
}

function App() {
  return (
    <div>
     {/* Olá Mundo!
      <Bemvindo nome="Tiago" idade="33"/>
      <Bemvindo nome="Igor" idade="26"/>
      <Bemvindo nome="Samuel" idade="25"/>*/}
     
      <Equipe  nome="Andrade Tiago" cargo="Desenvolvedor Web Jr" idade="33" facebook="https://legadodamarvel.com.br/"/>
      <Equipe  nome="Matias Igor" cargo="Desenvolvedor Web Pleno" idade="26" facebook="https://www.dccomics.com/"/>  
      <Equipe  nome="Ribeiro Samuel" cargo="Desenvolvedor Web Senior" idade="26" facebook="https://www.mancity.com/"/>  
    </div>
  );
 }
export default App;
