import "./NotesPageStyles.css"
import { useState } from "react"

const NotesPage = () => {
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    return (
        <div className="container">
            <h2>Adicione uma nova nota</h2>
            <div className="input-container">
                <div>
                    <h3>Título:</h3>
                    <input placeholder="Digite um título..." value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <h3>Conteúdo:</h3>
                    <input placeholder="Digite o conteúdo..." value={content} onChange={(e) => setContent(e.target.value)}/>
                </div>
            </div>
            <button>Adicionar</button>
        </div>
    )
}

export default NotesPage