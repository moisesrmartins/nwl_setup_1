import { Habit } from './components/Habit'
import './App.css'
import "./styles/global.css"

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Habit completed={1}/>
      <Habit completed={2}/>
      <Habit completed={3}/>
      <Habit completed={4}/>
    </div>
  )
}

export default App
