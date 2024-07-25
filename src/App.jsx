import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Alert } from "react-bootstrap"
import { fetchAddressByCep } from "./api/viaCepApi"
import CepSearch from "./components/CepSearch"
import CepDisplay from "./components/CepDisplay"
import SearchHistory from "./components/SearchHistory"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
    const [address, setAddress] = useState(null)
    const [history, setHistory] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem("cepHistory")) || []
        setHistory(storedHistory)
    }, [])

    const handleSearch = async (cep) => {
        try {
            const data = await fetchAddressByCep(cep)

            if (data && data.cep) {
                setAddress(data)

                const updatedHistory = history.filter((item) => item.cep !== cep) 
                updatedHistory.unshift({ cep, data })

                setHistory(updatedHistory)
                localStorage.setItem("cepHistory", JSON.stringify(updatedHistory))

                setError(null)
            } else {
                setError("CEP não encontrado. Por favor, verifique o CEP e tente novamente.")
                setAddress(null)
            }
        } catch (error) {
            console.error("Erro ao buscar endereço:", error)
            setError("Erro ao buscar endereço. Por favor, tente novamente mais tarde.")
            setAddress(null)
        }
    }

    const handleItemClick = (cep) => {
        setAddress(history.find((item) => item.cep === cep)?.data || null)
    }

    const handleRemove = (cep) => {
        const updatedHistory = history.filter((item) => item.cep !== cep)
        setHistory(updatedHistory)
        localStorage.setItem("cepHistory", JSON.stringify(updatedHistory))
        if (address && address.cep === cep) {
            setAddress(null)
        }
    }

    return (
        <div className='d-flex flex-column vh-100'>
            <Header />
            <Container className='flex-grow-1'>
                <Row className='flex-grow-1'>
                    <Col md={8} className='d-flex flex-column'>
                        <CepSearch onSearch={handleSearch} onError={setError} />
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <CepDisplay address={address} />
                    </Col>
                    <Col md={4} className='d-none d-md-flex flex-column'>
                        <SearchHistory
                            history={history}
                            onItemClick={handleItemClick}
                            onRemove={handleRemove}
                        />
                    </Col>
                </Row>
                <Row className='d-md-none'>
                    <Col>
                        <SearchHistory
                            history={history}
                            onItemClick={handleItemClick}
                            onRemove={handleRemove}
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default App
