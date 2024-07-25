import { ListGroup, Button } from "react-bootstrap"
import { Search, TrashFill } from "react-bootstrap-icons"

const SearchHistory = ({ history, onItemClick, onRemove }) => {
    return (
        <div className='my-4'>
            <h2>Histórico de Pesquisas</h2>
            {history.length === 0 ? (
                <p className='text-muted'>Nenhum histórico disponível.</p>
            ) : (
                <div className='overflow-auto' style={{ maxHeight: "55dvh" }}>
                    <ListGroup>
                        {history.map((item, index) => (
                            <div key={index} className='mb-2'>
                                <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                                    <span>{item.cep}</span>
                                    <div>
                                        <Button
                                            variant='info'
                                            size='sm'
                                            onClick={() => onItemClick(item.cep)}
                                            className='me-2'
                                        >
                                            <Search />
                                        </Button>
                                        <Button
                                            variant='danger'
                                            size='sm'
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                onRemove(item.cep)
                                            }}
                                        >
                                            <TrashFill />
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

export default SearchHistory
