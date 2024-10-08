import { MdLocationOn } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={logo} alt={job_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="card-actions ">
          <button className="px-5 py-2 font-extrabold rounded border-2 border-blue-500 mr-4">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold rounded border-2 border-blue-500 mr-4">
            {job_type}
          </button>
        </div>
        <div className="mt-4 mr-4 flex">
          <h2 className="flex items-center">
            <IoLocationOutline className="text-2xl" />{location}
          </h2>
          <h2 className="flex items-center ml-4">
            <CiDollar className="text-2xl" />{salary}
          </h2>
        </div>
        <Link to={`/job/${id}`}>
  <button className="btn btn-primary">View Details</button>
</Link>
        
      </div>
    </div>
  );
};

export default Job;
