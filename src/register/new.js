import './new.css';

const Register = () => {
    return (
      <div className='login'>
        <form className='formFlex'>
            <span className='heading_txt'>Register New Employee</span>
            <input className='txtBox' type='email' placeholder='email'/>
            <input className='txtBox' type='password' placeholder='password'/>
            <button type='submit' className='submit_btn'>Login</button>
            <span className='wrong_txt'>Wrong email or password!</span>
        </form>
      </div>
    );
  };
  
  export default Register;