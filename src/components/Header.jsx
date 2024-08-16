import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isNavShow, setIsNavShow] = useState(window.innerWidth > 800 ? true: false);

  const closeNavHandler = () => {
    if(window.innerWidth < 800 ){
      setIsNavShow(false);
    }else{
      setIsNavShow(true);
    }
  };

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="nav_logo" onClick={closeNavHandler}>
          <img src={Logo} alt="Logo" />
        </Link>

        {isNavShow && (
          <ul className="nav_menu">
            <li>
              <Link to="/profile/sdfsdf" onClick={closeNavHandler}>
                Md Irshad
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={closeNavHandler}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={closeNavHandler}>
                Authors
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeNavHandler}>
                Logout
              </Link>
            </li>
          </ul>
        )}

        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavShow(!isNavShow)}
        >
          {isNavShow ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
