import { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import AuthContext from './../../context/Auth/authContext'
import logo from "./../../assets/logo.svg"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import MyModal from './../MyModal/MyModal'
import FormLogin from './../FormLogin/FormLogin'
import Button from 'react-bootstrap/Button'
import './Header.css'

const Header = () => {
    const history = useHistory();
    const [modalShow, setModalShow] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const handleClick = () => {
        logout()
        history.push('/')
    }

    return (user === null ? (
        <header>
            <Navbar className="d-flex justify-content-between">
                <Navbar.Brand href="/" className='d-flex'>
                    <img
                        src={logo}
                        height="50"
                        className="d-inline-block align-top"
                        alt="Wispro logo"
                    />
                    <h2 className='text-dark pt-2'> Login and register</h2>
                </Navbar.Brand>
                <Button className="signin-button" variant="outline-info" onClick={() => setModalShow(true)}>
                    Ingresar
                </Button>
            </Navbar>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                body={FormLogin}
                modaltitle='Ingresar'
            />
        </header>
    ) : (
            <header>
                <Navbar collapseOnSelect expand="md">
                    <Navbar.Brand href="/" className='mr-auto d-flex'>
                        <img
                            src={logo}
                            height="50"
                            className="d-inline-block align-top"
                            alt="Wispro logo"
                        />
                        <h2 className='text-dark pt-2'> Login and register</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav>
                            <Nav.Link onClick={(e) => e.preventDefault()}> Hola {user.name}! </Nav.Link>
                            <Nav.Link> <Link to='/users' className='n-link'>Lista de usuarios</Link></Nav.Link>
                            <Nav.Link><Link to='/graphs' className='n-link'>Gráficas</Link></Nav.Link>
                            <Nav.Link onClick={handleClick}>Cerrar sesión</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )

    );
};

export default Header;
