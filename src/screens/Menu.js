import './Menu.css';
import React from 'react';
import { useAppContext } from '../store/AppContext';
import { constants } from '../helpers/constanst';

function Menu() {
  const { state, dispatch } = useAppContext();

  const setGame = (game) => {
    dispatch({ type: 'SET_GAME', payload: game });
  };

  const gamesList = constants?.gamesList;

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
