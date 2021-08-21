import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState('');

    const onButtonClick = () => {
        if (feeling === ''){
            alert('Please input a score!')
        } else if (feeling < 0) {
            alert('Please enter a number 1-5')
            setFeeling(0);
        } else if (feeling > 5) {
            alert('Please enter a number 1-5')
            setFeeling(5);
        } else {
        dispatch({
            type: 'ADD_FEELING_SCORE',
            payload: feeling
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
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
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