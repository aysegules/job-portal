import { assets } from "../assets/assets";

const DownloadApp = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20 max-w-4/5">
      <div className="relative bg-linear-to-r from-violet-50 to-purple-50 sm:p-24 lg:p-32 rounded-lg">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 max-w-md">
            Download Mobile App For Better Experience
          </h1>
          <div className="flex gap-4">
            <a className="inline-block" href="#">
              <img
                className="h-12"
                src={assets.play_store}
                alt="Get it on Google Play"
              />
            </a>
            <a className="inline-block" href="#">
              <img
                className="h-12"
                src={assets.app_store}
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
        <img
          className="absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden"
          src={assets.app_main_img}
          alt="A woman pointing download links"
        />
      </div>
    </div>
  );
};

export default DownloadApp;
