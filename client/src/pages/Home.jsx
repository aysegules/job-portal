import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobList from "../components/JobList";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobList />
      <DownloadApp />
    </div>
  );
};

export default Home;
