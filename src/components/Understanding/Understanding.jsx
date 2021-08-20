import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understandingScore, setUnderstandingScore] = useState('');

    const onButtonClick = () => {
        dispatch({
            type: 'ADD_UNDERSTANDING_SCORE',
            payload: understandingScore
        });
        history.push('/supported');
    }

    return (
        <>
            <h2>How well are you understanding the content??</h2>
            <div>
                <input 
                    type="number"
                    onChange={(event) => setUnderstandingScore(event.target.value)}
                    value={understandingScore}
                />
                <button
                    onClick={onButtonClick}
                >Next
                </button>
            </div>
        </>
    )
}

export default Understanding;