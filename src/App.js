import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';

function App() {

 async function fetchAgentDetail(){
   const response = await fetch('https://valorant-api.com/v1/agents')
      const data = await response.json(); 
      if(data.data[0].displayName === 'Gekko')
    console.log(data.data[0].description);
  }
  return (
   <React.Fragment>
      <Navbar />
      <Card/>
      <section>
        <button onClick={fetchAgentDetail}>Fetch Agents</button>
        </section>
   </React.Fragment>
  );
}

export default App;
