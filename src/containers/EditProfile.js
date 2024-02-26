

import EditAvatar from "../components/profile/EditAvatar";
import EditUsername from "../components/profile/EditUsername";

function EditProfile() {
  return(
    <div>
      <h1>Edit Profile</h1>

      <EditAvatar />

      <EditUsername />

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