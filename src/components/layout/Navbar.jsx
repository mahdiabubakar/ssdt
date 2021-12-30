import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../context/user/userContext';

function Navbar() {
  // useContext initialization
  const userContext = useContext(UserContext);

  // Menu State
  const [menu, setMenu] = useState('home');

  // Set Home
  const setHome = () => {
    setMenu('home');
  };

  // Set Skills
  const setSkills = () => {
    setMenu('skills');
  };

  // Set Services
  const setService = () => {
    setMenu('services');
  };

  // useEffect(() => {
  //   userContext.getUser();

  //   // eslint-disable-next-line
  // }, []);

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='!#' className='nav__logo'>
          Mahdi
        </a>
        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a
                href={menu === 'home' && `#${menu.toString()}`}
                onClick={setHome}
                className={
                  menu === 'home' ? 'nav__link active-link' : 'nav__link'
                }
                style={{ cursor: 'pointer' }}>
                <i className='nav__icon fal fa-home-lg-alt'></i>
                <span className='nav__name'>Home</span>
              </a>
            </li>

            <li className='nav__item'>
              <a
                onClick={setSkills}
                href={menu === 'skills' && `#${menu.toString()}`}
                style={{ cursor: 'pointer' }}
                className={
                  menu === 'skills' ? 'nav__link active-link' : 'nav__link'
                }>
                <i className='nav__icon fal fa-cog'></i>
                <span className='nav__name'>Skills</span>
              </a>
            </li>
            <li className='nav__item'>
              <a
                onClick={setService}
                href={menu === 'services' && `#${menu.toString()}`}
                style={{ cursor: 'pointer' }}
                className={
                  menu === 'services' ? 'nav__link active-link' : 'nav__link'
                }>
                <i className='nav__icon fal fa-hands-helping'></i>
                <span className='nav__name'>Services</span>
              </a>
            </li>
          </ul>
        </div>
        <img src='assets/img/perfil.png' alt='' className='nav__img' />
      </nav>
    </header>
  );
}

export default Navbar;
