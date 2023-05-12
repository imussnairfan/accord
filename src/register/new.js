import './new.css';
import { useEffect, useState } from "react";
import { addDoc, collection, doc, serverTimestamp, setDoc, } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from '../firebase';

const Register = () => {

  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(data);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  console.log(data);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      console.log(data.email);
      console.log(data.password);
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      alert('New User has been added');
      navigate(-1)
    } catch (err) {
      alert('Error while adding new user. User might already exists or inputs might be wrong.');
      console.log(err);
    }
  };

    return (
      <div className='new'>
        <form className='formFlex' onSubmit={handleAdd}>
            <span className='heading_txt'>Register New Employee</span>
            <img className='img' src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt='Image'/>
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            <table>
              <tr>
                <th>
                  <label className='label'>Username</label>
                </th>
                <th>
                <input className='txtBox' id='username' label='username' type='text' placeholder='username' onChange={handleInput}/>
                </th>
                <th>
                  <label className='label'>Full Name</label>
                </th>
                <th>
                  <input className='txtBox' id='full_name' label='full_name' type='text' placeholder='Full Name' onChange={handleInput}/>
                </th>
              </tr>
              <tr>
                <th>
                  <label className='label'>Email</label>
                </th>
                <th>
                  <input className='txtBox' id='email' label='email' type='email' placeholder='email' onChange={handleInput}/>
                </th>
                <th>
                  <label className='label'>Password</label>
                </th>
                <th>
                  <input className='txtBox' id='password' label='password' type='password' placeholder='password' onChange={handleInput}/>
                </th>
              </tr>
              <tr>
                <th>
                  <label className='label'>Phone number</label>
                </th>
                <th>
                  <input className='txtBox' id='phone_number' label='phone_number' type='text' placeholder='Phone number' onChange={handleInput}/>
                </th>
                <th>
                  <label className='label'>Country</label>
                </th>
                <th>
                  <input className='txtBox' id='country' label='country' type='text' placeholder='Country' onChange={handleInput}/>
                </th>
              </tr>
              <tr>
                <th>
                  <label className='label'>Designation</label>
                </th>
                <th>
                  <input className='txtBox' id='designation' label='designation' type='text' placeholder='Designation' onChange={handleInput}/>
                </th>
                <th>
                  <label className='label'>Reports to</label>
                </th>
                <th>
                  <input className='txtBox' id='reports_to' label='reports_to' type='text' placeholder='Reports to' onChange={handleInput}/>
                </th>
              </tr>
            </table>
            <button type='submit' className='submit_btn'>Register</button>
        </form>
      </div>
    );
  };
  
  export default Register;