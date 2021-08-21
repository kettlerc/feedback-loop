import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import FeedbackSubmitted from '../FeedbackSubmitted/FeedbackSubmitted';
import AdminPage from '../AdminPage/AdminPage';


function App() {
  
  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <img src="https://larryferlazzo.edublogs.org/files/2020/03/feedback_1583238216.png" alt="" />
        </header>
        <Route path="/" exact>
          <Feeling 
          />
        </Route>

        <Route path="/understanding">
          <Understanding
          />
        </Route>

        <Route path="/supported">
          <Supported 
          />
        </Route>

        <Route path="/comments">
          <Comments 
          />
        </Route>

        <Route path="/review">
          <Review />
        </Route>

        <Route path="/feedbacksubmitted">
          <FeedbackSubmitted />
        </Route>

        <Route path="/adminpage">
          <AdminPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
