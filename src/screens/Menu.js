import './Menu.css';
import React from 'react';
import { useAppContext } from '../store/AppContext';

function Menu() {
  const { state, dispatch } = useAppContext();

  const setGame = (game) => {
    dispatch({ type: 'SET_GAME', payload: game });
  };

  const gamesList = [
    {
      name: 'Coin Toss',
      id: 'Coin_Toss',
      icon: 'coin'
    },
    {
      name: 'RGB Spin',
      id: 'RGB_Spin',
      icon: 'RGB'
    },
    {
      name: 'Dice Roll',
      id: 'Dice_Roll',
      icon: 'diece'
    },
  ];

  return (
    <div className="Menu">
      <ul className='Menu-List'>
        {gamesList.map((game, index) => (
          <li key={index} onClick={() => setGame(game.id)} >{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
