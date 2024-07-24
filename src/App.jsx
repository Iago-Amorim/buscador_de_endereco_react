import { useState } from "react"
import Buscador from "./components/Buscador.jsx"
import Header from "./components/Header.jsx"

function App() {
    const [atualInfoCEP, setAtualInfoCEP] = useState()

    return (
        <>
            <Header />
            <Buscador setAtualInfoCEP={setAtualInfoCEP} />
        </>
    )
}

export default App
