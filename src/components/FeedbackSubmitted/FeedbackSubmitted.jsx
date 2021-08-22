import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    margin: 50
  }
});

function FeedbackSubmitted() {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
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
            className={classes.button}
            onClick={onButtonClick}
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowUpwardIcon />}
        >Leave New Feedback</Button>
        </>
    )
}

export default FeedbackSubmitted;