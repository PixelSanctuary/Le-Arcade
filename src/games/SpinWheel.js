import './SpinWheel.css';
import Wheel from '../components/Wheel'

function SpinWheel() {
  return (
    <div className="SpinWheel">
      <Wheel/>
      <div className="pointer"></div>
    </div>
  );
}

export default SpinWheel;
