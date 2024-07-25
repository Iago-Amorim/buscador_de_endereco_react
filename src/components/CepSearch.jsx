import { useState } from "react"
import { Form, Button, InputGroup } from "react-bootstrap"
import InputMask from "react-input-mask"

const CepSearch = ({ onSearch, onError }) => {
    const [cep, setCep] = useState("")

    const handleSearch = () => {
        const sanitizedCep = cep.replace(/\./g, "").replace(/-/g, "").replace(/_/g, "")

        if (sanitizedCep.length === 8) {
            onSearch(sanitizedCep)
        } else {
            onError("Por favor, insira um CEP válido com 8 dígitos.")
        }
    }

    const handleChange = (e) => {
        setCep(e.target.value)
        onError(null)
    }

    return (
        <div className='my-4'>
            <h2>Buscar CEP</h2>
            <InputGroup className='mb-1'>
                <InputMask mask='99.999-999' value={cep} onChange={handleChange}>
                    {() => (
                        <Form.Control
                            type='text'
                            placeholder='Digite o CEP'
                            aria-label='CEP'
                            aria-describedby='button-search'
                        />
                    )}
                </InputMask>
                <Button variant='primary' id='button-search' onClick={handleSearch}>
                    Buscar
                </Button>
            </InputGroup>
        </div>
    )
}

export default CepSearch
