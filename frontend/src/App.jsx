// import { useState } from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home.jsx';
import NOpage from './Pages/Nopage.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import TeamEditorPage from './Pages/Teameditor.jsx';
// import MainApp from './App.jsx'; // Renamed the imported App component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'*',
    element:<NOpage/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/team',
    element:<TeamEditorPage/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;