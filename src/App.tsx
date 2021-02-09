import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ToDoDetail from './todo/ToDoDetail';
import ToDoList from './todo/ToDoList';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ToDoList} />
      <Route path="/to_dos/:id" component={ToDoDetail} />
    </Switch>
  </BrowserRouter>
  );

export default App;