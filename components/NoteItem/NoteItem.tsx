import { NoteType } from '@/lib/api/clientApi'
import Link from 'next/link'

type Props = {
  note: NoteType
}
const NoteItem = ({ note }: Props) => {
  return (
    <li>
      <Link href={`/notes/${note.id}`}>{note.title}</Link>
    </li>
  )
}

export default NoteItem
