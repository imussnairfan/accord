import {useContext, useState} from 'react';
import './login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = () => {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            dispatch({type:'LOGIN', payload:user});
            navigate("/");
        })
        .catch((error) => {
            setError(true);
        });
    }

    return (
      <div className='login'>
        <form className='formFlex' onSubmit={handleLogin}>
          <span className='heading_txt'>Login</span>
          <table>
            <tr>
              <th>
                <label className='label'>Email</label>
              </th>
              <th>
                <input className='txtBox' type='email' placeholder='user@example.com' onChange={(e) => setEmail(e.target.value)}/>
              </th>
            </tr>
            <tr>
              <th>
                <label className='label'>Passowrd</label>
              </th>
              <th>
                <input className='txtBox' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
              </th>
            </tr>
          </table>
            <button type='submit' className='submit_btn'>Login</button>
          {error && <span className='wrong_txt'>Wrong email or password!</span>}
        </form>
      </div>
    );
  };
  
  export default Login;