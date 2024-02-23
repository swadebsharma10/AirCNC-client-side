import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import userLogo from '../../../assets/images/user.png';

const Avatar = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <img className='rounded-full' src={user && user.photoURL ? user.photoURL : userLogo} alt="User" height={30} width={30}/>
        </div>
    );
};

export default Avatar;