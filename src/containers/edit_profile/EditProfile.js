

import EditAvatar from "./EditAvatar";
import EditUsername from "./EditUsername";

import { getAuth } from 'firebase/auth'

function EditProfile() {

  // const {userObj: [authUser, setAuthUser]} = useOutletContext()

  // console.log('Edit Profile testing')

  const auth = getAuth().currentUser

  return(
    <div>
      <h1>Edit Profile</h1>

      <EditAvatar 
        auth={auth}/>

      <EditUsername 
        auth={auth}/>

      {/* Pronoun */}
      <form>
          <label >Select your pronoun:</label>
          <select id="pronounDropdown">
              <option value="he">He/Him</option>
              <option value="she">She/Her</option>
              <option value="they">They/Them</option>
              <option value="custom">Custom</option>
          </select>
      </form>
      <span>
          Example use: User added Film to his watchlist
      </span>

      {/* Location */}
      <form>
          <input type='text' placeholder='enter location' />
          <button type='submit'>Update</button>
      </form>

      {/* Bio */}
      <form>
          <input type='text' placeholder='tell us a bit about yourself' />
          <button type='submit'>Update</button>
      </form>

    </div>
  )
}

export default EditProfile;