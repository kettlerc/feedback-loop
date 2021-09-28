import axios from "axios";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FlagIcon from '@material-ui/icons/Flag';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
      marginTop: 50,
  }
});

function AdminPage() {
    const [feedbackList, setFeedbackList] = useState([]);
    const [flagged, setFlagged] = useState(true);
    const classes = useStyles();
    const feedback = useSelector(store => store.totalFeedback)

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            setFeedbackList(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log('GET error', error);
        });
    }

    const deleteEntry = (id) => {
        console.log('ID is', feedback.id);
        axios({
            method: 'DELETE',
            url: `/feedback/${feedback.id}`
        }).then((response) => {
            console.log('DELETEd entry');
        }).catch((error) => {
            console.log('DELETE error', error);
        });
    }

    const toggleFlagClick = () => {
        setFlagged(!flagged);
    }

    const toggleFlag = () => {
        if (flagged) {
            return <Button 
                        variant="contained"
                        color="default"
                        onClick={toggleFlagClick}
                    ><FlagIcon /></Button>
        } else {
            return <Button 
                        variant="contained"
                        color="primary"
                        onClick={toggleFlagClick}
                    ><FlagIcon /></Button>
        }
    }

    return (
        <>
        <Typography variant="h2">Admin Page - Feedback Results</Typography>
        <Container maxWidth="md">
            <TableContainer className={classes.table} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Understanding</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell align="center">Flag</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {feedbackList.map((feedback) => (
                        <TableRow key={feedback.id}>
                            <TableCell>{feedback.feeling}</TableCell>
                            <TableCell>{feedback.understanding}</TableCell>
                            <TableCell>{feedback.support}</TableCell>
                            <TableCell>{feedback.comments}</TableCell>
                            <TableCell align="center">
                                {toggleFlag()}
                            </TableCell>
                            <TableCell align="center">
                                <Button 
                                    variant="contained"
                                    color="secondary"
                                    onClick={deleteEntry}
                                ><DeleteForeverIcon /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
        </>
    )
}

export default AdminPage;