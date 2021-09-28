import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    margin: 50
  },
  text: {
      marginTop: 50,
      width: 500
  }
});

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');
    const classes = useStyles();

    const onNextButtonClick = () => {
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        });
        history.goBack();
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
                    className={classes.text}
                    onChange={(event) => setComments(event.target.value)}
                    value={comments}
                    label="Comments" 
                    variant="outlined" 
                />

                <div>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<NavigateBeforeIcon />}
                        onClick={onPrevButtonClick}
                    >Prev</Button>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<NavigateNextIcon />}
                        onClick={onNextButtonClick}
                    >Next</Button>
                </div>
            </div>
        </>
    )
}

export default Comments;