import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/cpu">CPU</Link></li>
                <li><Link to="/category/motherboard">Placas Base</Link></li>
                <li><Link to="/category/gpu">Placas de Video</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
