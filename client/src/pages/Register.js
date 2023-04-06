import { useState } from "react"
import Wrapper from '../assets/wrappers/RegisterWrapper.js'

const initialUserState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}

const Register = () => {
    const [userValues, setUserValues] = useState(initialUserState);

    const toggleIsMember = () => {
        setUserValues({...userValues, isMember: !userValues.isMember});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userValues);
    }

  return (
    <Wrapper>
        <form onSubmit={onSubmit}>
            <button type='submit' onClick={toggleIsMember}>{userValues.isMember ? 'Login' : 'Register'}</button>
        </form>
    </Wrapper>
  )
}

export default Register