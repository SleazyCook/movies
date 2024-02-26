import { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })        
        console.log('sign in button clicked')
    }

    return (
        <div className='sign-in-container'>
            Sign In
            <form onSubmit={handleSignIn}>
                <h1>Log In</h1>
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
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default SignIn;