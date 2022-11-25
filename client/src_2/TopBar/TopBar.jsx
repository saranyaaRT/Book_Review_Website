import './TopBar.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Context";
import React from 'react'

function TopBar() {
const { user, dispatch } = useContext(Context);
const PF = "http://localhost:5000/images/"

const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className='top'>
        <div className="topleft">
            <i class="topIcon fa-brands fa-facebook-square"></i>
            <i class="topIcon fa-brands fa-twitter-square"></i>
            <i class="topIcon fa-brands fa-pinterest-square"></i>
            <i class="topIcon fa-brands fa-instagram-square"></i>
        </div>
        {/* <div className="topcenter">
            <ul className='topList'> 
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </div> */}
         <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

        {/* <div className="topright">
            <i class="topIcon fa-solid fa-magnifying-glass-plus"></i>
            <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
            <img className="topProfileImg" src={user.profilePic} alt=''/>
            
        </div> */}
         <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
    // </div>
  )
}

export default TopBar
