import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img src={assets.logo} alt="InsiderJobs" />
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
          <div className="flex gap-4 max-sm:text-sm">
            <button className="text-gray-600">Recruiter Login</button>
            {/*user ops will be added*/}
            <button className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full">
              Login
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
