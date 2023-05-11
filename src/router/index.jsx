import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
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
import { useStateContext } from '../manager/contexts/ContextProvider';
import './index.css';
import Login from '../Auth/login';
import { AuthContext } from '../Auth/AuthContext';


const Router = () => {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>;
  }

  return (
    <div className='body'>
      <div className="container_h">
        <nav className="container_n">
          <a className='text' href='/landing'>Accord Project Manager</a>
          <a className='text' href="/employees">Employees Management</a>
          <a className='text' href="/progress">Accord Board</a>
          <a className='text' href="/scheduler">Accord Scheduler</a>
          <a className='text' href="/register">Register New Employee</a>
        </nav>
        <div className='logout'>Logout</div>
      </div>

      <Routes>
        <Route path='/' element={<RequireAuth><LandingPage /></RequireAuth>} />
        <Route path='/landing' element={<RequireAuth><LandingPage /></RequireAuth>} />
        <Route path='/editor' element={<RequireAuth><UiEditor /></RequireAuth>} />
        <Route path='/employees' element={<RequireAuth><Employees /></RequireAuth>} />
        <Route path='/progress' element={<RequireAuth><Accord_Board /></RequireAuth>} />
        <Route path='/scheduler' element={<RequireAuth><Scheduler /></RequireAuth>} />
        <Route path='/register' element={<RequireAuth><Register /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default Router;