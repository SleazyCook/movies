import { useState } from 'react'

import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";

function LogOn() {
  const [register, setRegister] = useState(false)

  return(
    <div>

      {!register ? 
        <SignIn 
          setRegister={setRegister}/> 
      
      : <SignUp 
          setRegister={setRegister}/>}

    </div>
  )
}

export default LogOn;