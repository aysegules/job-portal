import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { useChangeStatus } from "../../hooks/useCompany";
import { getCompanyJobApplicants } from "../../services/company/getCompanyJobApplicants";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";

const ViewApplications = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["companyJobApplicants"],
    queryFn: getCompanyJobApplicants,
  });

  const jobApplications = data?.applicants.reverse();

  const statusMutation = useChangeStatus();

  const handleChangeStatus = async (id, status) => {
    try {
      await statusMutation.mutateAsync({ id, status });
      await refetch();

      toast.success("Status has changed successfully.");
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
      name: "User Name",
      isHidden: false,
    },
    {
      name: "Job Title",
      isHidden: true,
    },
    {
      name: "Location",
      isHidden: true,
    },
    {
      name: "Resume",
      isHidden: false,
    },
    {
      name: "Actions",
      isHidden: false,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm">
        <thead>
          <tr className="border-b">
            {headers.map((header) => (
              <th
                key={header.name}
                className={`py-2 px-4 text-center ${header.isHidden === true && "max-sm:hidden"}`}
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
          ) : jobApplications?.length > 0 ? (
            jobApplications.map((application, index) => (
              <tr className="text-gray-700 border-b" key={application.id}>
                <td className="py-2 px-4 text-center"> {index + 1}</td>
                <td className="py-2 px-4 text-center flex justify-center items-center capitalize">
                  <img
                    className="w-10 rounded-full mr-3 max-sm:hidden"
                    src={application.user.img}
                    alt=""
                  />
                  <span>{application.user.name}</span>
                </td>
                <td className="py-2 px-4 text-center max-sm:hidden capitalize">
                  {application.job.title}
                </td>
                <td className="py-2 px-4 text-center max-sm:hidden capitalize">
                  {application.job.location}
                </td>
                <td className="py-2 px-4 ">
                  <a
                    href={application.user.resume}
                    target="_blank"
                    className="bg-blue-50 text-blue-400 px-3 py-1 rounded inline-flex items-center justify-center gap-2"
                  >
                    Resume
                    <img
                      src={assets.resume_download_icon}
                      alt="Download resume"
                    />
                  </a>
                </td>
                <td className="py-2 px-4 relative">
                  {application.status === "pending" ? (
                    <div className="relative inline-block text-left group">
                      <button className="text-gray-500 action-button">
                        ...
                      </button>
                      <div className="z-10 hidden absolute right-0 left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
                        <button
                          onClick={() =>
                            handleChangeStatus(application.id, "approved")
                          }
                          className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() =>
                            handleChangeStatus(application.id, "rejected")
                          }
                          className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="capitalize">{application.status}</div>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="p-3 text-center text-md text-gray-500">
                No applications
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;
