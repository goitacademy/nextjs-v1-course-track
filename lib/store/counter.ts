import { create } from 'zustand'

type CounterType = {
  value: number
  value2: number
  increment: () => void
}

export const useCounter = create<CounterType>((set) => {
  return {
    value: 10,
    increment: () => set((old) => ({ value: old.value + 1 })),
    value2: 0,
    setValue2: (newV: number) => set({ value2: newV }),
  }
})
