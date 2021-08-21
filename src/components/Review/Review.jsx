import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Review() {
    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.totalFeedback)

    const submitFeedback = () => {
        if (feedback.length > 4){
            alert('Something went wrong, please start again and make sure not to use your browser back button')
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

    return (
        <>
        <h2>Here is your feedback</h2>
        <h3>Feelings: {feedback[0]}</h3>
        <h3>Understanding: {feedback[1]}</h3>
        <h3>Support: {feedback[2]}</h3>
        <h3>Comments: {feedback[3]}</h3>
        <Button 
            onClick={submitFeedback}
            variant="contained"
            color="primary"
        >Submit Feedback<NavigateNextIcon /></Button>
        </>
    )
}

export default Review;