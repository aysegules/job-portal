import { assets } from "../assets/assets";
import kConvert from "k-convert";
import moment from "moment";
import JobCard from "../components/JobCard";
import { useApplyForJob } from "../hooks/useUser";
import { toast } from "react-toastify";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getJobById } from "../services/job/getJobById";
import { getAllJobs } from "../services/job/getAllJobs";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRole, setShowLogin } from "../features/app/appSlice";
import { getUserJobApplications } from "../services/user/getUserJobApplications";
import Loading from "../components/Loading";

const ApplyJob = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { resume, role, token } = useSelector((store) => store.app);

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["jobs", id],
    queryFn: () => getJobById(id),
  });

  const {
    data: jobsData,
    isPending: areJobsPending,
    isError: areJobsError,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: getAllJobs,
  });

  const applicationsQuery = useQuery({
    queryKey: ["appliedJobs"],
    queryFn: getUserJobApplications,
    enabled: Boolean(token) && role === "user",
  });

  const job = data?.job;
  const isApplied =
    applicationsQuery.data?.applications?.some(
      (application) => application.job.id === id,
    ) ?? false;
  const moreJobs =
    jobsData?.jobs
      ?.filter(
        (otherJob) =>
          otherJob.id !== job?.id && otherJob.company?.id === job?.company?.id,
      )
      .slice(0, 4) ?? [];

  const applyMutation = useApplyForJob();

  const handleApply = async () => {
    if (!token || role !== "user") {
      dispatch(setRole("user"));
      dispatch(setShowLogin(true));
      toast.warn("Log in as a job seeker to apply.");
      return;
    }

    if (isApplied || applyMutation.isPending) {
      return;
    }

    if (applicationsQuery.isPending) {
      return;
    }

    try {
      if (!resume) {
        toast.warn("Upload a resume to apply for this job.");
        navigate("/applications");
        return;
      }

      await applyMutation.mutateAsync(id);
      await queryClient.invalidateQueries({ queryKey: ["appliedJobs"] });

      toast.success("Successfully applied for this role.");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to complete your request.",
      );
    }
  };

  return (
    <div className="container min-h-screen flex flex-col py-10 px-4 2xl:px-20 mx-auto">
      {isPending ? (
        <Loading />
      ) : isError ? (
        <div className="w-full p-3 text-center text-shadow-md text-gray-500">
          An error occurred! {error.message}
          <button onClick={() => refetch()} className="ml-2 text-blue-500">
            Try again
          </button>
        </div>
      ) : (
        job && (
          <div className="bg-white text-black rounded-lg w-full">
            <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl">
              <div className="flex flex-col md:flex-row items-center">
                <img
                  className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border"
                  src={job.company.img}
                  alt={`${job.company}'s img`}
                />
                <div className="text-center md:text-left text-neutral-700">
                  <h1 className="text-2xl sm:text-4xl font-medium">
                    {job.title}
                  </h1>
                  <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                    <span className="flex items-center gap-1">
                      <img src={assets.suitcase_icon} alt="" />
                      {job.company.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={assets.location_icon} alt="" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={assets.person_icon} alt="" />
                      {job.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={assets.money_icon} alt="" />
                      CTC:{kConvert.convertTo(job.salary)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
                <button
                  onClick={handleApply}
                  disabled={
                    isApplied ||
                    applyMutation.isPending ||
                    applicationsQuery.isPending
                  }
                  className="bg-blue-600 p-2.5 px-10 text-white rounded"
                >
                  {isApplied
                    ? "Applied"
                    : applyMutation.isPending
                      ? "Applying..."
                      : applicationsQuery.isPending
                        ? "Checking..."
                        : "Apply Now"}
                </button>
                <p className="mt-1 text-gray-600">
                  Posted {moment(job.createdAt).fromNow()}
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start">
              <div className="w-full lg:w-2/3">
                <h2 className="font-bold text-2xl mb-4">Job Description</h2>
                <div
                  className="rich-text"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                ></div>
                <button
                  onClick={handleApply}
                  disabled={
                    isApplied ||
                    applyMutation.isPending ||
                    applicationsQuery.isPending
                  }
                  className="bg-blue-600 p-2.5 px-10 text-white rounded mt-10"
                >
                  {isApplied
                    ? "Applied"
                    : applyMutation.isPending
                      ? "Applying..."
                      : applicationsQuery.isPending
                        ? "Checking..."
                        : "Apply Now"}
                </button>
              </div>
              {/**More Jobs Section */}
              <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
                <h2>More jobs from {job.company.name} </h2>
                {areJobsPending ? (
                  <p>Loading other jobs...</p>
                ) : areJobsError ? (
                  <p role="alert">Unable to load other jobs.</p>
                ) : moreJobs.length > 0 ? (
                  moreJobs.map((moreJob) => (
                    <JobCard job={moreJob} key={moreJob.id} />
                  ))
                ) : (
                  <p>No other jobs from this company are available.</p>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ApplyJob;
