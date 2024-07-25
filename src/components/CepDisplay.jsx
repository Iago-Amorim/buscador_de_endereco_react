import { Card } from "react-bootstrap"

// Componente CepDisplay para exibir informações do endereço baseado no CEP pesquisado
const CepDisplay = ({ address }) => {
    return (
        <div className='my-1'>
            <h2>CEP Pesquisado</h2>
            {address ? (
                // Se um endereço estiver disponível, exibe as informações do endereço em um Card
                <Card>
                    <Card.Body>
                        <Card.Title>Informações do Endereço</Card.Title>
                        <Card.Text>
                            <strong>CEP:</strong> {address.cep}
                        </Card.Text>
                        <Card.Text>
                            <strong>Logradouro:</strong> {address.logradouro}
                        </Card.Text>
                        <Card.Text>
                            <strong>Bairro:</strong> {address.bairro}
                        </Card.Text>
                        <Card.Text>
                            <strong>Cidade:</strong> {address.localidade}
                        </Card.Text>
                        <Card.Text>
                            <strong>Estado:</strong> {address.uf}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                // Se nenhum endereço estiver disponível, exibe uma mensagem informando
                <p>Nenhum CEP pesquisado.</p>
            )}
        </div>
    )
}

export default CepDisplay // Exporta o componente CepDisplay como padrão
