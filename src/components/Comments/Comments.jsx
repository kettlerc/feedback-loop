import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const onButtonClick = () => {
        if (comments === ''){
            alert('Please provide a brief comment!')
        } else {
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        });
        history.push('/review');
        }
    }

    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <div>
                <input
                    type="text"
                    onChange={(event) => setComments(event.target.value)}
                    value={comments}
                />
                <button
                    onClick={onButtonClick}
                >Next
                </button>
            </div>
        </>
    )
}

export default Comments;