import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Understanding() {
    const dispatch = useDispatch();
    const [understandingScore, setUnderstandingScore] = useState('');

    return (
        <>
            <h2>How well are you understanding the content??</h2>
            <div>
                <input 
                    type="number"
                    onChange={(event) => setUnderstandingScore(event.target.value)}
                    value={understandingScore}
                />
                <Link to={"/supported"}>
                    <button
                        onClick={() => dispatch({
                            type: 'ADD_UNDERSTANDING_SCORE',
                            payload: {understandingScore}
                        })}
                    >Next
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Understanding;