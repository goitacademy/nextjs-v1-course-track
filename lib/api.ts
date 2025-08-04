import axios from 'axios'

// axios.defaults.baseURL = 'https://next-docs-api.onrender.com'
axios.defaults.baseURL = 'http://localhost:4000'

export type NoteType = {
  id: 'string'
  title: 'string'
  content: 'string'
  categoryId: 'string'
  userId: 'string'
  createdAt: string
  updatedAt: string
}

export type NoteListType = {
  notes: NoteType[]
  total: number
}

export type CategoryType = {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

export const getNotes = async (categoryId?: string, title?: string) => {
  const { data } = await axios.get<NoteListType>('/notes', {
    params: {
      categoryId,
      title: title,
    },
  })
  return data
}

export const getSingleNote = async (id: string) => {
  const { data } = await axios.get<NoteType>(`/notes/${id}`)
  return data
}

export const getCategories = async () => {
  const { data } = await axios.get<CategoryType[]>(`/categories`)
  return data
}
