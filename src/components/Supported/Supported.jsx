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

function Supported() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [supportedScore, setSupportedScore] = useState('');

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
            <h2>How well are you being supported?</h2>
            <FormControl component="fieldset">
                    <RadioGroup row value={supportedScore} onChange={(event) => setSupportedScore(event.target.value)}>
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
                    onClick={onPrevButtonClick}
                ><NavigateBeforeIcon />Prev
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onNextButtonClick}
                >Next<NavigateNextIcon />
                </Button>
            </div>
        </>
    )
}

export default Supported;