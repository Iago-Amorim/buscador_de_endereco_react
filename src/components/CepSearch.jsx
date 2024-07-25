import { useState } from "react"
import { Form, Button, InputGroup } from "react-bootstrap"
import InputMask from "react-input-mask" // Importa o componente InputMask para aplicar máscara de entrada

// Componente CepSearch para pesquisar um CEP
const CepSearch = ({ onSearch, onError }) => {
    const [cep, setCep] = useState("") // Declaração do estado local para armazenar o CEP digitado

    // Função para manipular a busca do CEP
    const handleSearch = () => {
        // Remove caracteres não numéricos para validação
        const sanitizedCep = cep.replace(/\./g, "").replace(/-/g, "").replace(/_/g, "")

        if (sanitizedCep.length === 8) {
            // Se o CEP tiver 8 dígitos, chama a função onSearch passando o CEP sanitizado
            onSearch(sanitizedCep)
        } else {
            // Caso contrário, chama a função onError para exibir uma mensagem de erro
            onError("Por favor, insira um CEP válido com 8 dígitos.")
        }
    }

    // Função para manipular a mudança de valor no campo de entrada
    const handleChange = (e) => {
        setCep(e.target.value) // Atualiza o estado local com o novo valor
        onError(null) // Limpa a mensagem de erro
    }

    return (
        <div className='my-4'>
            <h2>Buscar CEP</h2>
            <InputGroup className='mb-1'>
                {/* Componente InputMask para aplicar a máscara de entrada de CEP */}
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
                {/* Botão para iniciar a busca */}
                <Button variant='primary' id='button-search' onClick={handleSearch}>
                    Buscar
                </Button>
            </InputGroup>
        </div>
    )
}

export default CepSearch // Exporta o componente CepSearch como padrão
