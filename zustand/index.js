import { create } from 'zustand'

export const useStore = create((set) => ({
    input: [],
    setInput: (input) => set({ input }),
}))