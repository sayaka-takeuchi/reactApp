import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ToDoList from './todo/ToDoList';

const App = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ToDoList} />
    </Switch>
  </BrowserRouter>
  )
}

export default App;