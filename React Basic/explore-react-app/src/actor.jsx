export default function Actors({name}){
    return(<li
    style={{
        color:'green',
        fontSize:'20px',
        margin:'5px',
        listStyle:'value',
        textAlign:'left'
    }}>Actor Name : {name}</li>);
}