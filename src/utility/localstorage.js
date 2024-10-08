const getStoreJobApplication = () => {
    const StoreJobApplication = localStorage.getItem('job-application');
    if (StoreJobApplication) {
        return JSON.parse(StoreJobApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const StoreJobApplications = getStoreJobApplication();
    const exists = StoreJobApplications.find(jobId => jobId === id);
    if (!exists) {
        StoreJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(StoreJobApplications));
    }
}

export { getStoreJobApplication, saveJobApplication };
