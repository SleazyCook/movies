import { useOutletContext } from "react-router-dom";

function Profile() {
  const {userObj: [authUser, setAuthUser]} = useOutletContext()

  console.log('Profile testing ', authUser)

  return(
    <div>
      Profile component

      <br />

      {authUser.email}
    </div>
  )
}

export default Profile;