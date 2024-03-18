import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div>
      <Stars count={2} />
      <Stars count={5} />
      <Stars count={3} />
    </div>
  );
}

export default App;