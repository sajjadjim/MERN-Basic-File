export default ToDo
function ToDo({task , isDone}){
    if(isDone === true){
 return(
    <li style={{
        color:'green',
        fontSize:"20px"
    }}>Task Completed :{task}</li>
 )
    }
    else{
        return(<li style={{
            color:'red',
            fontSize:'20px',
            display:"none"
        }}
        >Task Pending :{task}</li>)
    }
}
