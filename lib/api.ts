import axios from 'axios'

// axios.defaults.baseURL = 'https://next-docs-api.onrender.com'
// axios.defaults.baseURL = 'http://localhost:3000/api'
const nextServer = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
})

export type CreateNoteData = {
  title: string
  content: string
  categoryId: string
}

export type NoteType = {
  id: string
  title: string
  content: string
  categoryId: string
  userId: string
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

export type LoginRequestData = {
  email: string
  password: string
}

export type RegisterRequestData = {
  email: string
  password: string
  userName: string
}

export type User = {
  id: string
  email: string
  username: string
  role: string
  createdAt: string
  updatedAt: string
}

export const getNotes = async (categoryId?: string, title?: string) => {
  const { data } = await nextServer.get<NoteListType>('/notes', {
    params: {
      categoryId,
      title: title,
    },
  })
  return data
}

export const getSingleNote = async (id: string) => {
  const { data } = await nextServer.get<NoteType>(`/notes/${id}`)
  return data
}

export const getCategories = async () => {
  const { data } = await nextServer.get<CategoryType[]>(`/categories`)
  return data
}

export const createNote = async (payload: CreateNoteData) => {
  const { data } = await nextServer.post<NoteType>(`/notes`, payload)
  return data
}

export const login = async (payload: LoginRequestData) => {
  const { data } = await nextServer.post<User>(`/auth/login`, payload)
  return data
}

export const register = async (payload: RegisterRequestData) => {
  const { data } = await nextServer.post<User>(`/auth/register`, payload)
  return data
}
