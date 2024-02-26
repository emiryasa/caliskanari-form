'use client'
import { FcIdea } from 'react-icons/fc'
import { GiTiedScroll } from 'react-icons/gi'
import { TfiCup } from 'react-icons/tfi'
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
        { name: "header", textColor: '#f8fafc', text: 'Etkileşimli öğrenme', icon: GiTiedScroll,},
        { name: "text", textColor: '#f8fafc', text: 'Öğrencilerin aktivite ve oyunlar ile hem eğlendikleri hem de öğrendikleri eğitim sistemi' },
       
        { name: "headerSecond", textColor: '#f8fafc', text: 'İstatistikler ve Analizler', icon: FcIdea}, 
        { name: "textSecond", textColor: '#f8fafc', text: 'Öğrencilerin etkileşimlerdeki başarı oranları, istatistikleri veren ve takip eden öğretmenlere özel alt yapı' },
    
        { name: "headerThird", textColor: '#f8fafc', text: 'Öğretmenlere özel Altyapı', icon: TfiCup },
        { name: "textThird", textColor: '#f8fafc', text: 'Öğretmenlerin kendi sınıflarını oluşturup öğrenciler ile sınıf süreçlerini yönetebildiği altyapı' },
      ],
    topClassCourses: [
        { name: "headerTop", textColor: '#000000', text: 'EĞLENDİRİRKEN ÖĞRETEN UYGULAMA' },
        { name: "headerMain", textColor: '#000000', text: 'Şimdi Eğitici Alıştırmaları Keşfet' },
        { name: "description", textColor: '#000000', text: 'Sınıf seviyenize müfredat ilerleyişine uygun ilerleyiş ve %100 MEB uyumlu alıştırmalar' },
    ],
    topCoursesCard:[
        { name: "header1", textColor: '#000000', text: '1.Sınıf' },
        { name: "text1", textColor: '#000000', text: '1 Aktif Kurs' },
        { name: "header2", textColor: '#000000', text: '2.Sınıf' },
        { name: "text2", textColor: '#000000', text: '2 Aktif Kurs' },
        { name: "header3", textColor: '#000000', text: '3. Sınıf' },
        { name: "text3", textColor: '#000000', text: '3 Aktif Kurs' },
        { name: "header4", textColor: '#000000', text: '4.Sınıf' },
        { name: "text4", textColor: '#000000', text: '2 Aktif Kurs' },
        { name: "header5", textColor: '#000000', text: '5.Sınıf' },
        { name: "text5", textColor: '#000000', text: '1 Aktif Kurs' },
        { name: "header6", textColor: '#000000', text: '6.Sınıf' },
        { name: "text6", textColor: '#000000', text: '2 Aktif Kurs' },
        { name: "header7", textColor: '#000000', text: '77.Sınıf' },
        { name: "text7", textColor: '#000000', text: '3 Aktif Kurs' },
        { name: "header8", textColor: '#000000', text: '8.Sınıf' },
        { name: "text8", textColor: '#000000', text: '2 Aktif Kurs' },
    ],
    learnersStudents: [
        { name: "header1", textColor: '#000000', text: 'LEARNERS AND STUDENTS' },
        { name: "header2", textColor: '#000000', text: 'Evde, Okulda ve Nerede İstersen Orada, Alıştırmalar ile Pekiştirebilir ve Öğrenebilirsiniz' },
        { name: "header3", textColor: '#000000', text: 'Bilgiler okulda öğrenildiğinde, evde tekrar edildiğinde farklı akıllı alıştırmalar ile pekiştirildiğinde çok daha kalıcı ve unutulmadığı bilimsel olarak kanıtlanmıştır!' },
        { name: "button", textColor: '#000000', text: 'Etkili Alıştırmaları Keşfet' },
    ],
    featuredCourses: [
        { name: "header1", textColor: '#000000', text: 'Alıştırmalar' },
        { name: "header2", textColor: '#000000', text: 'Etkileşimli İçerikleri İncele' },
        { name: "button1", textColor: '#000000', text: 'Hepsi' },
        { name: "button2", textColor: '#000000', text: 'Matematik' },
        { name: "button3", textColor: '#000000', text: 'Türkçe' },
        { name: "button4", textColor: '#000000', text: 'Fen Bilimleri' },
        { name: "button5", textColor: '#000000', text: 'İngilizce' },
        { name: "badge1", textColor: '#000000', text: 'Business' },
        { name: "badge2", textColor: '#000000', text: 'Technology' },
        { name: "badge3", textColor: '#000000', text: 'Development' },
        { name: "badge4", textColor: '#000000', text: 'Finance' },
        { name: "title1", textColor: '#000000', text: 'The Complete Android Development Course' },
        { name: "title2", textColor: '#000000', text: 'The Complete Java Development Course' },
        { name: "title3", textColor: '#000000', text: 'The Complete Wordpress Development Course' },
        { name: "title4", textColor: '#000000', text: 'The Complete React Native Development Course' },

        { name: "title5", textColor: '#000000', text: 'JQuery and JavaScript Development Course' },
        { name: "title6", textColor: '#000000', text: 'The Complete Cyber Security Course' },
        { name: "title7", textColor: '#000000', text: 'The Complete SEO & Digital Marketing Course Development Course' },
        { name: "title8", textColor: '#000000', text: 'The Complete C++ Development Course' },
    ],

    videoSection: [
        { name: "header", textColor: '#000000', text: 'Çalışkan Arı Dijital İçerikler Nasıl Kullanılır' },
        { name: "header1", textColor: '#000000', text: 'Smart LMS' },
        { name: "description1", textColor: '#000000', text: 'When an unknown printer took alley ffer area typey and scrambled to make a type specimen book has' },
        { name: "header2", textColor: '#000000', text: 'Easy To Customize' },
        { name: "description2", textColor: '#000000', text: 'When an unknown printer took alley ffer area typey and scrambled to make a type specimen book has' },
        { name: "header3", textColor: '#000000', text: 'Powerfull Dashboard' },
        { name: "description3", textColor: '#000000', text: 'When an unknown printer took alley ffer area typey and scrambled to make a type specimen book has' },
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
