import React from "react";
import { manageJobsData } from "../../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {
  const navigate = useNavigate();

  const headers = [
    {
      name: "#",
      isHidden: true,
    },
    {
      name: "Job Title",
      isHidden: false,
    },
    {
      name: "Date",
      isHidden: true,
    },
    {
      name: "Location",
      isHidden: true,
    },
    {
      name: "Applicants",
      isHidden: false,
    },
    {
      name: "Visible",
      isHidden: false,
    },
  ];
  return (
    <div className="container p-4 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  className={`py-2 px-4 border-b text-center ${header.isHidden === true && "max-sm:hidden"}`}
                  key={header.name}
                >
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={job.id} className="text-gray-700 border-b">
                <td className="py-2 px-4 max-sm:hidden text-center">
                  {index + 1}
                </td>
                <td className="py-2 px-4 text-center">{job.title}</td>
                <td className="py-2 px-4 max-sm:hidden text-center">
                  {moment(job.createdAt).format("ll")}
                </td>
                <td className="py-2 px-4 max-sm:hidden text-center">
                  {job.location}
                </td>
                <td className="py-2 px-4 text-center">{job.applicants}</td>
                <td className="py-2 px-4 text-center">
                  <input className="scale-125 ml-4" type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-black text-white py-2 px-4 rounded"
            onClick={() => {
              navigate("/dashboard/add-job");
              scrollTo(0, 0);
            }}
          >
            Add New Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;
