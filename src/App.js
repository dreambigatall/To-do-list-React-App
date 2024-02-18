import logo from './logo.svg';
import './App.css';
import Header from './component/Head';
import Form from './component/Form';
import Item from './component/Item';
import Stat from './component/stat';
import { useState } from 'react';
function App() {
  const [storage, setstorage]=useState([
    
  ]);
  function handleStorage(newData){
    setstorage(prevValue=>[...prevValue, newData])
    console.log(storage)
  }
  function handlDeletedData(id){
    setstorage(storage=>storage.filter((prev) => prev.id !== id))

  }
  function handleTogell(id){
    setstorage((items)=>
    items.map((item)=>
    item.id===id ? {...item, isPacked:!item.isPacked}:item )
    );
  }
  return (
    <div className='App' >

      
        <Header/>
        <Form submitedData={handleStorage}/>
        <Item items={storage}
       handleDeleteItem={handlDeletedData}
       toggleItem={handleTogell}/>
       <Stat datas={storage}/>
     
      
    </div>
  );
}

export default App;
