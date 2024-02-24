'use client'
import React, { useCallback } from 'react';
import { useStore } from '@/zustand/index';

export const Page = () => {
    const sections = useStore(state => state);
    const { updateSectionText, updateSectionColor } = useStore();

    const handleTextChange = useCallback((sectionName, newText, index) => {
        updateSectionText(sectionName, newText, index);
    }, [updateSectionText]);

    const handleColorChange = useCallback((sectionName, newColor, index) => {
        updateSectionColor(sectionName, newColor, index);
    }, [updateSectionColor]);

    return (
        <div className="flex items-center justify-center">
            <div className="text-sm ">
                {Object.entries(sections).map(([sectionName, sectionData]) => (
                    typeof sectionData === 'object' && (
                        <SectionInputs
                            key={sectionName}
                            sectionName={sectionName}
                            sectionData={sectionData}
                            handleTextChange={handleTextChange}
                            handleColorChange={handleColorChange}
                        />
                    )
                ))}
            </div>
        </div>
    );
};

const SectionInputs = React.memo(({ sectionName, sectionData, handleTextChange, handleColorChange }) => (
    <div>
        {sectionData.map((section, index) => (
            <div key={index}>
                <input
                    className='border border-black text-black'
                    name={`text-${sectionName}-${index}`}
                    value={section.text || ''}
                    onChange={(e) => handleTextChange(sectionName, e.target.value, index)}
                />
                <input
                    className='border border-black text-black'
                    name={`color-${sectionName}-${index}`}
                    value={section.textColor || ''}
                    type="color"
                    onChange={(e) => handleColorChange(sectionName, e.target.value, index)}
                />
            </div>
        ))}
    </div>
));

export default Page;
