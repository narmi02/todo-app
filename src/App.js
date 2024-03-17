
import './App.css';
import Nav from './Components/Nav';
import Todo from './Components/Todo';
import Todostate from './context/Todostate';
function App() {
  return (
    <>
    <Todostate>
    <Nav/>
    <Todo/>
    </Todostate>
    </>
  )
}

export default App;
