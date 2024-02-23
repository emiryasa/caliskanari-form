"use client"
import React, { useState } from 'react'

const MyInput = ({ id, text, handleTextChange, handleUpdateTexts }) => {
  const [id, setId] = useState('');
  const [text, setText] = useState('');

  const handleUpdateText = () => {
    onUpdateText(id, text);
    // Bu kısımda gerekirse id ve text state'lerini temizleyebilirsiniz.
    setId('');
    setText('');
  };
  return (
    <div>
      <div className='relative group'>
        <label className='text-cst_grey ms-1'>ID'sini girin</label>
        <input
          className='w-full text-darkGray border rounded-lg h-[50px] px-4 border-darkGray focus:border-[2px] focus:outline-none focus:ring-0 focus:border-primary mb-10'
          type="text"
          autoComplete="off"
          id={id}
          name={id}
          onChange={(e) => handleTextChange(e, id)}
        />
        <label className='text-cst_grey ms-1'>Değiştirmek istediğiniz text'i girin</label>
        <input
          className='w-full text-darkGray border rounded-lg h-[50px] px-4 border-darkGray focus:border-[2px] focus:outline-none focus:ring-0 focus:border-primary mb-10 '
          type="text"
          autoComplete="off"
          id={text}
          name={text}
          onChange={(e) => handleTextChange(e, text)}
        />
      </div>
      <div className='flex justify-center items-center'>
        <button onClick={handleUpdateTexts} className='border border-red-400 p-5 rounded-lg bg-red-300 text-white hover:text-red-500 hover:bg-red-200 font-semibold'>DEĞİŞTİR</button>
      </div>
    </div>
  )
}

export default MyInput