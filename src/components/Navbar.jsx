import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/contact">Contatos</Link></li>
                <li><Link to="/api1">Clima1</Link></li>
                <li><Link to="/servicos">Servicos</Link></li>
                <li><Link to="/profissionais01">Profissional</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;