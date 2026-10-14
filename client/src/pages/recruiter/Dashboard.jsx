import { NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";

const Dashboard = () => {
  const navlinks = [
    {
      id: 1,
      name: "Add Job",
      path: "/dashboard/add-job",
      icon: assets.add_icon,
    },
    {
      id: 2,
      name: "Manage Jobs",
      path: "/dashboard/manage-jobs",
      icon: assets.home_icon,
    },
    {
      id: 3,
      name: "View Applications",
      path: "/dashboard/view-applications",
      icon: assets.person_tick_icon,
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="flex items-start">
        {/**Sidebar */}
        <div className="inline-block min-h-screen border-r-2 border-gray-300 ">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            {navlinks.map((link) => (
              <NavLink
                key={link.id}
                className={({ isActive }) =>
                  `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && "bg-blue-100 border-r-4 border-blue-500"}`
                }
                to={link.path}
              >
                <img className="min-w-4" src={link.icon} alt="" />
                <p className="max-sm:hidden">{link.name}</p>
              </NavLink>
            ))}
          </ul>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
