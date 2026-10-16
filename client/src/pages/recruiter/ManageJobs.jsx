import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCompanyPostedJobs } from "../../services/company/getCompanyPostedJobs";
import { toast } from "react-toastify";
import { useChangeVisibility } from "../../hooks/useCompany";
import Loading from "../../components/Loading";

const ManageJobs = () => {
  const navigate = useNavigate();

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["companyJobs"],
    queryFn: getCompanyPostedJobs,
  });

  const companyJobs = data?.jobs;

  const visibilityMutation = useChangeVisibility();

  const handleChangeVisibility = async (id) => {
    try {
      await visibilityMutation.mutateAsync(id);

      refetch();

      toast.success("Visibility has changed succesfully");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to complete your request.",
      );
    }
  };

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
            {isPending ? (
              <tr>
                <td colSpan={6} className="p-3 text-center">
                  <Loading />
                </td>
              </tr>
            ) : isError ? (
              <tr>
                <td
                  colSpan={6}
                  className="p-3 text-center text-md text-gray-500"
                >
                  An error occurred! {error.message}
                  <button
                    onClick={() => refetch()}
                    className="ml-2 text-blue-500"
                  >
                    Try again
                  </button>
                </td>
              </tr>
            ) : companyJobs.length > 0 ? (
              companyJobs.map((job, index) => (
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
                    <input
                      className="scale-125 ml-4"
                      type="checkbox"
                      checked={job.visible}
                      onClick={() => handleChangeVisibility(job.id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="p-3 text-center text-md text-gray-500"
                >
                  No jobs
                </td>
              </tr>
            )}
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
