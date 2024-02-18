import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import AgentList from './components/AgentList';
import './App.css';

function App() {
const [agents, setAgents] = useState([]);

 async function fetchAgentDetail(){
   const response = await fetch('https://valorant-api.com/v1/agents')
      const data = await response.json(); 
      console.log(data.data[0].role.displayName); 
      const transformedAgents = data.data.map(agent => {
        return {
          uuid: agent.uuid,
          name: agent.displayName,
          description: agent.description,
          image: agent.displayIcon,
          // type: agent.role.map(role=>{return role.displayName})
        }
      });
      setAgents(transformedAgents); 
  };
  return (
   <React.Fragment>
      <Navbar />
      <Card/>
      <section>
        <button onClick={fetchAgentDetail}>Fetch Agents</button>
        </section>
      <AgentList agents = {agents}/>
   </React.Fragment>
  );
}

export default App;
