import { Link } from 'react-router-dom';

export default function Contato() {
    return (
      <div>
          <h1>Bem Vindo a Pagina Contatos!</h1>
          <span>Email: teste@gmail.com </span><br/>
          <Link to="/sobre">Sobre</Link><br/>
          <Link to="/contato">Contato</Link><br/>
      </div>
    );
}