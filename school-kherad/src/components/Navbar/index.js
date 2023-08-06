import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink activeclassName="active" to='/about' activeStyle>
            About
          </NavLink>
          <NavLink activeclassName="active" to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink activeclassName="active" to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink activeclassName="active" to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink activeclassName="active" to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink activeclassName="active" to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink activeclassName="active" to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;
