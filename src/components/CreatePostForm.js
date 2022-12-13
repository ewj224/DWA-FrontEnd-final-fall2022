import React from "react";

function CreatePostForm  ({createPost}) {
    // CanvasContent, CanvasDate, CanvasTitle
    return (
    <div className="CreatePostWrapper">
        <form className = "CreateForm" onSubmit={(e)=> createPost(e)}>
        <label htmlfor="Title">Title</label>
        <input type="text" name="Title"/>
        <label htmlfor="Date">Date</label>
        <input type="text" name="Date"/>
        <label htmlfor="Content">Content</label>
        <input className="Content" type="text" name="Content"/>
        <select name="mood">
            <option value="">How are you feeling?</option>
            <option value="blue">Sad</option>
            <option value="yellow">Happy</option>
        </select>

        <div>
            <button type="submit" className="Button">Create</button>
        </div>
    
    </form>
    </div>
     );
}

export default CreatePostForm; 