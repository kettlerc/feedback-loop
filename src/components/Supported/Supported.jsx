import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    margin: 50
  },
  radios: {
      marginTop: 50,
  },
  icons: {
    marginLeft: 30,
    marginRight: 30
  }
});

function Supported() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [supportedScore, setSupportedScore] = useState('');
    const classes = useStyles();

    const onNextButtonClick = () => {
        if (supportedScore === ''){
            alert('Please input a score!')
        } else {
        dispatch({
            type: 'ADD_SUPPORTED_SCORE',
            payload: supportedScore
        });
        history.push('/comments');
        }
    }

    const onPrevButtonClick = () => {
        dispatch({
            type: 'GO_BACK'
        });
        history.push('/understanding')
    }

    return (
        <>
            <Typography variant="h4">How well are you being supported?</Typography>
            <FormControl component="fieldset">
                    <RadioGroup row className={classes.radios} value={supportedScore} onChange={(event) => setSupportedScore(event.target.value)}>
                        <MoodBadIcon className={classes.icons} fontSize="large"/>
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                        <FormControlLabel value="5" control={<Radio />} label="5" />
                        <MoodIcon className={classes.icons} fontSize="large"/>
                    </RadioGroup>
            </FormControl>

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
        </>
    )
}

export default Supported;