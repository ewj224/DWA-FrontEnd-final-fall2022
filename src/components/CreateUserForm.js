import React from "react";

function CreateUserForm ({signUpUser}) {
    return (
    <form className = "FormElement" onSubmit={(e)=> signUpUser(e)}>
        <label htmlfor="name">Name</label>
        <input type="name" name="name"/>
        <label htmlfor="email">Email</label>
        <input type="email" name="email"/>
        <label htmlfor="password">Password</label>
        <input type="password" name="password"/>

        <button type="submit" className="Button">Create</button>
    </form>
    );
}

export default CreateUserForm;