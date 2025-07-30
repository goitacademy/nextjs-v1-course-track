import NoteList from '@/components/NoteList/NoteList'
import { getNotes } from '@/lib/api'

const Notes = async () => {
  const response = await getNotes()
  return (
    <div style={{ paddingInline: '24px' }}>
      <NoteList notes={response.notes} />
    </div>
  )
}

export default Notes

// 'use client'
// import NoteList from '@/components/NoteList/NoteList'
// import { getNotes, NoteType } from '@/lib/api'
// import { useState } from 'react'

// const Notes = () => {
//   const [notes, setNotes] = useState<NoteType[]>([])

//   const handleClick = async () => {
//     const response = await getNotes()
//     setNotes(response.notes)
//   }
//   return (
//     <div style={{ paddingInline: '24px' }}>
//       <button onClick={handleClick}>Get notes</button>
//       <br />
//       <br />
//       <NoteList notes={notes} />
//     </div>
//   )
// }

// export default Notes
