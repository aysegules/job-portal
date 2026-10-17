import { useState } from "react";
import { assets } from "../assets/assets";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import { getUserJobApplications } from "../services/user/getUserJobApplications";
import { useDispatch, useSelector } from "react-redux";
import { setResume } from "../features/app/appSlice";
import Loading from "../components/Loading";
import { useUpdateUserProfile } from "../hooks/useUser";
import { toast } from "react-toastify";
import { getUser } from "../services/user/getUser";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();
  const { resume } = useSelector((store) => store.app);

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["appliedJobs"],
    queryFn: getUserJobApplications,
  });

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const user = userQuery.data?.user;

  const appliedJobs = data?.applications;

  const updateMutation = useUpdateUserProfile();

  const formatApplicationDate = (date) => {
    return moment(date).format("ll");
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "accepted":
      case "approved":
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

  const handleUpdateResume = async () => {
    try {
      await updateMutation.mutateAsync({ resume });

      userQuery.refetch();

      toast.success("Resume updated succesfully");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to complete your request.",
      );
    }
  };

  return (
    <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
      <h2 className="text-xl font-semibold">Your Resume</h2>
      <div className="flex gap-2 mb-6 mt-3">
        {isEdit || (user && user.resume === null) ? (
          <>
            <label className="flex items-center" htmlFor="uploadResume">
              <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">
                {resume.name ? resume.name : "Select Resume"}
              </p>
              <input
                id="uploadResume"
                onChange={(e) => dispatch(setResume(e.target.files[0]))}
                type="file"
                accept="application/pdf"
                hidden
              />
              <img src={assets.profile_upload_icon} alt="" />
            </label>
            <button
              onClick={() => {
                handleUpdateResume();
                setIsEdit(false);
              }}
              className="bg-green-100 border border-green-400 rounded-lg px-4 py-2"
            >
              Save
            </button>
          </>
        ) : (
          <div className="flex gap-2">
            <a
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
              href={user.resume}
              target="_blank"
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
          {isPending ? (
            <tr>
              <td colSpan={6} className="p-3 text-center">
                <Loading />
              </td>
            </tr>
          ) : isError ? (
            <tr>
              <td colSpan={6} className="p-3 text-center text-md text-gray-500">
                An error occurred! {error.message}
                <button
                  onClick={() => refetch()}
                  className="ml-2 text-blue-500"
                >
                  Try again
                </button>
              </td>
            </tr>
          ) : appliedJobs.length > 0 ? (
            appliedJobs.map((application, index) => (
              <tr key={application.id} className="capitalize">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center flex justify-center items-center gap-2">
                  <img
                    src={application.job.company.img}
                    alt={`${application.job.company}'s img`}
                    className="w-8 rounded-full"
                  />
                  {application.job.company.name}
                </td>
                <td className="px-4 py-2 text-center">
                  {application.job.title}
                </td>
                <td className="px-4 py-2 text-center max-sm:hidden">
                  {application.job.location}
                </td>
                <td className="px-4 py-2 text-center max-sm:hidden">
                  {formatApplicationDate(application.createdAt)}
                </td>
                <td className="px-4 py-2 text-center">
                  <span
                    className={`${getStatusColor(application.status)} px-4 py-1.5 rounded`}
                  >
                    {application.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="p-3 text-center text-md text-gray-500">
                No jobs applied
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
