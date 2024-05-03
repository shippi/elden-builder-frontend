'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { AuthContext } from '@/context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { LoginModal, ResetPasswordModal, SignUpModal, SignUpSuccessModal, UserDropdown } from '.';

function NavBar() {
  const pathname = usePathname();
  const {signUpOpened, setSignUpOpened, signUpSuccessOpened, loginOpened, setLoginOpened, resetOpened, setResetOpened, currentUser, username} = useContext(AuthContext);
  const [userDropdownOpened, setUserDropdownOpened] = useState(false);
  
  // hook that closes the user dropdown if page or current user is changed
  useEffect(() => {
    setUserDropdownOpened(false);
  }, [pathname, currentUser])
  

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    {signUpOpened ? <SignUpModal/> : signUpSuccessOpened ? <SignUpSuccessModal/> : loginOpened && <LoginModal/>}
    {userDropdownOpened && <UserDropdown onClickOutside={() => setUserDropdownOpened(false)}/>}
    {resetOpened && <ResetPasswordModal/>}
    <div className="navbar">
        <Link href="/" className="logo">ELDEN BUILDER</Link>
        <div className="navbar-buttons">
          <Link href="/builds" className={"navbar-btn" + (pathname == "/builds" ? " selected-page" : "")}>View Builds</Link>
          <Link href="/build-creator" className={"navbar-btn" + (pathname == "/build-creator" ? " selected-page" : "")}>Build Creator</Link>
          <Link href="https://ko-fi.com/shippi" target="_blank"className="navbar-btn">Donate</Link>
          {
            username ?
            <>
              <Link href="" className="navbar-btn"></Link>
              <div style={{borderLeft: "1px solid gray", height:"25px"}}></div>
              <Link href="" className="navbar-btn">
                <div className={userDropdownOpened ? "disabled-link" : ""} onClick={() => {setUserDropdownOpened(!userDropdownOpened)}}>
                  {username}
                  <div style={{width: "10px"}}/>
                  <i className={(!userDropdownOpened ? "" : "rotate") + " fa fa-angle-down"} aria-hidden="true"></i>
                </div>
              </Link>
            </> 
            :
            <>
              <Link href="" className="navbar-btn" onClick={() => setLoginOpened(true)}>Log In</Link>
              <div style={{borderLeft: "1px solid gray", height:"25px"}}></div>
              <Link href="" className="navbar-btn" onClick={() => setSignUpOpened(true)}>Sign Up</Link>
            </>
          }
        </div>
    </div>
    </>
  )
}

export default NavBar