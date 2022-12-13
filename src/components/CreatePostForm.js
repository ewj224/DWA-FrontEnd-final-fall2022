import React from "react";

function CreatePostForm  ({createPost}) {
    // CanvasContent, CanvasDate, CanvasTitle
    return (
    <div className="CreatePostWrapper">
        <form className = "CreateForm" onSubmit={(e)=> createPost(e)}>
        <label htmlFor="Title">Title</label>
        <input type="text" name="Title"/>
        <label htmlFor="Date">Date</label>
        <input type="text" name="Date"/>
        <label htmlFor="Content">Content</label>
        <input className="Content" type="text" name="Content"/>
        <select name="Mood">
            <option value="">How are you feeling?</option>
            <option value="#9bf6ff">Sad</option>
            <option value="#fdffb6">Happy</option>
        </select>
        {/* <label htmlfor="Mood">Mood</label>
        <input className="Mood" type="text" name="Mood"/> */}

        <div>
            <button type="submit" className="Button">Create</button>
        </div>
    
    </form>
    </div>
     );
}

export default CreatePostForm; 