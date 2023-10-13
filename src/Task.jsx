export const Task = (props) => {
    return (
        <div className="task" style={{ 
            display: "flex", 
            gap: "20px" , 
            padding: "20px", 
            backgroundColor: props.conclued ? "green" : "white",
            borderRadius: "10px",
            margin: "10px"
            
            }}>
          <p >{props.taskName}</p>
          <button onClick={() => props.completeTask(props.id)}>Complete</button>
          <button onClick={() => props.deleteTask(props.id)}> X </button>
        </div>      
    );
}