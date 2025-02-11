

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../routes/ScrollToTop'


const Main = () => {
  return (
    <div className='bg-white'>
      <ScrollToTop></ScrollToTop>
      
      <Navbar></Navbar>
      
      
        <div>
        <Outlet />
        </div>
      
      
      <Footer></Footer>
    </div>
  )
}

export default Main

