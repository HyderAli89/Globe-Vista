// import React,{useRef,useEffect} from 'react'
// import { Container , Row,Button } from 'reactstrap'
// import {NavLink,Link} from 'react-router-dom'
// import logo from '../../assets/images/logo.png'
// import './Header.css' ;

// const nav_links=[
//   {
//     path:'/home',
//     display:"Home"
//   },
//   {
//     path:'/about',
//     display:"About"
//   },
//   {
//     path:'/tours',
//     display:"Tours"
//   },
// ]

// const Header = () => {
//   const headerRef=useRef(null)

//   const stickyHeaderFunc = () => {
//     window.addEventListener('scroll',()=>{
//       if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
//             headerRef.current.classList.add('sticky__header')
//       }
//       else{
//           headerRef.current.classList.remove('sticky__header')
//       }
//     })
//   }
//   useEffect(()=>{
//     stickyHeaderFunc()
//     return window.removeEventListener('scroll',stickyHeaderFunc)
//   })
//   return (
//     <div>
//       <header className='header' ref={headerRef}>
//         <Container>
//           <Row>
//             <div className="nav__wrapper d-flex align-items-center justify-content-between">

//                 {/*logo Start */}
//                 <div className="logo">
//                   <img src={logo} alt=''></img>
//                 </div>
//                 {/*logo End */}

//                 {/*Menu Start*/}
//                   <div className="navigation">
//                     <ul className="menu d-flex align-item-center gap-5">
//                       {
//                         nav_links.map((item,index) => (
//                           <li className="nav__item" key={index}>
//                             <NavLink to={item.path} className={navClass=> navClass.isActive? 'active__link':""}>{item.display}</NavLink>
//                           </li>
//                         ))
//                       }
//                     </ul>
//                   </div>
//                 {/*Menu End */}

//                 <div className="nav__right d-flex align-items-center gap-4">
//                   <div className="nav__btns d-flex align-items-center gap-4">
//                       <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
//                       <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
//                   </div>
//                   <span className="mobile__menu">
//                   <i class="ri-menu-line"></i>
//                   </span>
//                 </div>
//             </div>
//           </Row>
//         </Container>
//       </header>
//     </div>
//   )
// }

// export default Header
import React, { useRef, useEffect,useContext } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link,useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';
import {AuthContext} from './../../context/AuthContext.js'

const nav_links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
  {
    path: '/gallery',
    display: 'Gallery',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate=useNavigate()
  const {user,dispatch}=useContext(AuthContext)

  const logout=()=>{
    dispatch({type:"LOGOUT"})
    navigate('/')
  }

  const stickyHeaderFunc = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add('sticky__header');
    } else {
      headerRef.current.classList.remove('sticky__header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyHeaderFunc);

    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, []); // Pass an empty dependency array to ensure the effect runs only once
  const toggleMenu=()=>menuRef.current.classList.toggle("show__menu")
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo Start */}
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            {/* Logo End */}

            {/* Menu Start */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass) => (navClass.isActive ? 'active__link' : '')}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* Menu End */}

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                  {
                    user?(<>
                    <h5 className='mb-0'>{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>LogOut</Button>
                    </>):(<>
                    <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
                    </>)
                  }
                
              </div>
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
