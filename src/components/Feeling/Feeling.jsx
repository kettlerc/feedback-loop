import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [feelingScore, setFeelingScore] = useState('');

    const onButtonClick = () => {
        dispatch({
            type: 'ADD_FEELING_SCORE',
            payload: feelingScore
        });
        history.push('/understanding');
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <div>
                <input 
                    type="number"
                    onChange={(event) => setFeelingScore(event.target.value)}
                    value={feelingScore}
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