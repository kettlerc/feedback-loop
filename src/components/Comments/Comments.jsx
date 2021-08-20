import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Comments() {
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');

    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <div>
                <input
                    type="text"
                    onChange={(event) => setComments(event.target.value)}
                    value={comments}
                />
                <Link to={"/review"}>
                    <button
                        onClick={() => dispatch({
                            type: 'ADD_COMMENTS',
                            payload: comments
                        })}
                    >Next
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Comments;