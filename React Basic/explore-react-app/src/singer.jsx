
export default function SingerInformation({id , name , age , song}){
    return(
        <div style={{
            textAlign:'left',
            border:'2px solid yellow',
            margin:'5px',
            borderRadius:'10px',
            padding:'5px'
        }}>
            <h3 style={{color:'skyblue'}}>Id Number :{id}</h3>
            <h4 style={{color:'red'}}>Singer name :{name}</h4>
            <p>AGE : {age}</p>
            <h4>Song Name :{song}</h4>
        </div>
    )
}