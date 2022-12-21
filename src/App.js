import './App.css';
import Data from './Data';
import Search from './Search';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState('')
  const [order,setOrder] = useState('')

  const filteredName = (value)=>{
     setFilter(value)
     console.log('liftedState',filter)
}

const changeOrder = value =>{
  console.log(value)
  setOrder(value)
  console.log('order',order)
}

  return (
    <div className='.App'>
      <h1 className='headTitle'>What are you Looking For?</h1>
      <Search  onFilteredName={filteredName} onOrderChange={changeOrder} />
      <Data filter={filter} order={order} />
    </div>
  );
}

export default App;


