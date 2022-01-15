import { Link } from 'react-router-dom';

export default function Sobre() {
    return (
      <div>
          <h1>Bem Vindo a Pagina Curso!</h1>
          <Link to="/home">Home</Link><br/>
          <Link to="/contato">Contato</Link><br/>
      </div>
    );
}