import React from 'react';
import logo from '../../img/logo.png'
import logo2 from '../../img/logo2.png'

function Header(){
  return (
      <header className={'center'}>
        <img src={logo} alt={''}/>
        <img src={logo2} alt={''}/>
      </header>
  )
}

export default Header;