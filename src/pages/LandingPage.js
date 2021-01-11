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
                <Col>
                    <img className='portada' src={portada} alt='portada'/>
                </Col>
                <Col>
                    <h3 className='mt-3'> Regístrate </h3>
                    <FormRegister/>
                </Col>
            </Row>
        </Container>
        )
}

export default LandingPage
