import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [feelingScore, setFeelingScore] = useState('');

    const onButtonClick = () => {
        if (feelingScore === ''){
            alert('Please input a score!')
        } else if (feelingScore < 0) {
            alert('Please enter a number 1-5')
            setFeelingScore(0);
        } else if (feelingScore > 5) {
            alert('Please enter a number 1-5')
            setFeelingScore(5);
        } else {
        dispatch({
            type: 'ADD_FEELING_SCORE',
            payload: feelingScore
        });
        history.push('/understanding');
        }
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <div>
                <input 
                    type="number"
                    value={feelingScore}
                    onChange={(event) => setFeelingScore(event.target.value)}
                />
                <button
                    onClick={onButtonClick}
                >Next
                </button>
            </div>
        </>
    )
}

export default Feeling;