import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        <Typography variant="h2">Thank you for your feedback!</Typography>
        <Button 
            onClick={onButtonClick}
            variant="contained"
            color="primary"
            size="large"
        >Leave New Feedback</Button>
        </>
    )
}

export default FeedbackSubmitted;