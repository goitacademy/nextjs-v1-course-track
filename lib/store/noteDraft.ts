import { create } from 'zustand'
import { CreateNoteData } from '../api/api'
import { persist } from 'zustand/middleware'

const defaultDraft: CreateNoteData = {
  title: '',
  content: '',
  categoryId: '',
}

type NoteDraft = {
  draft: CreateNoteData
  privateKey: string
  setDraft: (newData: CreateNoteData) => void
  clearDraft: () => void
}

export const useNoteDraft = create<NoteDraft>()(
  persist(
    (set) => {
      return {
        draft: defaultDraft,
        privateKey: 'asd',
        setDraft: (newData: CreateNoteData) => set({ draft: newData }),
        clearDraft: () => set({ draft: defaultDraft }),
      }
    },
    {
      name: 'draft',
      partialize: (state) => {
        return { draft: state.draft }
      },
    }
  )
)
