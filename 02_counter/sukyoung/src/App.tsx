import { useState } from 'react';
import './App.css';

function App() {

  const [ num, setNum ] = useState(0);
  const handleDecrease = () => setNum(prev => prev - 1);
  const handleReset = () => setNum(0);
  const handleIncrease = () => setNum(prev => prev + 1);

  return (
    <main>
      <h1 className='title'>
        Counter
      </h1>
      <h2 className='result'>
        {num}
      </h2>
      <form>
        <ButtonDecrease handleDecrease={handleDecrease} />
        <ButtonReset handleReset={handleReset} />
        <ButtonIncrease handleIncrease={handleIncrease} />
      </form>
    </main>
  );
}

const ButtonDecrease: React.FC<{handleDecrease: () => void}> = ({handleDecrease}) => {

  return (
    <button 
      type="button"
      onClick={handleDecrease}
    >
      Decrease
    </button>
  );
}

const ButtonReset: React.FC<{handleReset: () => void}> = ({handleReset}) => {

  return(
    <button 
      type="button"
      onClick={handleReset}
    >
      Reset
    </button>
  );
}

const ButtonIncrease: React.FC<{handleIncrease: () => void}> = ({handleIncrease}) => {

  return (
    <button 
      type="button"
      onClick={handleIncrease}
    >
      Increase
    </button>
  );
}

export default App;
