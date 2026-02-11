/* Hooks */
import { useState } from "react"

/* Images */
import trash from "../../../assets/Icons/trash_light.svg"



/* Render */
type Props = {
  onBack: () => void
}
const NotesApp = ({ onBack }: Props) => {
  const [text, setText] = useState<string>("")
  const [note, setNote] = useState([{ id: 1, title: "Nota 1", description: "Sin descripción" }])


  const AddNote = () => {
    setNote(prev => [
      ...prev,
      {
        id: Date.now(),
        title: `Nota ${prev.length + 1}`,
        description: "Sin descripción"
      }
    ])
  }

  const RemoveNote = (id: any) => {
    setNote(prev => prev.filter(n => n.id !== id))
  }

  if (setText.length > 20) return null
  


  return (
    <>
      <div className="Container-app-screen-notes">

        <h2 className="title-app-screen-notes">Notas</h2>

        <div className="contain-app-text-notes">
          {note.map(v => (
            <div key={v.id} className="box-app-notes">

              <h2 className="title-app-notes">{v.title}</h2>

              <p className="text-app-notes">{text.length > 15 ? text.slice(0, 20) + "...": v.description}</p>

              <img className="image-app-trash-note" src={trash} alt="trash" onClick={() => RemoveNote(v.id)} />

            </div>
          ))}
        </div>

        <button className="button-screen-notes" onClick={AddNote}>+</button>
        
      </div>
    </>
  )
}

export default NotesApp