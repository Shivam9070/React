import { useState } from 'react';
import './App.css';

import CurrencyConvertor from './components/currency-convertor';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <CurrencyConvertor />
    </div>
  );
}

export default App;

