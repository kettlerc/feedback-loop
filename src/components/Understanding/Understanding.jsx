import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understandingScore, setUnderstandingScore] = useState('');

    const onButtonClick = () => {
        if (understandingScore === ''){
            alert('Please input a score!')
        } else {
        dispatch({
            type: 'ADD_UNDERSTANDING_SCORE',
            payload: understandingScore
        });
        history.push('/supported');
        }
    }

    return (
        <>
            <h2>How well are you understanding the content??</h2>
            <FormControl component="fieldset">
                    <RadioGroup row value={understandingScore} onChange={(event) => setUnderstandingScore(event.target.value)}>
                        <FormControlLabel value="0" control={<Radio />} label="0" />
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                        <FormControlLabel value="5" control={<Radio />} label="5" />
                    </RadioGroup>
            </FormControl>

            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onButtonClick}
                >Next<NavigateNextIcon />
                </Button>
            </div>
        </>
    )
}

export default Understanding;