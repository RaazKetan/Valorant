import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import PopUp from "./components/PopUp/PopUp";
import AddAgent from "./components/AddAgent";
import "./App.css";

function App() {
  const [agents, setAgents] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [search, setSearch] = useState("");
  const [valid, setValid] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(true);
    fetchAgentDetail();
  };
  const closePopUp = () => {
    setShowPopUp(false);
  };

    async function fetchAgentDetail() {
      const response = await fetch("https://valorant-api.com/v1/agents");
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const transformedAgents = data.data.map((agent) => {
        return {
          uuid: agent.uuid,
          name: agent.displayName,
          description: agent.description,
          image: agent.displayIcon,
          // type: agent.role.map(role=>{return role.displayName})
        };
      });
      const filteredAgents = transformedAgents.filter((agent) => {
        return agent.name.toLowerCase().includes(search.toLowerCase());
      });

      if (filteredAgents.length === 0 || search === "") {
        return <p>Please Enter valid details</p>;
      } else {
        setValid(true);
        setAgents(filteredAgents);
      }
    }

    const onSearchChange = (e) => {
      setSearch(e.target.value);
    };

   async function AddAgentHandler(agent){
     const response = await fetch('https://valoagent-default-rtdb.firebaseio.com/agents.json',{
        method:'POST',
        body:JSON.stringify(agent),
        headers:{
          'Content-Type':'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
    }

    return (
      <React.Fragment>
        <Navbar />
        <Card />
        <AddAgent onAddAgent = {AddAgentHandler} />
        <section className="section-btn">
          {valid && showPopUp && <PopUp agents={agents} closePopUp={closePopUp} />}
          <input
            type="text"
            placeholder="Search Agents"
            value={search}
            onChange={onSearchChange}
          />
          <button onClick={togglePopUp}>Fetch Agents</button>
        </section>
      </React.Fragment>
    );
  }

  export default App;
 