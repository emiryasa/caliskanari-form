'use client'
import React, { useState } from 'react'

const EditableClientSlider = ({initialText, className}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(initialText);
  
    const handleEdit = () => {
      setIsEditing(!isEditing);
    };
  
    const handleChange = (e) => {
      setEditedText(e.target.value);
    };
  
    const handleSave = () => {
      onSave(editedText);
      setIsEditing(false);
    };
 
    return (
      <div>
        {isEditing ? (
          <input
            type="text"
            className={className}
            value={editedText}
            onChange={handleChange}
            onBlur={handleSave}
            // size={editedText.length}
            autoFocus 
          />
        ) : (
          <p onClick={handleEdit} className={className}>
            {initialText}
          </p>
        )}
      </div>
    );
}

export default EditableClientSlider