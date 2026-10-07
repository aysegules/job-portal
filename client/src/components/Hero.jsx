import { useRef } from "react";
import { assets, heroDetails } from "../assets/assets";
import { useDispatch } from "react-redux";
import { setSearchFilter, setIsSearched } from "../features/app/appSlice";

const Hero = () => {
  const dispatch = useDispatch();

  const titleRef = useRef();
  const locationRef = useRef();

  const onSearch = () => {
    dispatch(
      setSearchFilter({
        title: titleRef.current.value,
        location: locationRef.current.value,
      }),
    );

    dispatch(setIsSearched(true));
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-linear-to-r from-purple-800 to bg-purple-950 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          {heroDetails.title}
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          {heroDetails.description}{" "}
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto">
          <div className="flex items-center ">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt="Search" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="max-sm:text-xs p-2
            rounded outline-none w-full"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center">
            <img
              className="h-4 sm:h-5"
              src={assets.location_icon}
              alt="Location"
            />
            <input
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2
            rounded outline-none w-full"
              ref={locationRef}
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-blue-600 px-6 py-2 rounded text-white m-1"
          >
            Search
          </button>
        </div>
      </div>

      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex justify-center">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="font-medium">Trusted By</p>
          <img className="h-6" src={assets.microsoft_logo} alt="Microsoft" />
          <img className="h-6" src={assets.walmart_logo} alt="Walmart" />
          <img className="h-6" src={assets.accenture_logo} alt="Accenture" />
          <img className="h-6" src={assets.samsung_logo} alt="Samsung" />
          <img className="h-6" src={assets.amazon_logo} alt="Amazon" />
          <img className="h-6" src={assets.adobe_logo} alt="Adobe" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
