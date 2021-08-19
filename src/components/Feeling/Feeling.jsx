import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Understanding from '../Understanding/Understanding';


function Feeling() {

    
    return (
        <>
        <Router>
            <h2>How are you feeling today?</h2>
            <div>
                <input type="number"></input>
                <button>
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