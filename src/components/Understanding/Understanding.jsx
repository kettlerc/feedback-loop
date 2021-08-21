import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understandingScore, setUnderstandingScore] = useState('');

    const onButtonClick = () => {
        if (understandingScore === ''){
            alert('Please input a score!')
        } else if (understandingScore < 0) {
            alert('Please enter a number 1-5')
            setUnderstandingScore(0);
        } else if (understandingScore > 5) {
            alert('Please enter a number 1-5')
            setUnderstandingScore(5);
        } else {
        dispatch({
            type: 'ADD_UNDERSTANDING_SCORE',
            payload: understandingScore
        });
        history.push('/supported');
        }
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