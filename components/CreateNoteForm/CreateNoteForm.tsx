'use client'

import { CategoryType, createNote, CreateNoteData } from '@/lib/api'
import { useNoteDraft } from '@/lib/store/noteDraft'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent, ChangeEventHandler } from 'react'

type Props = {
  categories: CategoryType[]
}

const CreateNoteForm = ({ categories }: Props) => {
  const { draft, setDraft, clearDraft } = useNoteDraft()
  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      clearDraft()
      router.push('/notes')
    },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDraft({
      ...(draft as CreateNoteData),
      [e.target.name as keyof CreateNoteData]: e.target.value,
    })
  }

  const handleSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData) as CreateNoteData
    mutate(data)
  }
  return (
    <form action={handleSubmit}>
      <label>
        Title
        <input type='text' name='title' onChange={handleChange} defaultValue={draft.title} />
      </label>
      <br />
      <label>
        Content
        <input type='text' name='content' onChange={handleChange} defaultValue={draft.content} />
      </label>
      <br />
      <label>
        Category
        <select name='categoryId' onChange={handleChange} defaultValue={draft.categoryId}>
          {categories.map((cat) => (
            <option value={cat.id} key={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type='submit' disabled={isPending}>
        {isPending ? 'Creating...' : 'Create'}
      </button>
    </form>
  )
}

export default CreateNoteForm
