import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }

    /*executa uma determinada ação quando o com,ponente é montado/carregado na pagina*/
    componentDidMount(){
        setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString()})
        }, 1000);
    }

    /* Executa uma ação a cada vez que o state for atualizado*/
    /*componentDidUpdate(){
        console.log('Atualizou!');
    }*/

    /*se o componente deve atualizar ou nao, true ou false */
    /*shouldComponentUpdate(){
    }*/

    render() {
        return (
            <div>
                <h1>Meu Projeto  {this.state.hora}</h1>
            </div>
        );
    }
}

export default App;