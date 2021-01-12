import { useState, useContext } from 'react'
import UserContext from './../../context/User/userContext'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './FormEdit.css'

const FormEdit = () => {
    const {userSelected, editUser} = useContext(UserContext)
    const [values, setValues] = useState({
        name: userSelected.name,
        lastname: userSelected.lastname,
        country: userSelected.country,
        email: userSelected.email
    })
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
        editUser(userSelected._id,values)
    }
    return (
        <Form onSubmit={handleSubmit}>
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
                />
            </Form.Group>
            <Button className="submit-button btn" type="submit">
                Editar
            </Button>
        </Form>
    )
}

export default FormEdit
