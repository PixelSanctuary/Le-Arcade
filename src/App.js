import './App.css';
import './components/Header';
import Header from './components/Header';
import Menu from './screens/Menu';
import CoinSpin from './games/CoinSpin';
import RGBspin from './games/RGBspin';
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
      </body>
      <Footer/>
    </div>
  );
}

export default App;
