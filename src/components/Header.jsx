import React from "react";
import logo from "../img/easy.png";
import profile from "../img/boy.png";
import { HiBell } from "react-icons/hi";
import { HiMiniSquares2X2 } from "react-icons/hi2";

const Header = ({posts}) => {
  return (
    <header className="py-3 px-1 position-fixed z-3 bg-white w-100 ">
      <div className="container d-flex align-items-center justify-content-between rounded-3 shadow-lg py-3" >
        <div className="d-flex align-items-center gap-2 " type='button'>
          <img src={logo} alt="" width="65px" />
          <h3>Easy Posts</h3>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="posts">
            <button type="button" className="btn btn-primary position-relative" style={{fontSize:"0.9rem"}}>
              Posts
              <span className="position-absolute top-0 start-100 translate-middle py-1 px-2 bg-danger border border-light rounded-circle" style={{fontSize:"0.6rem"}}>
                {posts.length}
                <span className="visually-hidden">New alerts</span>
              </span>
            </button>
           
          </div>

          <HiBell className="fs-3" type='button'/>
          <HiMiniSquares2X2 className="fs-3" type='button'/>
          <div className="profile-container" type='button'>
            <img src={profile} width="45px" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
