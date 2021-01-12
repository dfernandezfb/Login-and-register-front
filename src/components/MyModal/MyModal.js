import Modal from 'react-bootstrap/Modal'

const MyModal = ({body:Component,...props}) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.modalTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Component/>
            </Modal.Body>
        </Modal>
    )
}

export default MyModal
