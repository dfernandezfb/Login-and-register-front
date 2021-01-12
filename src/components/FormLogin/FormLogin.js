import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/Auth/authContext'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { validateLogin } from './../../validations/validations'
import './FormLogin.css'

const FormLogin = () => {
    const { login, errorMsg } = useContext(AuthContext);
    const [errors, setErrors] = useState({
        email: null,
        password: null,
        request: null
    })
    const [values, setValues] = useState(
        {
            email: '',
            password: ''
        }
    )
    useEffect(() => {
        setErrors({
            email:errors.email,
            password:errors.password,
            request: errorMsg
        })
    }, [errors.email,errors.password,errorMsg])
    const handleOnChange = (e) => {
        setValues(
            {
                ...values,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateLogin(values))
        if (!errors.email && !errors.password) {
            login(values);
        }

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
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={handleOnChange}
                    required
                    />
            </Form.Group>
            {!errors.email ? (null) : (<Alert variant='danger'>{errors.email}</Alert>)}
            {!errors.password ? (null) : (<Alert variant='danger'>{errors.password}</Alert>)}
            {!errors.request ? (null) : (<Alert variant='danger'>{errors.request}</Alert>)}
            <Button className="submit-button btn" type="submit">
                Ingresar
            </Button>
        </Form>
    )
}

export default FormLogin
