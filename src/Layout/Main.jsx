import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-20">
      <Outlet/>
      <Toaster />
      </div>
    </div>
  );
};

export default Main;
