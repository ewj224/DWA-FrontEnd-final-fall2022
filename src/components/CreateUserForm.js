import React from "react";

function CreateUserForm ({signUpUser}) {
    return (
    <form className = "FormElement" onSubmit={(e)=> signUpUser(e)}>
        <label htmlFor="displayName">Name</label>
        <input type="text" name="displayName"/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>


        <div>
            <button type="submit" className="Button">Create</button>
        </div>
    
    </form>
    );
}

export default CreateUserForm;