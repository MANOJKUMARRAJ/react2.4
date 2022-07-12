
import './App.css';

const List=(props)=>{
  return <p>{props.tasks.join(",")}</p>
};
export default function Todo(){
  return (
    <div className='App'>
      <h1>To Do Lists</h1>
      <h2>Today</h2>
      <List tasks={["wakeup","eat","sleep"]}/>
      <h2>Tomorrow</h2>
      <List tasks={["study","code","eat","sleep"]}/>
    </div>
  )
}
