import React, { useState } from "react";
import { registerUser } from "../services/api";

const RegisterUser = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser(user);
        alert("User Registered!");
        setUser({ name: "", email: "", password: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register User</h2>
            <input name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
            <input name="email" placeholder="Email" type="email" value={user.email} onChange={handleChange} required />
            <input name="password" placeholder="Password" type="password" value={user.password} onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterUser;