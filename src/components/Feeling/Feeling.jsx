import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Feeling() {
    const dispatch = useDispatch();
    const [feelingScore, setFeelingScore] = useState('');

    return (
        <>
            <h2>How are you feeling today?</h2>
            <div>
                <input 
                    type="number"
                    onChange={(event) => setFeelingScore(event.target.value)}
                    value={feelingScore}
                />
                <Link to={"/understanding"}>
                    <button
                        onClick={() => dispatch({
                            type: 'ADD_FEELING_SCORE',
                            payload: {feelingScore}
                        })}
                    >Next
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Feeling;