import { useState } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignUp(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })        
        console.log('sign up button clicked')
    }

    return (
        <div className='sign-in-container'>
            Create Account
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
        </div>
    )
}

export default SignUp;