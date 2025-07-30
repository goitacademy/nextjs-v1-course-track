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

export const getNotes = async () => {
  const { data } = await axios.get<NoteListType>('/notes')
  return data
}

export const getSingleNote = async (id: string) => {
  const { data } = await axios.get<NoteType>(`/notes/${id}`)
  return data
}
