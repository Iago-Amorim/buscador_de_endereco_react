import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
    return (
        <footer className='bg-dark text-light py-4 mt-auto'>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <p className='mb-0'>© 2024 Iago Assunção Amorim</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
