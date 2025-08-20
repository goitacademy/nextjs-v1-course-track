import { NoteType } from '@/lib/api/clientApi'
import NoteItem from '../NoteItem/NoteItem'

type Props = {
  notes: NoteType[]
}
const NoteList = ({ notes }: Props) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </ul>
  )
}

export default NoteList
