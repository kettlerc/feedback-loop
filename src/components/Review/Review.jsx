import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Typography from '@material-ui/core/Typography';

function Review() {
    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.totalFeedback)

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
        <Typography variant="h4">Feelings: {feedback[0]}</Typography>
        <Typography variant="h4">Understanding: {feedback[1]}</Typography>
        <Typography variant="h4">Support: {feedback[2]}</Typography>
        <Typography variant="h4">Comments: {feedback[3]}</Typography>
        <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onPrevFromReview}
        ><NavigateBeforeIcon />Prev
        </Button>
        <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={submitFeedback}
        >Submit Feedback<NavigateNextIcon /></Button>
        </>
    )
}

export default Review;