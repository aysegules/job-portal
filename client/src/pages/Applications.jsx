import { useState } from "react";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [resume, setResume] = useState(null);

  const formatApplicationDate = (date) => {
    return moment(date).format("ll");
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "accepted":
        return "text-green-700";
      case "rejected":
        return "text-red-700";
      case "pending":
        return "text-blue-700";
      default:
        return "text-gray-700";
    }
  };

  const appliedHeaders = [
    {
      name: "#",
      isHidden: true,
    },
    {
      name: "Company",
      isHidden: false,
    },
    {
      name: "Job Title",
      isHidden: false,
    },
    {
      name: "Location",
      isHidden: true,
    },
    {
      name: "Date",
      isHidden: true,
    },
    {
      name: "Status",
      isHidden: false,
    },
  ];

  return (
    <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
      <h2 className="text-xl font-semibold">Your Resume</h2>
      <div className="flex gap-2 mb-6 mt-3">
        {isEdit ? (
          <>
            <label className="flex items-center" htmlFor="uploadResume">
              <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">
                Select Resume
              </p>
              <input
                id="uploadResume"
                onChange={(e) => setResume(e.target.files[0])}
                type="file"
                accept="application/pdf"
                hidden
              />
              <img src={assets.profile_upload_icon} alt="" />
            </label>
            <button
              onClick={() => setIsEdit(false)}
              className="bg-green-100 border border-green-400 rounded-lg px-4 py-2"
            >
              Save
            </button>
          </>
        ) : (
          <div className="flex gap-2">
            <a
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
              href=""
            >
              Resume
            </a>
            <button
              onClick={() => {
                setIsEdit(true);
              }}
              className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2"
            >
              Edit
            </button>
          </div>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded shadow-md">
        <thead>
          <tr>
            {appliedHeaders.map((header) => (
              <th
                key={header.name}
                className={`py-3 px-4 text-center border-b ${header.isHidden === true && "max-sm:hidden"}`}
              >
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jobsApplied.length > 0 ? (
            jobsApplied.map((job, index) => (
              <tr key={job.id}>
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">{job.company}</td>
                <td className="px-4 py-2 text-center">{job.title}</td>
                <td className="px-4 py-2 text-center max-sm:hidden">
                  {job.location}
                </td>
                <td className="px-4 py-2 text-center max-sm:hidden">
                  {formatApplicationDate(job.createdAt)}
                </td>
                <td className="px-4 py-2 text-center">
                  <span
                    className={`${getStatusColor(job.status)} px-4 py-1.5 rounded`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <p className="p-5 text-gray-600 font-semibold text-center">
              No jobs applied
            </p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
