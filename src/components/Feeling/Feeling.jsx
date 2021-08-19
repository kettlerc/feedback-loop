import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Understanding from '../Understanding/Understanding';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Feeling() {
    const dispatch = useDispatch();
    const [feelingScore, setFeelingScore] = useState('');

    return (
        <>
        <Router>
            <h2>How are you feeling today?</h2>
            <div>
                <input 
                    type="number"
                    onChange={(event) => setFeelingScore(event.target.value)}
                    value={feelingScore}
                />
                <button
                    onClick={() => dispatch({
                        type: 'ADD_FEELING_SCORE',
                        payload: feelingScore 
                    })}
                >
                    <Link to="/understanding">Next</Link>
                </button>
            </div>

            <Route path="/understanding" exact>
                <Understanding />
            </Route>
        </Router>
        </>
    )
}

export default Feeling;