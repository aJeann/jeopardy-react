import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import './App.css';
import HeaderComponent from './Components/HeaderComp';
import JeopardyComp from './Components/JeopardyComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './Components/FooterComponent';
import QuestionComponent from './Components/QuestionComponent';
import FinalJeopardy from './Components/FinalJeopardy';
import ResultsComponent from './Components/ResultsComponent';

const App = () => {

  return (
    <div className="App">
      <Router>
        <HeaderComponent />
            <Switch>  
              <Route exact path="/" component = {JeopardyComp}></Route>
              <Route path="/question" component = {QuestionComponent}></Route>
              <Route path="/final-jeopardy" component = {FinalJeopardy}></Route>
              <Route path="/results" component = {ResultsComponent}></Route>
            </Switch>
        
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
