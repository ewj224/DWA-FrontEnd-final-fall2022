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
        <textarea className="CreatePostContent" type="text" name="Content"/>
        <div className="Mood">
            <select name="Mood">
                <option value="">How are you feeling?</option>
                <option value="#9bf6ff">Surprise</option>
                <option value="#fdffb6">Happy</option>
                <option value="#bdb2ff">Sad</option>
                <option value="#ffd6a5">Fear</option>
                <option value="#caffbf">Digust</option>
                <option value="#ffadad">Anger</option>

            </select>
        </div>
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