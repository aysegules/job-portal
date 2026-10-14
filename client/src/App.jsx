import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import RouterConfig from "./config/RouterConfig";
import { ToastContainer } from "react-toastify";
import "quill/dist/quill.snow.css";

const App = () => {
  const { showLogin } = useSelector((store) => store.app);
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      {showLogin ? (
        <Login />
      ) : (
        <div>
          <Navbar />
          <RouterConfig />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
