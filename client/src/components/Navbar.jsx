import { useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useDispatch } from "react-redux";
import { setRole, setShowLogin } from "../features/app/appSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

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
        {
          // user ? (
          //   <div className="flex items-center gap-3">
          //     <Link to={"/applications"}>Applied Jobs</Link>
          //     <p className="max-sm:hidden">
          //       Hi
          //       {user.name}
          //     </p>
          //   </div>
          // ) :
          location.pathname.startsWith("/dashboard") ? (
            <div className="flex items-center gap-3">
              <p className="max-sm:hidden">Welcome </p>
              <div className="relative group">
                <img
                  src={assets.company_icon}
                  alt=""
                  className="w-8 border rounded-full"
                />
                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                  <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                    <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
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
              {/*user ops will be added*/}
              <button
                onClick={() => {
                  dispatch(setShowLogin(true));
                }}
                className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
              >
                Login
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
