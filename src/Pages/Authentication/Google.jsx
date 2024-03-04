import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";
import saveUser from "../../api/auth";

const Google = () => {
    const {googleLogin} = useContext(AuthContext);


    const handleGoogleLogin =()=>{
      googleLogin()
      .then(result =>{
        const user = result.user;
        // Send User To Db
        saveUser(user)
        console.log(user)
      })
      .catch(error =>{
        console.log(error.message)
      })
    }

    return (
        <div
        onClick={handleGoogleLogin}
        className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>
    );
};

export default Google;