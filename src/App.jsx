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
import FinalCategory from './Components/FinalCategory';
import PaSparet from './Components/PaSparetComponent'
import PhotoReveal from './Components/PhotoReveal';

const App = () => {

  return (
    <div className="App" style={{height: '100%'}}>
      <Router>
        <HeaderComponent />
            <Switch>  
              <Route exact path="/" component = {JeopardyComp}></Route>
              <Route path="/question" component = {QuestionComponent}></Route>
              <Route path="/final-jeopardy" component = {FinalJeopardy}></Route>
              <Route path="/results" component = {ResultsComponent}></Route>
              <Route path="/final-category" component = {FinalCategory}></Route>
              <Route path="/pa-sparet" component={PaSparet}></Route>
              <Route path="/photo-reveal" component={PhotoReveal}></Route>
            </Switch>
        
      </Router>
    </div>
  );
}

export default App;
