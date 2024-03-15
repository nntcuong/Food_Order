import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"
import {useGetMyUser, useUpdateMyUser} from "@/api/UserApi"
const UserProfilePage = () => {
    const { currentUser, isLoading: isGetLoading } = useGetMyUser();
    const {updateUser,isLoading}=useUpdateMyUser();
    if (isGetLoading) {
        return <span>Loading...</span>;
      }
      if (!currentUser) {
        return <span>Unable to load user...</span>;
      }
    return < UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isLoading}/>;
    
};
export default UserProfilePage