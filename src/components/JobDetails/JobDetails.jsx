import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();  // Fixed the syntax
    const { id } = useParams(); 
    const idInt = parseInt(id);
    


 
    const job = jobs.find(job => job.id ===  idInt);
    console.log( job);
   const handleApplyJob =() =>{
    saveJobApplication(id);
    toast('You have applied sucessfully');
   }
    return (
        <div>
          
            <div className="grid gap-4 md:grid-cols-4">

                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details comming here</h2>
                    <h2>Job Details of :{job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                <h2 className="text-4xl">Side things</h2>
                <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Here</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
