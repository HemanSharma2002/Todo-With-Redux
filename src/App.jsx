import AddTodo from "./Component/AddTodo"
import Todos from "./Component/Todos"

function App() {
  return (
    < >
    <div className="flex flex-col items-center">
    <AddTodo/>
    <Todos/>
    </div>
    </>
  )
}

export default App
