import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";

function EditNote ({initialTitle, initialContent}){
    // managing title and content state variable

    const [title, setTitle] = useState(initialTitle);
    const [content,setContent] = useState(initialContent);
    const [isEditing, setIsEditing] = useState(false);

    //Function to handle saving the edited note
    const handleSave = () =>{
        //implement save logic here
    };

    return (
        <div className="edit-note">
            <h1>Edit Note</h1>
            <div>
                <label>Title:</label> 
                {isEditing ? (
                    <input
                    type="text"
                    value={title}
                    onChange={(event) =>setTitle(event.target.value)}
                    />
                ) : (
                    <div>{title}</div>
                )}
            </div>
            <div>
                <label>Content:</label>
                {isEditing ? (
                    <textarea
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    />
                ) : (
                    <div>{content}</div>
                )}
            </div>
            {isEditing ? (
                <button style={CustomButton} onClick={handleSave}>Update</button>
            ) : (
                <button style={CustomButton} onClick={() => setIsEditing(true)}>Edit</button>
            )}
            <Link to="/editnote"/>
           
        </div>
    );
}

        export default EditNote;