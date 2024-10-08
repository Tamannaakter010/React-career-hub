import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [jobApplieds, setJobApplieds] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(jobApplieds);  // Use jobApplieds here, not AppliedJobs
        } else if (filter === 'remote') {
            const remoteJobs = jobApplieds.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = jobApplieds.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoreJobApplication();
        if (jobs.length > 0) {
            const filteredJobs = jobs.filter(job => storedJobIds.includes(job.id));
            setJobApplieds(filteredJobs);
            setDisplayJobs(filteredJobs);
        }
    }, [jobs]);

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <h2 className="text">I Applied These Jobs: {jobApplieds.length}</h2>
            <ul>
                {jobApplieds.length > 0 ? (
                    displayJobs.map(job => (
                        <li key={job.id}>
                            <span>{job.job_title} - {job.company_name}: {job.remote_or_onsite}</span>
                        </li>
                    ))
                ) : (
                    <p>No jobs applied yet.</p>
                )}
            </ul>
        </div>
    );
};

export default AppliedJobs;
