import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)] bg-white container px-4 mx-auto'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}

export default Main
