import React from "react";

function CreateUserForm ({signUpUser}) {
    return (
    <form className = "FormElement" onSubmit={(e)=> signUpUser(e)}>
        <label htmlfor="displayName">Name</label>
        <input type="text" name="displayName"/>
        <label htmlfor="email">Email</label>
        <input type="email" name="email"/>
        <label htmlfor="password">Password</label>
        <input type="password" name="password"/>


        <div>
            <button type="submit" className="Button">Create</button>
        </div>
    
    </form>
    );
}

export default CreateUserForm;