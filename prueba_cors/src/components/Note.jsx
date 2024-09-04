const Note = ({ note, cambiarImportancia }) => {
  return (
    <li>{note.content}{
      <button onClick={cambiarImportancia}>cambiar</button>
    }</li>
  )
}

export default Note