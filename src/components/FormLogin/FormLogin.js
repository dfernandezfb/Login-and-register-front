import { useState, useContext } from 'react'
import AuthContext from '../../context/Auth/authContext'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './FormLogin.css'

const FormLogin = () => {
    const {login} = useContext(AuthContext);
    const [values, setValues] = useState(
        {
            email: '',
            password: ''
        }
    )
    const handleOnChange = (e) => {
        setValues(
            {
                ...values,
                [e.target.name] : e.target.value
            }
        )
        console.log(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(values);
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Dirección de correo</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Ejemplo: diegof@email.com'
                    name='email'
                    value={values.email}
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={handleOnChange}
                />
            </Form.Group>
            {/* <Form.Group>
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button className="submit-button btn" type="submit">
                Ingresar
            </Button>
        </Form>
    )
}

export default FormLogin
