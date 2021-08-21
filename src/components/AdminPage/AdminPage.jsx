import axios from "axios";
import { useState, useEffect } from 'react';

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

    return (
        <>
        <h1>Admin Page - Feedback Results</h1>
        <table>
            <thead>
                <tr>
                    <td>Feeling</td>
                    <td>Understanding</td>
                    <td>Support</td>
                    <td>Comments</td>
                    <td>Flag</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
        </>
    )
}

export default AdminPage;