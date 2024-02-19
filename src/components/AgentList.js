import React from "react";
import Agent from "./Agent";

const AgentList = (props) => {
    // console.log(props.agents[0])
    return(
        <ul>
            {props.agents.map((agent) => (
                
                <Agent
                    key={agent.uuid}
                    name={agent.name}
                    description={agent.description}
                    image={agent.image}
                    // type={agent.type}
                />
            
            ))}
        </ul>
    );
};
export default AgentList;