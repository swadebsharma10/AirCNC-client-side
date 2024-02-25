import { CircleLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="h-[70vh] flex justify-center items-center">
        <CircleLoader loading={true} size={25} color="#36d7b7" /> 
        </div>
    );
};

export default Loader;