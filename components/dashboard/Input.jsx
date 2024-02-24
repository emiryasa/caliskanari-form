'use client'
import React, { useState } from 'react';

function Input({ name, text, ...props}) {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const isInputFilled = (props.value && props.value.length > 0) || isInputFocused;

    return (
        <div>
            <div className='relative group'>
                <label htmlFor={name}
                    className={`absolute left-4 top-3 select-none text-lightGray ${isInputFilled ? 'top-[-6px] text-xs px-1 left-[13px] bg-white' : 'text-base'} transition-all duration-200`}
                >{text}</label>
                <input 
                    className='w-full text-darkGray border rounded-md h-[50px] px-4 border-darkGray focus:border-[2px] focus:outline-none focus:ring-0 focus:border-primary'  
                    autoComplete="off" 
                    id={name} 
                    name={name}
                    {...props}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                />
            </div>
        </div>
    )
}

export default Input