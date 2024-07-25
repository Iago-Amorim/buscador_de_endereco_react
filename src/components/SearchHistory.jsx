import { ListGroup, Button } from "react-bootstrap"
import { Search, TrashFill } from "react-bootstrap-icons"

// Componente SearchHistory para exibir o histórico de pesquisas
const SearchHistory = ({ history, onItemClick, onRemove }) => {
    return (
        <div className='my-4'>
            <h2>Histórico de Pesquisas</h2>
            {history.length === 0 ? (
                // Se o histórico estiver vazio, mostra uma mensagem de texto informando
                <p className='text-muted'>Nenhum histórico disponível.</p>
            ) : (
                // Caso contrário, exibe o histórico com rolagem automática
                <div className='overflow-auto' style={{ maxHeight: "55dvh" }}>
                    <ListGroup>
                        {history.map((item, index) => (
                            // Itera sobre o histórico, criando um item de lista para cada entrada
                            <div key={index} className='mb-2'>
                                <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                                    <span>{item.cep}</span>
                                    <div>
                                        <Button
                                            variant='info'
                                            size='sm'
                                            onClick={() => onItemClick(item.cep)} // Função chamada ao clicar no botão de pesquisa
                                            className='me-2'
                                        >
                                            <Search /> {/* Ícone de pesquisa */}
                                        </Button>
                                        <Button
                                            variant='danger'
                                            size='sm'
                                            onClick={(e) => {
                                                e.stopPropagation() // Evita que o clique se propague para elementos pais
                                                onRemove(item.cep) // Função chamada ao clicar no botão de remoção
                                            }}
                                        >
                                            <TrashFill /> {/* Ícone de lixeira */}
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            </div>
                        ))}
                    </ListGroup>
                </div>
            )}
        </div>
    )
}

export default SearchHistory // Exporta o componente SearchHistory como padrão
