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
      <h1 className='title'>Counter</h1>
      <h2 className='result'>{num}</h2>
      <form>
        <Button onClick={handleDecrease}>Decrease</Button>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleIncrease}>Increase</Button>
      </form>
    </Layout>
  );
}

export default App;
