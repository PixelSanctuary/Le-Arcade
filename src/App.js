import './App.css';
import './components/Header';
import Header from './components/Header';
import CoinSpin from './games/CoinSpin';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <body>
       <CoinSpin/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
