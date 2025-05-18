import ToDo from './todo.jsx'
import './App.css'
import SingerInfo from './singer.jsx'
import Actor from './actor.jsx'

function App() {

 const actors =['Sahruk Khan' , 'salman Khan' , 'Amir Khan' , 'Ranbir SIng' , 'Mr. Kasem' , 'Abul Fozol' , 'Sajjad Hossain Jim' , 'GSX Suzuki' , 'Machine man']

 const singers =[
  {id:1 , name :'Tahsan Khan' ,age:'45' , song:"ALo alo"},
  {id :2 , name :'Linking Parnk' , age:"Died" ,song :"In The End Sky"},
  {id:3 , name:'Nora Fatehi' , age :'30' , song :'Bad Boys'},
  {
    id : 4 , name :'Mr. kasem' , age:'25' , song :"New Days Come"
  },
  {
    id:5, name:"Hasan ALi" , age :'26' , song:'Hamari khini new'
  }
 ]
  return (
  <>
  <h1>React JS File Here </h1>
  {
    singers.map(singer => <SingerInfo id={singer.id} name={singer.name} age={singer.age} song ={singer.song} ></SingerInfo>)
  }
  {
    actors.map(actor => <Actor name={actor}></Actor>)
  }
  {/* <ToDo task ='Today React Practice' isDone = {true}></ToDo>
  <ToDo task='Shower Taking ' isDone = {false}></ToDo>
  <ToDo task ="Go to the Super Shop" isDone={true}></ToDo> */}
      {/* <Person></Person>
      <Person></Person>
      <FavouriteMovie name="Avtar" ratting="8.5"></FavouriteMovie>
      <FavouriteMovie name="Robot 2.0" ratting="6.5"></FavouriteMovie>
      <Developer name ='JIM' status='React'></Developer>
      <Developer name ="Kubra" status="JavaScript"></Developer>
      <ShowData></ShowData>
      <Run name="Ramim Iqbal" run='10000' rate='145'></Run>
      <Run name="Sakib AL Hasan" run='20000' rate='175'></Run> */}
      
      </>
  )
}
function FavouriteMovie({name , ratting}){
  return(
    <div className='design'>
      <h3>Movie name :{name}</h3>
      <p>Ratting IMD :{ratting} out of 10</p>
    </div>
  )
}
function Person(){
return(
  <p>My name is Sajjad Hossain JIM</p>
)
}

function Developer(property){
  return(
    <div style={{
      color:'green',
      border: '2px solid red',
    borderRadius: '20px',
    marginTop:'10px'
    }}>
      <h3>Name :{property.name}</h3>
      <p>Working Field :{property.status}</p>
    </div>
  )
}

function Run({name , run , rate}){
  return(
    <div className='design'>
      <h2>Player Name :{name}</h2>
      <p>Totall run :{run}</p>
      <h3>Stike Rate :{rate}</h3>
    </div>
  )
}

function ShowData(){
  return(
    <div>
      <p>Information show here All Person</p>
    </div>
  )
}
export default App
