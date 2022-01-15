import { Link } from 'react-router-dom';

export default function Erro() {
    return (
      <div>
          <h1>Hum, parece que esta pagina não existe!</h1>
          <span>Você pode estar procurando:</span>
          <Link to="/home">Home</Link><br/>
          <Link to="/sobre">Sobre</Link><br/>
          <Link to="/contato">Contato</Link><br/>
      </div>
    );
}