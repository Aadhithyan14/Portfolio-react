import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
import contactImg from '../../assets/686165.png';
import logo from '../../assets/mail.png'
import menu from '../../assets/Menu.png'
const Navbar = () =>{

    const [showMenu , setShowMenu] = useState(false);
       return(
        <nav className='navbar'> 

            <img src={logo} alt='LOGO' className='logo'/>
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy = {true} smooth  = {true} offset={-50} duration = {500} className='desktopMenuListItem'  >Home</Link>
                <Link activeClass='active' to='skills' spy = {true} smooth  = {true} offset={-50} duration = {500} className='desktopMenuListItem'>About</Link>
                {/* <Link activeClass='active' to='works' spy = {true} smooth  = {true} offset={-100} duration = {500} className='desktopMenuListItem'>Portfolio</Link> */}
                <Link activeClass='active' to='contact' spy = {true} smooth  = {true} offset={-50} duration = {500} className='desktopMenuListItem'>Contact</Link> 
                
            </div>

            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior :'smooth'});
            }}>
                <img  className='desktopMenuImg'src={contactImg} alt={contactImg}/>  Contact Me</button>
        


                <img src={menu} alt='MENU' className='mobMenu' onClick={()=> setShowMenu(!showMenu)}/>
            <div className='navMenu'n   style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy = {true} smooth  = {true} offset={-50} duration = {500} className='ListItem' onClick={()=> setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy = {true} smooth  = {true} offset={-50} duration = {500} className='ListItem' onClick={()=> setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='contact' spy = {true} smooth  = {true} offset={-50} duration = {500} className='ListItem' onClick={()=> setShowMenu(false)}>Contact</Link> 
                

            </div>

             </nav>

    )
}

export default Navbar;