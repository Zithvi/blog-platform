import React, { useEffect, useState } from "react";
import { getJobs } from "../services/api";

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        const data = await getJobs();
        setJobs(data);
    };

    return (
        <div>
            <h2>Available Jobs</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <b>{job.title}</b> at {job.company} - {job.location} (Deadline: {new Date(job.deadline).toLocaleDateString()})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
