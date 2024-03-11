import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mainContents from '../css/mainContents.css';

import { Outlet } from "react-router-dom";
function MainContents() {
  return(
    <div className='main-contiener'>
      <Navbar/>
      <Outlet/>
      <Footer />
    </div>
  )
}

export default MainContents;