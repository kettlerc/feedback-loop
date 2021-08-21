import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'

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
        <h3>Here is your feedback</h3>
        <h3>Feelings: {feedback[0]}</h3>
        <h3>Understanding: {feedback[1]}</h3>
        <h3>Support: {feedback[2]}</h3>
        <h3>Comments: {feedback[3]}</h3>
        <button onClick={submitFeedback}>Submit Feedback</button>
        </>
    )
}

export default Review;