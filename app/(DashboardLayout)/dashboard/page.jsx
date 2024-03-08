'use client'
import React, { useCallback } from 'react';
import { useStore } from '@/zustand/index';
import images from "@/components/constants/data.json";

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
        <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(sections).map(([sectionName, sectionData]) => (
                typeof sectionData === 'object' && (
                    <div key={sectionName} className="w-full sm:w-1/2 md:w-1/4 bg-blue-200 lg:w-1/4 xl:w-1/4 p-4">
                        <div className='width:80% h-auto'>
                            {images
                                .filter(image => image.name === sectionName)
                                .map(image => (
                                    <img
                                        key={image.id}
                                        src={image.url}
                                        alt={image.name}
                                        className='w-full h-auto object-cover'
                                    />
                                ))}
                        </div>
                        <h2 className="text-center text-white mb-4">{sectionName}</h2>
                        <SectionInputs
                            sectionName={sectionName}
                            sectionData={sectionData}
                            handleTextChange={handleTextChange}
                            handleColorChange={handleColorChange}
                        />
                    </div>
                )
            ))}
        </div>
    );
};

const SectionInputs = React.memo(({ sectionName, sectionData, handleTextChange, handleColorChange }) => (
    <div className="flex flex-col">
        {sectionData.map((section, index) => (
            <div key={index} className="mb-4">
                <input
                    className='border border-black text-black p-2'
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