import { useState, useContext } from 'react'
import AuthContext from './../../context/Auth/authContext'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './FormRegister.css'

const FormRegister = () => {
    const { register } = useContext(AuthContext);
    const [values, setValues] = useState(
        {
            name: '',
            lastname: '',
            country: '',
            email: '',
            password: ''
            // password2: ''
        }
    )
    const handleOnChange = (e) => {
        setValues(
            {
                ...values,
                [e.target.name]: e.target.value
            }
        )
        console.log(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        register(values);
    }
    return (
        <Form onSubmit={handleSubmit} className='form-register'>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type='text'
                            name='name'
                            value={values.name}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type='text'
                            name='lastname'
                            value={values.lastname}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Pais de residencia</Form.Label>
                <Form.Control
                    as='select'
                    name='country'
                    value={values.country}
                    onChange={handleOnChange}
                >
                    <option defaultValue>Elige un pais...</option>
                    <option value='Argentina'>Argentina</option>
                    <option value='Brasil'>Brasil</option>
                    <option value='Chile'>Chile</option>
                    <option value='Colombia'>Colombia</option>
                    <option value='Uruguay'>Uruguay</option>
                    <option value='Otro'>Otro</option>
                </Form.Control>
            </Form.Group>
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
            <Form.Group>
                <Form.Label>Repetir contraseña</Form.Label>
                <Form.Control
                    type='password'
                    name='password2'
                    value={values.password2}
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Button className="submit-button btn" type="submit">
                Registrarme
            </Button>
        </Form>
    )
}

export default FormRegister
