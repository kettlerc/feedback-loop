import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

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
        <h2>Here is your feedback</h2>
        <h3>Feelings: {feedback[0]}</h3>
        <h3>Understanding: {feedback[1]}</h3>
        <h3>Support: {feedback[2]}</h3>
        <h3>Comments: {feedback[3]}</h3>
        <Button
            variant="contained"
            color="primary"
            onClick={onPrevFromReview}
        ><NavigateBeforeIcon />Prev
        </Button>
        <Button 
            onClick={submitFeedback}
            variant="contained"
            color="primary"
        >Submit Feedback<NavigateNextIcon /></Button>
        </>
    )
}

export default Review;