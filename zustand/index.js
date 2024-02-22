import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(persist((set) => ({
    sections: [
        { id: 1, color: '#FFFFFF', text: ' ARE YOU READY FOR THIS OFFER ' },
        { id: 2, color: '#FFFFFF', text: 'Section 2' },
        { id: 3, color: '#FFFFFF', text: 'Section 3' },
    ],
    updateSectionColor: (sectionId, color) =>
        set(state => ({
            sections: state.sections.map((section) =>
                section.id === sectionId ? { ...section, color } : section
            ),
        })),
    updateSectionText: (sectionId, text) =>
        set(state => ({
            sections: state.sections.map((section) =>
                section.id === sectionId ? { ...section, text } : section
            ),
        })),
}),
    {
        name: 'sections-storage',
        storage: createJSONStorage(() => localStorage),
    }
))
