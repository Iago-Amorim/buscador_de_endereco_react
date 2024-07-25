import { Navbar, Container } from "react-bootstrap"
import { House } from "react-bootstrap-icons"

// Componente Header para exibir o cabeçalho do aplicativo
const Header = () => {
    return (
        // Navbar com fundo primário e texto escuro, configurado para expandir em telas grandes
        <Navbar bg='primary' variant='dark' expand='lg'>
            <Container className='d-flex justify-content-center'>
                <Navbar.Brand>
                    <House className='me-2' /> {/* Ícone da casa com margem direita */}
                    Buscador de Endereço
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header // Exporta o componente Header como padrão
