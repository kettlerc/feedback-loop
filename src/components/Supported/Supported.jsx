import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Supported() {
    const dispatch = useDispatch();
    const [supportedScore, setSupportedScore] = useState('');

    return (
        <>
            <h2>How well are you being supported?</h2>
            <div>
                <input 
                    type="number"
                    onChange={(event) => setSupportedScore(event.target.value)}
                    value={supportedScore}
                />
                <Link to={"/comments"}>
                    <button
                        onClick={() => dispatch({
                            type: 'ADD_SUPPORTED_SCORE',
                            payload: {supportedScore}
                        })}
                    >Next
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Supported;