import axios from "axios"

export const fetchAddressByCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.error("Erro ao buscar endereço:", error)
        throw error
    }
}
