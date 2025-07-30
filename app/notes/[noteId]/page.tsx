import { getSingleNote } from '@/lib/api'
import NoteDetailsPageClient from './NoteDetailsPage.client'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

type Props = {
  params: Promise<{ noteId: string }>
}

const NoteDetails = async ({ params }: Props) => {
  const { noteId } = await params

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['note', noteId],
    queryFn: () => getSingleNote(noteId),
  })
  // const note = await getSingleNote(noteId)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsPageClient />
    </HydrationBoundary>
  )
}

export default NoteDetails

// CSR in SSR >>>
// import Action from '@/components/Action/Action'
// import { getSingleNote } from '@/lib/api'

// type Props = {
//   params: Promise<{ noteId: string }>
// }

// const NoteDetails = async ({ params }: Props) => {
//   const { noteId } = await params
//   const note = await getSingleNote(noteId)

//   return (
//     <div>
//       <Action />
//       <br />
//       <h2>{note.title}</h2>
//       <br />
//       <hr />
//       <br />
//       <p>{note.content}</p>
//     </div>
//   )
// }

// export default NoteDetails
