import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import Typography from '@material-ui/core/Typography';

function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [feelingScore, setFeelingScore] = useState('');

    const onButtonClick = () => {
        if (feelingScore === ''){
            alert('Please input a score!')
        } else {
        dispatch({
            type: 'ADD_FEELING_SCORE',
            payload: feelingScore
        });
        history.push('/understanding');
        }
    }

    return (
        <>
            <Typography variant="h4">How are you feeling today?</Typography>
            <FormControl component="fieldset">
                    <RadioGroup row value={feelingScore} onChange={(event) => setFeelingScore(event.target.value)}>
                        <MoodIcon fontSize="large"/>
                        <FormControlLabel value="0" control={<Radio />} label="0" />
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                        <FormControlLabel value="5" control={<Radio />} label="5" />
                        <MoodBadIcon fontSize="large"/>
                    </RadioGroup>
            </FormControl>

            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onButtonClick}
                >Next<NavigateNextIcon />
                </Button>
            </div>
        </>
    )
}

export default Feeling;