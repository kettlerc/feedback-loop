import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import TextField from '@material-ui/core/TextField';


function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const onButtonClick = () => {
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        });
        history.push('/review');
    }

    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <div>
                <TextField 
                    onChange={(event) => setComments(event.target.value)}
                    value={comments}
                    label="Comments" 
                    variant="outlined" 
                />

                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onButtonClick}
                    >Next<NavigateNextIcon />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Comments;