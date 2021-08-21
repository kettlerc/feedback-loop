import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Supported() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [supportedScore, setSupportedScore] = useState('');

    const onButtonClick = () => {
        if (supportedScore === ''){
            alert('Please input a score!')
        } else if (supportedScore < 0) {
            alert('Please enter a number 1-5')
            setSupportedScore(0);
        } else if (supportedScore > 5) {
            alert('Please enter a number 1-5')
            setSupportedScore(5);
        } else {
        dispatch({
            type: 'ADD_SUPPORTED_SCORE',
            payload: supportedScore
        });
        history.push('/comments');
        }
    }

    return (
        <>
            <h2>How well are you being supported?</h2>
            <div>
                <input 
                    type="number"
                    onChange={(event) => setSupportedScore(event.target.value)}
                    value={supportedScore}
                />
                <button
                    onClick={onButtonClick}
                >Next
                </button>
            </div>
        </>
    )
}

export default Supported;