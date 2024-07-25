import { Navbar, Container } from "react-bootstrap"
import { House } from "react-bootstrap-icons"

const Header = () => {
    return (
        <Navbar bg='primary' variant='dark' expand='lg'>
            <Container className='d-flex justify-content-center'>
                <Navbar.Brand>
                    <House className='me-2' />
                    Buscador de Endereço
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
