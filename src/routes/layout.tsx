import Navbar from '../component/UI/Navbar'
import Footer from '../component/UI/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
