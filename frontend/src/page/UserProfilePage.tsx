import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"
import {useUpdateMyUser} from "@/api/UserApi"
const UserProfilePage = () => {
    const {updateUser,isLoading}=useUpdateMyUser();
    return < UserProfileForm onSave={updateUser} isLoading={isLoading}/>;
    
};
export default UserProfilePage