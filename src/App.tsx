import NavBar from "./components/NavBar"
import TodoList from "./components/TodoList";
import  TodoContext  from "./contexts/TodoContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddTodo from "./components/AddTodo";


function App() {

  return (
    <TodoContext>
      <Router>
      <NavBar></NavBar>
        <br/>
        <div className="uk-container">
            <Switch>
              <Route path={'/create'}>
                <AddTodo></AddTodo>
              </Route>
              <Route>
                <h4>Minha lista</h4>
                <TodoList></TodoList>
              </Route>
            </Switch>
        </div>
      </Router>
    </TodoContext>
  )
}

export default App
