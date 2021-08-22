import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
            <Typography variant="h4">Any comments you want to leave?</Typography>
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
                        size="large"
                        onClick={onPrevButtonClick}
                    ><NavigateBeforeIcon />Prev
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={onNextButtonClick}
                    >Next<NavigateNextIcon />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Comments;