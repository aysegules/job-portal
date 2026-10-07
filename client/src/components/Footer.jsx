import { assets } from "../assets/assets";

const Footer = () => {
  const copyright = "©";
  const date = new Date().getFullYear();
  return (
    <footer className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20">
      <img className="w-40" src={assets.logo} alt="Logo" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright JobPortal {copyright} {date}{" "}
      </p>
      <div className="flex gap-2.5">
        <img className="w-9.5" src={assets.facebook_icon} alt="Facebook" />
        <img className="w-9.5" src={assets.twitter_icon} alt="Twitter" />
        <img className="w-9.5" src={assets.instagram_icon} alt="Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
