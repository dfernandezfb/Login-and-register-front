import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import MyForm from './../Form/MyForm'

const MyModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ingresar
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MyForm/>
            </Modal.Body>
        </Modal>
    )
}

export default MyModal
