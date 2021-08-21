import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

function FeedbackSubmitted() {
    const dispatch = useDispatch();
    const history = useHistory();
    const onButtonClick = () => {
        dispatch({
            type: 'RESET_FEEDBACK',
        });
        history.push("/")
    }

    return (
        <>
        <h1>Thank you for your feedback!</h1>
        <Button 
            onClick={onButtonClick}
            variant="contained"
            color="primary"
        >Leave New Feedback</Button>
        </>
    )
}

export default FeedbackSubmitted;