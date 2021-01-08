import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './MyForm.css'

const MyForm = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Dirección de correo</Form.Label>
                <Form.Control type="email" placeholder="Ejemplo: marcosd@email.com" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password"/>
            </Form.Group>
            <Form.Group>
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="submit-button btn" type="submit">
                Ingresar
            </Button>
        </Form>
    )
}

export default MyForm
