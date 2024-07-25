import { Card } from "react-bootstrap"

const CepDisplay = ({ address }) => {
    return (
        <div className='my-1'>
            <h2>CEP Pesquisado</h2>
            {address ? (
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
                <p>Nenhum CEP pesquisado.</p>
            )}
        </div>
    )
}

export default CepDisplay
