import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../views/landingPage';
import UiEditor from '../views/uiEditor';
import { FiSettings } from 'react-icons/fi';
import '../manager/AppManager.css';
import Button from '../components/button.component';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from '../manager/components';
import { Accord, Scheduler, Employees, Accord_Board } from '../manager/pages';
import Register from '../register/new';
import Board from '../board/board';
import { useStateContext } from '../manager/contexts/ContextProvider';
import accord_board_icon from '../navicon/accord_board.png';
import accord_scheduler_icon from '../navicon/accord_scheduler.png';
import add_user_icon from '../navicon/add_user.png';
import projects_icon from '../navicon/projects.png';
import employees_icon from '../navicon/employees.png';
import accord_board_add_task_icon from '../navicon/accord_board_add_task.png';
import './index.css';
import Login from '../Auth/login';
import { AuthContext } from '../Auth/AuthContext';
import Employee_List from '../employee_crud/list';
import { signOut } from "firebase/auth";
import { auth, db } from '../firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

const Router = () => {

  const location = useLocation();

  const { currentUser, dispatch } = useContext(AuthContext);
  const [admin, setAdmin] = useState(false);
  const [manager, setManager] = useState(false);
  const [logoutbtn, setLogoutbtn] = useState(false);
  const [designation, setDesignation] = useState("");
  const navigate = useNavigate();

  const userEmail = currentUser ? currentUser.email : '';
  console.log(userEmail);

  useEffect(() => {
    if (userEmail === "admin@accord.dev") {
      setAdmin(true);
      setManager(true);
    } else {
      setAdmin(false);
      setManager(true);
    }
  }, [userEmail]);

  useEffect(() => {
    if(designation === "Manager"){
      setManager(true);
    }
    else{
      setManager(false);
    }
  });

  useEffect(() => {
    const fetchUserDesignation = async () => {
      try {
        const userDocRef = doc(collection(db, "users"), currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userDesignation = userDoc.data().designation;
          setDesignation(userDesignation);
          console.log("currentUser.uid:", currentUser.uid);
        }
      } catch (error) {
        console.log("Error fetching user designation:", error);
      }
    };

    if (currentUser) {
      fetchUserDesignation();
    }
  }, [currentUser]);

  useEffect(() => {
    setLogoutbtn(currentUser !== null);
  }, [currentUser]);

  const isUiEditorPage = location.pathname === '/editor';
  const isLoginPage = location.pathname === '/login';


  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const signoutuser = () => {
    signOut(auth)
      .then(() => {
        setAdmin(false);
        setManager(false);
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
      })
      .catch((error) => {
        console.log('Error signing out:', error);
      });
  };

  return (
    <div className='body'>
      {!isUiEditorPage && !isLoginPage && (
      <div className="container_h">
        <nav className="container_n">
          <a className='text' href='/landing'>
            <div className='option_flex'>
              <img className='icons' src={projects_icon}/>
              Projects
            </div>
          </a>
          {admin && <a className='text' href="/employees">
            <div className='option_flex'>
              <img className='icons' src={employees_icon}/>
              Employees
            </div>
          </a>}
          {admin && <a className='text' href="/register">
            <div className='option_flex'>
              <img className='icons' src={add_user_icon}/>
              Register Employee
            </div>
          </a>}
          <a className='text' href="/progress">
            <div className='option_flex'>
              <img className='icons' src={accord_board_icon}/>
              Accord Board
            </div>
          </a>
          {admin || manager ? ( <a className='text' href="/board">
            <div className='option_flex'>
              <img className='icons' src={accord_board_add_task_icon}/>
              Add Task
            </div>
          </a>): null}
          <a className='text' href="/scheduler">
            <div className='option_flex'>
              <img className='icons' src={accord_scheduler_icon}/>
              Accord Scheduler
            </div>
          </a>
        </nav>
        {logoutbtn && <div className='logout' onClick={signoutuser}>Logout</div>}
      </div>)}

      <Routes>
        <Route path='/' element={<RequireAuth><LandingPage /></RequireAuth>} />
        <Route path='/landing' element={<RequireAuth><LandingPage /></RequireAuth>} />
        <Route path='/editor' element={<RequireAuth><UiEditor /></RequireAuth>} />
        {admin && <Route path='/employees' element={<RequireAuth><Employee_List /></RequireAuth>} />}
        {admin && <Route path='/register' element={<RequireAuth><Register /></RequireAuth>} />}
        <Route path='/progress' element={<RequireAuth><Accord_Board /></RequireAuth>} />
        {admin || manager ? ( <Route path='/board' element={<RequireAuth><Board /></RequireAuth>} />): null}
        <Route path='/scheduler' element={<RequireAuth><Scheduler /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default Router;