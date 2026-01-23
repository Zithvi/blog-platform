import React, { useState } from "react";
import { addJob } from "../services/api";

const AddJob = () => {
    const [job, setJob] = useState({
        title: "",
        company: "",
        location: "",
        description: "",
        deadline: "",
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addJob(job);
        alert("Job Added Successfully!");
        setJob({ title: "", company: "", location: "", description: "", deadline: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Job</h2>
            <input name="title" placeholder="Title" value={job.title} onChange={handleChange} required />
            <input name="company" placeholder="Company" value={job.company} onChange={handleChange} required />
            <input name="location" placeholder="Location" value={job.location} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={job.description} onChange={handleChange} required />
            <input type="date" name="deadline" value={job.deadline} onChange={handleChange} required />
            <button type="submit">Add Job</button>
        </form>
    );
};

export default AddJob;