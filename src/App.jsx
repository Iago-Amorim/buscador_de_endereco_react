import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css" // Importa estilos do Bootstrap
import { Container, Row, Col, Alert } from "react-bootstrap"
import { fetchAddressByCep } from "./api/viaCepApi" // Importa função para buscar endereço pelo CEP
import CepSearch from "./components/CepSearch" // Importa componente CepSearch
import CepDisplay from "./components/CepDisplay" // Importa componente CepDisplay
import SearchHistory from "./components/SearchHistory" // Importa componente SearchHistory
import Header from "./components/Header" // Importa componente Header
import Footer from "./components/Footer" // Importa componente Footer

// Componente principal do aplicativo
function App() {
    const [address, setAddress] = useState(null) // Estado para armazenar o endereço atual
    const [history, setHistory] = useState([]) // Estado para armazenar o histórico de buscas
    const [error, setError] = useState(null) // Estado para armazenar mensagens de erro

    // Hook useEffect para carregar o histórico de buscas do localStorage ao montar o componente
    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem("cepHistory")) || []
        setHistory(storedHistory)
    }, [])

    // Função para manipular a busca de um CEP
    const handleSearch = async (cep) => {
        try {
            const data = await fetchAddressByCep(cep) // Busca o endereço usando a API

            if (data && data.cep) {
                setAddress(data) // Define o endereço atual

                const updatedHistory = history.filter((item) => item.cep !== cep) 
                updatedHistory.unshift({ cep, data }) // Adiciona o CEP ao início do histórico

                setHistory(updatedHistory) // Atualiza o histórico de buscas
                localStorage.setItem("cepHistory", JSON.stringify(updatedHistory)) // Salva o histórico no localStorage

                setError(null) // Limpa mensagens de erro
            } else {
                setError("CEP não encontrado. Por favor, verifique o CEP e tente novamente.") // Define mensagem de erro se o CEP não for encontrado
                setAddress(null) // Limpa o endereço atual
            }
        } catch (error) {
            console.error("Erro ao buscar endereço:", error)
            setError("Erro ao buscar endereço. Por favor, tente novamente mais tarde.") // Define mensagem de erro em caso de falha na busca
            setAddress(null)
        }
    }

    // Função para manipular o clique em um item do histórico
    const handleItemClick = (cep) => {
        setAddress(history.find((item) => item.cep === cep)?.data || null) // Define o endereço atual baseado no CEP clicado
    }

    // Função para remover um item do histórico
    const handleRemove = (cep) => {
        const updatedHistory = history.filter((item) => item.cep !== cep) // Remove o item do histórico
        setHistory(updatedHistory) // Atualiza o histórico de buscas
        localStorage.setItem("cepHistory", JSON.stringify(updatedHistory)) // Salva o histórico atualizado no localStorage
        if (address && address.cep === cep) {
            setAddress(null) // Limpa o endereço atual se ele for o mesmo do item removido
        }
    }

    return (
        <div className='d-flex flex-column vh-100'>
            <Header /> {/* Componente de cabeçalho */}
            <Container className='flex-grow-1'>
                <Row className='flex-grow-1'>
                    <Col md={8} className='d-flex flex-column'>
                        <CepSearch onSearch={handleSearch} onError={setError} /> {/* Componente de busca de CEP */}
                        {error && <Alert variant='danger'>{error}</Alert>} {/* Alerta de erro, se houver */}
                        <CepDisplay address={address} /> {/* Componente para exibir o endereço */}
                    </Col>
                    <Col md={4} className='d-none d-md-flex flex-column'>
                        <SearchHistory
                            history={history}
                            onItemClick={handleItemClick}
                            onRemove={handleRemove}
                        /> {/* Componente para exibir o histórico de buscas */}
                    </Col>
                </Row>
                <Row className='d-md-none'>
                    <Col>
                        <SearchHistory
                            history={history}
                            onItemClick={handleItemClick}
                            onRemove={handleRemove}
                        /> {/* Componente para exibir o histórico de buscas (em dispositivos móveis) */}
                    </Col>
                </Row>
            </Container>
            <Footer /> {/* Componente de rodapé */}
        </div>
    )
}

export default App // Exporta o componente App como padrão
