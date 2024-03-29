import './App.css';
import './components/Header';
import Header from './components/Header';
import Menu from './screens/Menu';
import CoinSpin from './games/CoinSpin';
import RGBspin from './games/RGBspin';
import DiscoDice from './games/DiscoDice';
import SpinWheel from './games/SpinWheel';
import DiceRoll from './games/DiceRoll';
import Footer from './components/Footer';
import { useAppContext } from './store/AppContext';

function App() {
  const { state, dispatch } = useAppContext();

  return (
    <div className="App">
      <Header/>
      <body>
       {!state.selectedGame && <Menu/> }
       { state.selectedGame === 'Coin_Toss' && <CoinSpin/> }
       { state.selectedGame === 'RGB_Spin' && <RGBspin/> }
       { state.selectedGame === 'Disco_Dice' && <DiscoDice/> }
       { state.selectedGame === 'Spin_Wheel' && <SpinWheel/> }
       { state.selectedGame === 'Dice_Roll' && <DiceRoll/> }
      </body>
      <Footer/>
    </div>
  );
}

export default App;
