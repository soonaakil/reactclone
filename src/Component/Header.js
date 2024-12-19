import React from 'react'
import { FaGithub, FaRegMoon } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import img1 from '../images/weblogo.png';

function Header() {
  return (
    <>
       <div className='header'>
                <div className="img-sec">
                    <img src={img1} alt="React Logo" width={40} height={40} />
                    <a href="#home">v18.3.1</a>
                </div>
                {/* <div className="input-area">
                <CiSearch />
                <input type="text" placeholder='Search' />
                </div> */}
                <div class="input-box">
                    <i class="uil uil-search"></i>
                    <input type="text" placeholder="Search" />
                    <button class="button btn-1">ctrl</button>
                    <button class="button btn-2">K</button>
                </div>

                <div className="nav-menu">
                    <ul>
                    {/* <a href='#learn' className='active' style={{textDecoration: 'none', marginTop:'12px',color: '#238db0'}}>Learn</a> */}
                    <div className='active-learn-div'><a href='#learn' className='active'>Learn</a></div>
                        <li>Reference</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li className='fa-icon'>
                              <FaRegMoon />
                        </li>
                        <li className='fa-icon'>
                              <IoLanguageSharp />
                        </li>
                        <li className='fa-icon'>
                              <FaGithub />
                        </li>
                    </ul>
                </div>
         </div> {/* End of header */}
    </>
  )
}

export default Header