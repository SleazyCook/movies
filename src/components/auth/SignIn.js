import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function SignIn({setRegister}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSignIn(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        
        .then((userCredential) => {
            navigate('/')
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })        
        console.log('sign in button clicked')
    }

    function handleRegister() {
        setRegister(true)
    }  

    return (
        <div className='sign-in-container'>
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

            <span onClick={handleRegister}>Register Now</span>
        </div>
    )
}

export default SignIn;