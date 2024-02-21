import React, { useState } from 'react'
//Bu component henüz çalışmıyor
const EditableImage = ({initialSrc}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedSrc, setEditedSrc] = useState(initialSrc);
  
    const handleEdit = () => {
      setIsEditing(!isEditing);
      setEditedSrc(initialSrc);
    };
  
    const handleChange = (e) => {
      setEditedSrc(e.target.value);
    };
  
    const handleSave = () => {
      setIsEditing(false);
    };
  
    return (
      <div>
        {isEditing ? (
          <input
            type="text"
            value={editedSrc}
            onChange={handleChange}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <img
            className="absolute -top-14 right-3"
            src={editedSrc}
            alt=""
            onClick={handleEdit}
          />
        )}
    </div>
  )
}

export default EditableImage
{/* <img
className="absolute -top-14 right-3"
src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/themes/quiklearn/assets/element/red-star.svg" alt=""
/> */}