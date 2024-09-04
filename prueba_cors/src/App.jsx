
import Note from './components/Note'
import noteServices from './services/noteServices'

import { useState, useEffect } from 'react'

const App = (props) => {
  const [notes,setNotes]=useState([])
  const [newNote,SetNewNote]=useState('nueva nota ...')

  
  const addNote=(event)=>{
    event.preventDefault()
    console.log('button clicked',event.target)
    const noteObject={
      content: newNote,
      important: Math.random()<0.5,
      // se va a eliminar el id
      // id: notes.length+1,
    }
    //se va a definir la funcion create() desde noteServices
    //axios.post('http://localhost:3001/notes',noteObject)
    noteServices.create(noteObject)
      .then(returnNote=>{
        setNotes(notes.concat(returnNote))
        SetNewNote('')
      })
  }

  const hook=()=>{
    //anteriormente quedaba
    //axios.get('http://localhost:3001/notes')
    //se va a llamar la funcion getAll() que se importo desde noteServices
    noteServices.getAll()
    .then(initialNotes=>setNotes(initialNotes))
  }
  useEffect(hook,[])
  //se va agregar un boton en cada uno de las notas para cambiar la importancia a lo contrario
  //de lo que originalmente se puso la nota
  //para eso se tiene que agregar un boton a la nota desde el complemento Note
  //dentro del boton del complemento Note se agrego el nombre de una funcion
  //llamada cambiarImportancia, ahora se va a definir esa funcion 

  const cambiarImportancia=(id)=>{
    //ahora se va a hacer una peticion put para cambiar la importancia de la nota
    //primero se buscar la nota por su id
    const note=notes.find(n=>n.id===id)
    //luego se va a definir la nueva nota mediate un spread
    //el spread (...) es crear un objeto identico, solo que se a cambiar la importancia a lo contrario
    const notaNueva={...note, important:!note.important}
    //ya con la nueva nota ahora hace una peticion put para cambiar la nota 
    //y seguido por una coma en la que se pondrá la nueva nota
    // axios.put(`http://localhost:3001/notes/${id}`,notaNueva)
    //ahora utilizando noteServices se definira la funcion update()
    noteServices.update(id,notaNueva)
    .then(returnNote=>{
        const updatedNotes = notes.map(note => note.id !== id ? note : returnNote);
        /*método map crea una nueva matriz al mapear cada elemento de la matriz anterior
        a un elemento de la nueva matriz. En nuestro ejemplo, la nueva matriz se crea de 
        forma condicional de modo que si note.id !== id es verdadero, 
        simplemente copiamos el elemento de la matriz anterior en la nueva matriz. 
        Si la condición es falsa, el objeto de nota devuelto por el servidor se agrega a la matriz.
        */
        setNotes(updatedNotes);  // Aquí se actualizaría el estado con la nueva lista de notas
        console.log(`se cambio la importancia del id ${returnNote.id} a ${returnNote.important}`)
      })
      // hay veces que el request falla, por eso se pone un catch 
      //catch es para manejar errores y se pone siempre al final del request
      .catch(error=>{
        //en este caso se va a enviar un error a la consola
        alert(`la nota ${note.content} no se encuentra en el servidor`)
        //y se actualizara el estado notes con la nota original
        setNotes(notes.filter(n=>n.id!==id))
      })

  }
  const handleNoteChange=(event)=>{
    SetNewNote(event.target.value)
  }
  
  return (
    <div>
      <h1>Notes</h1>
      <ul>  
        {notes.map(note => 
          <Note key={note.id} note={note} cambiarImportancia={()=>cambiarImportancia(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}> 
         <input value={newNote} onChange={handleNoteChange}/>
          <button type='submit'> save</button>
      </form>
  
    </div>
  )
}

export default App