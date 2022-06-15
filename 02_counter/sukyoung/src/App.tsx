import { ReactElement, useState } from 'react';
import { Layout, Button } from './components';
import './App.css';

function App(): ReactElement {
  const [ num, setNum ] = useState(0);
  const handleDecrease = () => setNum(prev => prev - 1);
  const handleReset = () => setNum(0);
  const handleIncrease = () => setNum(prev => prev + 1);

  return (
    <Layout>
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
    </Layout>
  );
}

const ButtonDecrease: React.FC<{handleDecrease: () => void}> = ({handleDecrease}) => {

  return (
    <Button onClick={handleDecrease}>
      Decrease
    </Button>
  );
}

const ButtonReset: React.FC<{handleReset: () => void}> = ({handleReset}) => {

  return(
    <Button onClick={handleReset}>
      Reset
    </Button>
  );
}

const ButtonIncrease: React.FC<{handleIncrease: () => void}> = ({handleIncrease}) => {

  return (
    <Button onClick={handleIncrease}>
      Increase
    </Button>
  );
}

export default App;
