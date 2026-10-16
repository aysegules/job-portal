import { useNavigate, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import {
  setResume,
  setRole,
  setShowLogin,
  setToken,
} from "../features/app/appSlice";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../services/user/getUser";
import { getCompany } from "../services/company/getCompany";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { useLogout } from "../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { role, token } = useSelector((store) => store.app);

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    enabled: Boolean(token) && role === "user",
  });

  const user = userQuery.data?.user;

  const recruiterQuery = useQuery({
    queryKey: ["recruiter"],
    queryFn: getCompany,
    enabled: Boolean(token) && role === "recruiter",
  });

  const recruiter = recruiterQuery.data?.company;

  const logoutMutation = useLogout();
  const profileQuery = role === "recruiter" ? recruiterQuery : userQuery;

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();

      dispatch(setToken(""));
      dispatch(setResume(null));
      dispatch(setRole("user"));
      dispatch(setShowLogin(false));

      queryClient.removeQueries({ queryKey: ["user"] });
      queryClient.removeQueries({ queryKey: ["recruiter"] });
      queryClient.removeQueries({ queryKey: ["appliedJobs"] });
      queryClient.removeQueries({ queryKey: ["companyJobs"] });
      queryClient.removeQueries({ queryKey: ["companyJobApplicants"] });

      toast.success("Logged out successfully.");
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Unable to log out.",
      );
    }
  };

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img
          src={assets.logo}
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
          className="cursor-pointer"
          alt="InsiderJobs"
        />

        {token && profileQuery.isPending ? (
          <Loading />
        ) : user ? (
          <div className="flex items-center gap-3 text-lg">
            <Link to={"/applications"}>
              Applied Jobs <span className="p-2">|</span>
            </Link>
            <p className="max-sm:hidden">
              Welcome
              <span className="p-2">{user.name}</span>
            </p>
            <div className="relative group">
              <img
                src={user.img}
                alt={`${user.name}'s image`}
                className="w-10 rounded-full border"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border border-gray-100  shadow-lg text-lg">
                  <li className="hover:underline py-1 px-2 cursor-pointer pr-10">
                    Profile
                  </li>
                  <li className="hover:underline py-1 px-2 cursor-pointer pr-10">
                    Settings
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={handleLogout}
                      disabled={logoutMutation.isPending}
                      className="hover:underline py-1 px-2 cursor-pointer pr-10 disabled:opacity-50"
                    >
                      {logoutMutation.isPending ? "Logging out..." : "Logout"}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : recruiter ? (
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">
              Welcome
              <span className="pl-1">{recruiter.name}</span>
            </p>
            <div className="relative group">
              <img
                src={recruiter.img ? recruiter.img : ""}
                alt={`${recruiter.name}' image`}
                className="w-8 border rounded-full"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li>
                    <button
                      type="button"
                      onClick={handleLogout}
                      disabled={logoutMutation.isPending}
                      className="py-1 px-2 cursor-pointer pr-10 disabled:opacity-50"
                    >
                      {logoutMutation.isPending ? "Logging out..." : "Logout"}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-sm">
            <button
              onClick={() => {
                dispatch(setShowLogin(true));
                dispatch(setRole("recruiter"));
              }}
              className="text-gray-600 cursor-pointer"
            >
              Recruiter Login
            </button>
            <button
              onClick={() => {
                dispatch(setShowLogin(true));
                dispatch(setRole("user"));
              }}
              className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
