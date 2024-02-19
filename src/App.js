import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import AgentList from './components/AgentList';
import PopUp from './components/Pop-Up/PopUp';
import './App.css';

function App() {
const [agents, setAgents] = useState([]);
const [showPopUp, setShowPopUp] = useState(false);

const togglePopUp = () => {
  setShowPopUp(!showPopUp);
  console.log(showPopUp);
  fetchAgentDetail();
}

 async function fetchAgentDetail(){
   const response = await fetch('https://valorant-api.com/v1/agents')
      const data = await response.json(); 
      console.log(data.data[0]); 
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
      <section className='section-btn'>
        {/* {showPopUp && <PopUp />} */}
        <button onClick={togglePopUp}>Fetch Agents</button>
        </section>
      <AgentList agents = {agents}/>
   </React.Fragment>
  );
}

export default App;
