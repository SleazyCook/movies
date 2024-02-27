import { useState } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import usernameGenerator from '../../helpers/usernameGen'
import bioGenerator from '../../helpers/bioGenerator'

function SignUp({setRegister}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const defaultUsername = usernameGenerator()
    const defaultBio = bioGenerator()

    console.log(defaultUsername)

    function handleSignUp(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            userCredential.user.displayName = defaultUsername
            userCredential.user.photoURL = 'https://i.imgur.com/SGTvQJ7.png'
            userCredential.user.bio = defaultBio
            userCredential.user.location = 'North America'
            userCredential.user.pronoun = 'their'
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })        
    }

    function handleNoRegister() {
        setRegister(false)
    }

    return (
        <div className='sign-in-container'>
            <form onSubmit={handleSignUp}>
                <h1>Create Account</h1>
                <input 
                    type='email' 
                    placeholder='enter email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    >
                </input>
                    
                <input 
                    type='password' 
                    placeholder='enter password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    >
                </input>
                <button type='submit'>Sign Up</button>
            </form>

            <span onClick={handleNoRegister}>Have an account? Sign In Here</span>
        </div>
    )
}

export default SignUp;