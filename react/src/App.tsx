import HelloWorld from './components/HelloWorld';
import UserCard from './components/UserCard';
import TitleButton from './components/TitleButton';
import TodoList from './components/TodoList';
import './App.css'

function App() {


  return (
    <>
      <HelloWorld />
      <UserCard name="John Doe" email="john.doe@example.com" />
      <TitleButton title="Soy un titulo :)" onClick={() => alert('Button clicked!')} />
      <TodoList />
      
    </>
  )
}

export default App
