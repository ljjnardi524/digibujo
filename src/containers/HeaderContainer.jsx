import React, { useState } from 'react';
import Navbar from '../components/main/Header/Navbar';

const HeaderContainer = (props) => {
    return (
        <header className="header trans-300">
          {/*<TopNav/>*/}
          <Navbar/>
        </header>
      );
    };

export default HeaderContainer;