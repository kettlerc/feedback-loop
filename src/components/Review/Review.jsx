import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    margin: 50
  },
  textDiv: {
      marginTop: 50,
  }
});

function Review() {
    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.totalFeedback)
    const classes = useStyles();

    const submitFeedback = () => {
        if (feedback.length !== 4){
            alert('Sorry! Something went wrong, please start again')
            dispatch({
            type: 'RESET_FEEDBACK',
        });
        history.push("/")
        } else {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feedback[0],
                understanding: feedback[1],
                support: feedback[2],
                comments: feedback[3]
            }
        }).then((response) => {
            console.log(response.data);
            console.log('feedback POSTed');
        }).catch((error) => {
            console.log('POST error', error);
        });
        history.push('/feedbacksubmitted');
        }
    }

    const onPrevFromReview = () => {
        dispatch({
            type: 'GO_BACK'
        });
        history.push('/comments')
    }

    return (
        <>
        <Typography variant="h3">Here is your feedback</Typography>
        <div className={classes.textDiv}>
            <Typography variant="h5">Feelings: {feedback[0]}</Typography>
            <Typography variant="h5">Understanding: {feedback[1]}</Typography>
            <Typography variant="h5">Support: {feedback[2]}</Typography>
            <Typography variant="h5">Comments: {feedback[3]}</Typography>
        </div>
        <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<NavigateBeforeIcon />}
            onClick={onPrevFromReview}
        >Prev
        </Button>
        <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            endIcon={<SendIcon />}
            onClick={submitFeedback}
        >Submit Feedback</Button>
        </>
    )
}

export default Review;