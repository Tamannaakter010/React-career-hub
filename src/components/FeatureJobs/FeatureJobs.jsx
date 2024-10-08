import { useState, useEffect } from "react";
import Job from '../job/job'; 

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div>
            <div className="text-center">
                <h2 className="text-6xl">Featured Jobs: {jobs.length}</h2>
                <p className="text-center">Lorem ipsum dolor sit</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {jobs.slice(0, dataLength).map(job => (
                    <Job key={job.id} job={job} />
                ))}
            </div>
            <div className={dataLength === jobs.length ? "hidden" : ""}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See more...</button>
            </div>
        </div>
    );
};

export default FeatureJobs;
