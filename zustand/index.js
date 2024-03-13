import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(persist((set) => ({
    mainSection: [
        { name: "header", textColor: '#241442', text: 'Çalışkan Arı İle Öğrenmek Artık Çok Kolay' },
        { name: "text", textColor: '#FFFFFF', text: 'Okul dönemlerinde her gün binlerce öğrencimiz, %100 MEB uyumlu Çalışkan Arı Akademi ile öğrendiklerini pekiştiriyor ve geliştiriyor.' },
        { name: "button", textColor: '#FFFFFF', text: 'Etkileşimli Alıştırmaları Keşfet' },
    ],

    infoSection: [
        { name: "header", textColor: '#f8fafc', text: 'Etkileşimli öğrenme' },
        { name: "text", textColor: '#f8fafc', text: 'Öğrencilerin aktivite ve oyunlar ile hem eğlendikleri hem de öğrendikleri eğitim sistemi' },

        { name: "headerSecond", textColor: '#f8fafc', text: 'İstatistikler ve Analizler' },
        { name: "textSecond", textColor: '#f8fafc', text: 'Öğrencilerin etkileşimlerdeki başarı oranları, istatistikleri veren ve takip eden öğretmenlere özel alt yapı' },

        { name: "headerThird", textColor: '#f8fafc', text: 'Öğretmenlere özel Altyapı' },
        { name: "textThird", textColor: '#f8fafc', text: 'Öğretmenlerin kendi sınıflarını oluşturup öğrenciler ile sınıf süreçlerini yönetebildiği altyapı' },
    ],

    topClassCourses: [
        { name: "headerTop", textColor: '#000000', text: 'EĞLENDİRİRKEN ÖĞRETEN UYGULAMA' },
        { name: "headerMain", textColor: '#000000', text: 'Şimdi Eğitici Alıştırmaları Keşfet' },
        { name: "description", textColor: '#000000', text: 'Sınıf seviyenize müfredat ilerleyişine uygun ilerleyiş ve' },
        { name: "description2", textColor: "#000000", text: '%100 MEB uyumlu alıştırmalar'},
    ],

    topCoursesCard: [
        { name: "header1", textColor: '#241442', text: '1.Sınıf' },
        { name: "text1", textColor: '#4f536c', text: '1 Aktif Kurs' },
        { name: "header2", textColor: '#241442', text: '2.Sınıf' },
        { name: "text2", textColor: '#4f536c', text: '2 Aktif Kurs' },
        { name: "header3", textColor: '#241442', text: '3. Sınıf' },
        { name: "text3", textColor: '#4f536c', text: '3 Aktif Kurs' },
        { name: "header4", textColor: '#241442', text: '4.Sınıf' },
        { name: "text4", textColor: '#4f536c', text: '2 Aktif Kurs' },
        { name: "header5", textColor: '#241442', text: '5.Sınıf' },
        { name: "text5", textColor: '#4f536c', text: '1 Aktif Kurs' },
        { name: "header6", textColor: '#241442', text: '6.Sınıf' },
        { name: "text6", textColor: '#4f536c', text: '2 Aktif Kurs' },
        { name: "header7", textColor: '#241442', text: '7.Sınıf' },
        { name: "text7", textColor: '#4f536c', text: '3 Aktif Kurs' },
        { name: "header8", textColor: '#241442', text: '8.Sınıf' },
        { name: "text8", textColor: '#4f536c', text: '2 Aktif Kurs' },
    ],

    learnersStudents: [
        { name: "header1", textColor: '#4f536c', text: 'LEARNERS AND STUDENTS' },
        { name: "header2", textColor: '#241442', text: 'Evde, Okulda ve Nerede İstersen Orada, Alıştırmalar ile Pekiştirebilir ve Öğrenebilirsiniz' },
        { name: "header3", textColor: '#4f536c', text: 'Bilgiler okulda öğrenildiğinde, evde tekrar edildiğinde farklı akıllı alıştırmalar ile pekiştirildiğinde çok daha kalıcı ve unutulmadığı bilimsel olarak kanıtlanmıştır!' },
        { name: "button",  textColor: '#4f536c', text: 'Etkili Alıştırmaları Keşfet' },
    ],

    featuredCourses: [
        { name: "header1", textColor: '#4f536c', text: 'Alıştırmalar' },
        { name: "header2", textColor: '#241442', text: 'Etkileşimli İçerikleri İncele' },
        { name: "button1", textColor: '#000000', text: 'Hepsi' },
        { name: "button2", textColor: '#000000', text: 'Matematik' },
        { name: "button3", textColor: '#000000', text: 'Türkçe' },
        { name: "button4", textColor: '#000000', text: 'Fen Bilimleri' },
        { name: "button5", textColor: '#000000', text: 'İngilizce' },
    ],

    videoSection: [
        { name: "header", textColor: '#FFFFFF', text: 'Çalışkan Arı 1. Sınıf 2. Dönem Seti Çıktı!' },
        { name: "title1", textColor: '#FFFFFF', text: 'Kazanım Odaklı' },
        { name: "description1", textColor: '#4f536c', text: 'When an unknown printer took alley ffer area typey and scrambled to make a type specimen book has' },
        { name: "title2", textColor: '#FFFFFF', text: 'Haftalık Tekrar' },
        { name: "description2", textColor: '#4f536c', text: 'When an unknown printer took alley ffer area typey and scrambled to make a type specimen book has' },
        { name: "title3", textColor: '#FFFFFF', text: 'Serbest Etkinlik' },
        { name: "description3", textColor: '#4f536c', text: 'When an unknown printer took alley ffer area typey and scrambled to make a type specimen book has' },
    ],

    instructorsSection: [
        { name: "header1", textColor: '#4f536c', text: 'OUR INSTRUCTURES' },
        { name: "header2", textColor: '#241442', text: 'Greatest Teachers Inspire' },
        { name: "header3", textColor: '#4f536c', text: 'When An Unknown Printer Took A Galley Offer Area Type Scrambled To Make A Type Specimen Book' },
        { name: "button", textColor: '#FFFFFF', text: 'See All Instructures' },
    ],

    counterSection: [
        { name: "header1", textColor: '#FFFFFF', text: 'Join In On' },
        { name: "header2", textColor: '#FFFFFF', text: 'Something Big' },
    ],

    clientsSection: [
        { name: "header1", textColor: '#4f536c', text: 'Our Clients' },
        { name: "header2", textColor: '#241442', text: 'What is Our Real Client Stories About Our Work & Passion' },
        { name: "header3", textColor: '#4f536c', text: 'When An Un Known Printer Took A Gallery Of Type And Scrambled it To Make A Type SpecimentBook' },
    ],

    bannerSection: [
        { name: "header", textColor: '#FFFFFF', text: 'dfsfdfs' },
        { name: "text", textColor: '#FFFFFF', text: 'Section 2' },
        { name: "button", textColor: '#FFFFFF', text: 'Section 3' },
    ],

    becomeInstructorSection: [
        { name: "header", textColor: '#4f536c', text: 'BECOME AN INSTRUCTOR' },
        { name: "text", textColor: '#241442', text: 'Let`s Join Us Spread Your Knowledge' },
        { name: "text2", textColor: '#4f536c', text: 'When An Unknown Printer Took A Galley Offer Area Type And Scrambled To Make A Type Specimen Bookan Unknown Printer Took Alley Ffer Area Typey And Scrambled To Make A Type Specimen Book Hass' },
        { name: "button", textColor: '#FFFFFF', text: 'BECOME AN INSTRUCTOR' },
    ],

    logoBanner: [
        { name: "header", textColor: '#212121', text: 'Trusted By Over 13,400 Great Teams' },
        { name: "text", textColor: '#4f536c', text: 'Leasing Companies Use The Same Courses To Help Employees Keep Their Skills Fresh.' },
    ],

    blogSection: [
        { name: "header", textColor: '#4f536c', text: 'Section 1' },
        { name: "text", textColor: '#241442', text: 'Section 2' },
        { name: "button", textColor: '#4f536c', text: 'Section 3' },
    ],

    lastBanner: [
        { name: "header", textColor: '#FFFFFF', text: 'Affordable Online Courses & Learning Opportunities For You' },
        { name: "button", textColor: '#543EE8', text: 'Start Learning Today'}
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
