import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  assets,
  JobCategories,
  JobLocations,
  jobsData,
} from "../assets/assets";
import { updateSearchFilter } from "../features/app/appSlice";
import Filter from "./Filter";
import JobCard from "./JobCard";

const JobList = () => {
  const { searchFilter, isSearched } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const [showFilter, setShowFilter] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/**Sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {/**Search Filter */}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-600 ">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                    {searchFilter.title}
                    <img
                      onClick={() => {
                        dispatch(updateSearchFilter({ title: "" }));
                      }}
                      src={assets.cross_icon}
                      className="cursor-pointer"
                      alt="Clear filter"
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded">
                    {searchFilter.location}
                    <img
                      onClick={() => {
                        dispatch(updateSearchFilter({ location: "" }));
                      }}
                      src={assets.cross_icon}
                      className="cursor-pointer"
                      alt="Clear filter"
                    />
                  </span>
                )}
              </div>
            </>
          )}

        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden"
        >
          {showFilter ? "Close" : "Filters"}
        </button>

        {/**Category Filter */}
        <Filter
          filterText="Categories"
          filter={JobCategories}
          showFilter={showFilter}
        />

        {/**Location Filter */}
        <Filter
          filterText="Location"
          filter={JobLocations}
          showFilter={showFilter}
        />
      </div>
      {/**Job List */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest Jobs
        </h3>
        <p className="mb-8">Get your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {jobsData.slice((currentPage - 1) * 6, currentPage * 6).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/**Pagination */}
        {jobsData.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            <a href="#job-list">
              <img
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                src={assets.left_arrow_icon}
                alt="Left arrow"
              />
            </a>
            {Array.from({ length: Math.ceil(jobsData.length / 6) }).map(
              (_, i) => (
                <a href="#job-list">
                  <button
                    onClick={() => {
                      setCurrentPage(i + 1);
                    }}
                    className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer ${currentPage === i + 1 ? "bg-blue-100 text-blue-500" : "text-gray-500"}`}
                    key={i}
                  >
                    {i + 1}
                  </button>
                </a>
              ),
            )}
            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentPage(
                    Math.min(currentPage + 1, Math.ceil(jobsData.length / 6)),
                  )
                }
                src={assets.right_arrow_icon}
                alt="Right arrow"
              />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobList;
