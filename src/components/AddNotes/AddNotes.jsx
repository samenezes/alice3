import "./AddNotesStyles.css"

const AddNotes = ({notes}) => {
    return (
        <div className="container">
            <h1>Notas Adicionadas</h1>
            {notes?.map(n => (
                <label>{note?.name}</label>
            ))}
        </div>
    )
}

export default AddNotes