import React, { useState } from 'react'

const EditableTextComponent = ({ initialText, onSave, className }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(initialText);
  
    const handleEdit = () => {
      setIsEditing(!isEditing);
      setEditedText(initialText);
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
            // className='flex justify-center items-center bg-transparent'
            value={editedText}
            onChange={handleChange}
            onBlur={handleSave}
            autoFocus
            size={editedText.length} 
          />
        ) : (
          <p onClick={handleEdit}>{initialText}</p>
        )}
      </div>
    );
  }
  
  export default EditableTextComponent;