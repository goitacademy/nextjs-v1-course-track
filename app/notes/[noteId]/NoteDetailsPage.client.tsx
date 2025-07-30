'use client'

import { getSingleNote } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const NoteDetailsPageClient = () => {
  const { noteId } = useParams<{ noteId: string }>()

  const { data: note } = useQuery({
    queryKey: ['note', noteId],
    queryFn: () => getSingleNote(noteId),
    refetchOnMount: false,
  })

  const [isEdit, setIsEdit] = useState(false)

  const handleEdit = () => {
    setIsEdit(true)
  }

  return (
    <div>
      <button onClick={handleEdit}>Edit</button>
      {!isEdit ? (
        <>
          {' '}
          <h2>{note?.title}</h2>
          <br />
          <hr />
          <br />
          <p>{note?.content}</p>
        </>
      ) : (
        <form>
          <input type='text' placeholder='Title' />
          <button type='submit'>Update</button>
        </form>
      )}
    </div>
  )
}

export default NoteDetailsPageClient
