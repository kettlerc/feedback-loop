import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import TextField from '@material-ui/core/TextField';


function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const onNextButtonClick = () => {
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        });
        history.push('/review');
    }

    const onPrevButtonClick = () => {
        dispatch({
            type: 'GO_BACK'
        });
        history.push('/supported')
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
                        onClick={onPrevButtonClick}
                    ><NavigateBeforeIcon />Prev
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onNextButtonClick}
                    >Next<NavigateNextIcon />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Comments;