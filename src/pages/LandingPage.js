import FormRegister from './../components/FormRegister/FormRegister'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import portada from './../assets/portada.png'
import './../styles/LandingPage.css'
const LandingPage = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img className='portada' src={portada} alt='portada'/>
                </Col>
                <Col md={6}>
                    <h3 className='mt-3 register-form'> Regístrate </h3>
                    <FormRegister/>
                </Col>
            </Row>
        </Container>
        )
}

export default LandingPage
