import NoteList from '@/components/NoteList/NoteList'
import Search from '@/components/Search/Search'
import { getNotes } from '@/lib/api'

type Props = {
  params: Promise<{ slug: string[] }>
}

const NotesByFilter = async ({ params }: Props) => {
  const { slug } = await params

  const response = await getNotes(slug[0] === 'all' ? undefined : slug[0], slug[1])

  return (
    <div style={{ paddingInline: '24px' }}>
      <Search categoryId={slug[0]} />
      <hr />
      <NoteList notes={response.notes} />
    </div>
  )
}

export default NotesByFilter
