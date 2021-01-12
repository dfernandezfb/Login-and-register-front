import { useState, useEffect, useContext } from 'react'
import AuthContext from './../../context/Auth/authContext'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import './FormRegister.css'
import { validateRegister } from '../../validations/validations'

const FormRegister = () => {
    const { register, errorMsg } = useContext(AuthContext);
    const [values, setValues] = useState(
        {
            name: '',
            lastname: '',
            country: '',
            email: '',
            password: '',
            password2: ''
        }
        )
        const [errors, setErrors] = useState({
            name:null,
            lastname:null,
            country:null,
            email: null,
            password: null,
            password2:null,
            request: null
        })
    useEffect(() => {
        setErrors({
            name:errors.name,
            lastname:errors.lastname,
            country:errors.country,
            email:errors.email,
            password:errors.password,
            password2:errors.password2,
            request: errorMsg
        })
    }, [errors.name,errors.lastname,errors.country,errors.email,errors.password,errors.password2,errorMsg])
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
        setErrors(validateRegister(values))
        if (!errors.email && !errors.password && !errors.lastname && !errors.name && !errors.password && !errors.password2) {
            register(values);
        }
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
                            required
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
                            required
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
                    required
                >
                    <option defaultValue value='No'>Elige un pais...</option>
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
            <Form.Group>
                <Form.Label>Repetir contraseña</Form.Label>
                <Form.Control
                    type='password'
                    name='password2'
                    value={values.password2}
                    onChange={handleOnChange}
                    required
                />
            </Form.Group>
            {!errors.email ? (null) : (<Alert variant='danger'>{errors.email}</Alert>)}
            {!errors.password ? (null) : (<Alert variant='danger'>{errors.password}</Alert>)}
            {!errors.password2 ? (null) : (<Alert variant='danger'>{errors.password2}</Alert>)}
            {!errors.name ? (null) : (<Alert variant='danger'>{errors.name}</Alert>)}
            {!errors.lastname ? (null) : (<Alert variant='danger'>{errors.lastname}</Alert>)}
            {!errors.country ? (null) : (<Alert variant='danger'>{errors.country}</Alert>)}
            {!errors.request ? (null) : (<Alert variant='danger'>{errors.request}</Alert>)}
            <Button className="submit-button btn" type="submit">
                Registrarme
            </Button>
        </Form>
    )
}

export default FormRegister
