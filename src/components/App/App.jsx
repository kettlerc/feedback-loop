import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>


      <Route path="/feeling">
        <Feeling />
      </Route>

      <Route path="/understanding">
        <Understanding />
      </Route>

      <Route path="/supported">
        <Supported />
      </Route>

      <Route path="/comments">
        <Comments />
      </Route>

      <Route path="/review">
        <Review />
      </Route>

      <Route path="/feedbacksubmitted">
        <FeedbackSubmitted />
      </Route>
      </Router>
    </div>
  );
}

export default App;
