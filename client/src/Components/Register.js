import React, {useState} from "react";

function Register () {
    const [user, setUser] = useState({ email: '', password: ''})
    const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })


    return(
        <form>
            <h1>Sign Up</h1>
            <field>
                <label>Email</label>
                <input onChange={handleChange} type="email" value={user.email} placeholder="email" name="email"/>
            </field>
            <field>
                <label>Password</label>
                <input onChange={handleChange} type="password"value={user.password} placeholder="password" name="password"/>
            </field>
            <button type="submit">Login</button>
        </form>   
    )
}

export default Register