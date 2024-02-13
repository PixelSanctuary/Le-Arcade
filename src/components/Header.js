import React, { useState } from 'react';
import { useAppContext } from '../store/AppContext';
import './Header.css';

function Header() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const { state, dispatch } = useAppContext();

  const setGame = (game) => {
    dispatch({ type: 'SET_GAME', payload: game });
  };

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  const homeIcon = (
    <svg
      onClick={() => setGame('')}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
    </svg>
  );

  const menuCollapsed = (
    <svg
      onClick={toggleMenu}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );

  const menuExpanded = (
    <svg
      onClick={toggleMenu}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" />
    </svg>
  );

  return (
    <div className="Header">
      {homeIcon}
      <h1>Le Arcade</h1>
      {isMenuExpanded ? menuExpanded : menuCollapsed}
    </div>
  );
}

export default Header;
