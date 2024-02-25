'use client'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(persist((set) => ({
    searchBar: [
        { name: "header", textColor: '#000000', buttonColor: "#543EE8", hoverColor: "#241442", text: 'Ara' },
    ],
    mainSection: [
        { name: "header", textColor: '#241442', text: 'Çalışkan Arı İle Öğrenmek Artık'},
        { name: "header", textColor: '#241442', text:'Çok Kolay'},
        { name: "text", textColor: '#000000', text: 'Okul dönemlerinde her gün binlerce öğrencimiz, %100 MEB uyumlu Çalışkan Arı Akademi ile öğrendiklerini pekiştiriyor ve geliştiriyor.' },
        { name: "button", textColor: '#000000', buttonColor: "#0169fd", hoverColor: "#001e9d", text: 'Etkileşimli Alıştırmaları Keşfet' },
    ],
    infoSection: [
        { name: "header", textColor: '#000000', text: 'Etkileşimli öğrenme' },
        { name: "text", textColor: '#000000', text: 'Öğrencilerin aktivite ve oyunlar ile hem eğlendikleri hem de öğrendikleri eğitim sistemi' },
        { name: "header", textColor: '#000000', text: 'İstatistikler ve Analizler' },
        { name: "text", textColor: '#000000', text: 'Öğrencilerin etkileşimlerdeki başarı oranları, istatislikleri veren ve takip eden öğretmenlere özel alt yapı' },
        { name: "header", textColor: '#000000', text: 'Öğretmenlere özel Altyapı' },
        { name: "text", textColor: '#000000', text: 'Öğretmenlerin kendi sınıflarını oluşturup öğrenciler ile sınıf süreçlerini yönetebildiği altyapı' },
    ],
    topClassCourses: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    learnerStudents: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    featuredCourses: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    videoSection: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    instructorsSection: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    counterSection: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    clientsSection: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    bannerSection: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    becomeInstructorSection: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    logoBanner: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    blogSection: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    lastBanner: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    footer: [
        { name: "header", textColor: '#000000', text: 'Section 1' },
        { name: "text", textColor: '#000000', text: 'Section 2' },
        { name: "button", textColor: '#000000', text: 'Section 3' },
    ],
    updateSectionColor: (sectionName, color, index) => set(state => ({
        ...state,
        [sectionName]: state[sectionName].map((section, i) =>
            i === index ? { ...section, textColor: color } : section
        )
    })),

    updateSectionText: (sectionName, text, index) => set(state => ({
        ...state,
        [sectionName]: state[sectionName].map((section, i) =>
            i === index ? { ...section, text } : section
        )
    })),
}),
    {
        name: 'sections-storage',
        storage: createJSONStorage(() => localStorage),
    }
))
