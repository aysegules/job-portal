import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ApplyJob from "../pages/ApplyJob";
import Applications from "../pages/Applications";
import NotFound from "../components/NotFound";
import Dashboard from "../pages/recruiter/Dashboard";
import AddJob from "../pages/recruiter/AddJob";
import ManageJobs from "../pages/recruiter/ManageJobs";
import ViewApplications from "../pages/recruiter/ViewApplications";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/apply-job/:id" element={<ApplyJob />} />
      <Route path="/applications" element={<Applications />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="add-job" element={<AddJob />} />
        <Route path="manage-jobs" element={<ManageJobs />} />
        <Route index element={<ViewApplications />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterConfig;
