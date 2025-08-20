import BackButton from '@/components/BackButton/BackButton'
import { getSingleNote } from '@/lib/api/clientApi'

type Props = {
  params: Promise<{ noteId: string }>
}

const PreviewPage = async ({ params }: Props) => {
  const { noteId } = await params
  const note = await getSingleNote(noteId)
  return (
    <div>
      <hr />
      Note Preview
      <BackButton>Close</BackButton>
      <br />
      <h2>{note?.title}</h2>
      <p>{note?.content}</p>
    </div>
  )
}

export default PreviewPage
