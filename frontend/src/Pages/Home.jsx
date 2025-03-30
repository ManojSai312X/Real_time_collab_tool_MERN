import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Mainpage from '../Components/Mainpage.jsx';
const Home = () => {

  return (
    <>
    <Navbar/>   
    {/* Main content container */}
    <div className="flex flex-col justify-center items-center h-[calc(100vh-navbarHeight)] gap-8">
        <main className={`w-4/5 max-w-screen-xl mt-10 flex items-center justify-center p-8
          
          `}>
          <Mainpage/>
        </main>
      </div>
    </>
  )
}

export default Home
