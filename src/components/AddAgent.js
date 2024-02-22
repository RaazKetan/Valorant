import React, {useRef} from "react";


const AddAgent = (props) => {
    const nameInputRef = useRef('');
    const typeInputRef = useRef('');
    const descriptionInputRef = useRef('');

    function submitHandler(event) {
        event.preventDefault();

        const agent ={
            name: nameInputRef.current.value,
            type: typeInputRef.current.value,
            description: descriptionInputRef.current.value
        };
        props.onAddAgent(agent);
        }
return(
    <form onSubmit={submitHandler}>
        <label htmlFor="name">Agent Name</label>
        <input type="text" id="name"  ref={nameInputRef}/>
        <label htmlFor="type">Agent Type</label>
        <input type="text" id="type" ref={typeInputRef} />
        <label htmlFor="description">Agent Description</label>
        <input type="text" id="description" ref={descriptionInputRef} />
        <button>Add Agent</button>
    </form>
)
}   
export default AddAgent;