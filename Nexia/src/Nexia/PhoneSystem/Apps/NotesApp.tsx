/* Hooks */
import { useEffect, useState } from "react"

/* Images */
import trash from "../../../assets/Icons/trash_light.svg"
import forwardBack from "../../../assets/Icons/forward_dark.svg"



/* Render */
const NotesApp = () => {
  // Text description
  type Note = {
    id: number
    title: string
    description: string
  }
  const [text, setText] = useState<Note[]>([])
  const [note, setNote] = useState<number | null>(null)
  

  useEffect(() => {
    const saved = localStorage.getItem("notes")
    if (saved) {
      setText(JSON.parse(saved))
    } else {
      setText([{ id: 1, title: "Nota 1", description: "Sin descripción" }])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(text))
  }, [text])

  const openNote = (id: number) => {
    setNote(id)
  }
  const currentNote = text.find(n => n.id === note)
  const updateNote = (field: "title" | "description", value: string) => {
    if (!note) return

    setText(prev => 
      prev.map(n => 
        n.id === note ? { ...n, [field]: value } : n
      )
    )
  }


  // New note
  const AddNote = () => {
    const newNote = {
      id: Date.now(),
      title: `Nota ${text.length + 1}`,
      description: "Sin descripción"
    }

    setText(prev => [...prev, newNote])
  }

  // Remove note
  const RemoveNote = (id: number) => {
    setText(prev => prev.filter(n => n.id !== id))
  }



  if (text.length > 20) return null



  return (
    <>
      <div className="Container-app-screen-notes">


        {note === null && (
          <>  
            <h2 className="title-app-screen-notes">Notas</h2>

            <div className="contain-app-text-notes">
              {text.map(v => (
                <div 
                  key={v.id} 
                  className="box-app-notes"
                  onClick={() => openNote(v.id)}
                >

                  <h2 className="title-app-notes">
                    {v.title.length > 15
                      ? v.title.slice(0, 15) + "..."
                      : v.title}
                  </h2>

                  <p className="text-app-notes">
                    {v.description.length > 15 
                      ? v.description.slice(0, 20) + "..."
                      : v.description}
                  </p>

                  <button className="button-image-app-trash-note"
                    onClick={(e) => {
                      e.stopPropagation()
                      RemoveNote(v.id)
                    }} 
                  >
                    <img className="image-app-trash-note" 
                      src={trash} 
                      alt="trash" 
                    />
                  </button>
                  
                </div>
              ))}
            </div> 

            <button className="button-screen-notes" onClick={AddNote}>+</button>
          </>
        )}


        {note !== null && currentNote && (
          <div className="container-app-edit-notes">
            <div className="contain-app-edit-notes">

              <div className="box-input-edit-notes">
                <p>Título:</p>

                <input 
                  className="input-edit-notes" 
                  type="text" 
                  value={currentNote.title}
                  onChange={(e) => updateNote("title", e.target.value)}
                />
              </div>

              <div className="box-textarea-edit-notes">
                <p>Descripción:</p>

                <textarea 
                  className="textarea-edit-notes" 
                  onChange={(e) =>
                    updateNote("description", e.target.value)
                  } 
                  value={currentNote.description} 
                  maxLength={500} 
                />

                <span className="change-span-edit-notes">
                  {500 - currentNote.description.length}/500
                </span>

                <button onClick={() => setNote(null)} className="button-goback-edit-notes">
                  <img className="image-app-gobakc-notes" src={forwardBack} alt="Atrás" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </>
  )
}

export default NotesApp
