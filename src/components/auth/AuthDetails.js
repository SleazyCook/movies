// import { useState, useEffect } from 'react'
// import { Link, useOutletContext, useNavigate } from 'react-router-dom'
// import { auth } from '../../firebase'
// import { onAuthStateChanged } from 'firebase/auth'

// import Logout from './Logout'

// function AuthDetails() {

//     const [authUser, setAuthUser] = useState(null)
//     // const {authenticationObj: [loggedIn, setIsLoggedIn]} = useOutletContext()
//     const navigate = useNavigate()

//     useEffect(() => {
//         const listen = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setAuthUser(user)
//                 console.log(user)
//                 navigate('/')
//             } else {
//                 setAuthUser(null)
//             }
//         })

//         return () => {
//             listen()
//         }
//     }, []) 

//     return(
//         <div>
//             {authUser && <img src={authUser.photoURL} height="50"></img>}
//             {authUser ? <>{authUser.displayName} Signed In | &nbsp;
//                 <Logout />
//                 </> : <Link to='authenticate'>Sign In</Link>}
//         </div>
//     )
// }

// export default AuthDetails