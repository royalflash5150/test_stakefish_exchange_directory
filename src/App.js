import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ExchangeList from './components/ExchangeList';
import ExchangeDetail from './components/ExchangeDetail';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ExchangeList/>
          </Route>
          <Route path="/detail/:id">
            <ExchangeDetail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
