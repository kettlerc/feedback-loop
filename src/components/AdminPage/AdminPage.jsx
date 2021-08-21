import axios from "axios";
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FlagIcon from '@material-ui/icons/Flag';


const useStyles = makeStyles({
  table: {
    maxWidth: 1250,
    margin: 100
  },
});

function AdminPage() {
    let [feedbackList, setFeedbackList] = useState([]);

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

    const classes = useStyles();

    return (
        <>
        <h1>Admin Page - Feedback Results</h1>
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell>Understanding</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Flag</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {feedbackList.map((feedback) => (
                    <TableRow key={feedback.id}>
                        <TableCell>{feedback.feeling}</TableCell>
                        <TableCell>{feedback.understanding}</TableCell>
                        <TableCell>{feedback.support}</TableCell>
                        <TableCell>{feedback.comments}</TableCell>
                        <TableCell>
                            <Button 
                                variant="contained"
                                color="default"
                            ><FlagIcon /></Button>
                        </TableCell>
                        <TableCell>
                            <Button 
                                variant="contained"
                                color="secondary"
                            ><DeleteForeverIcon /></Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default AdminPage;