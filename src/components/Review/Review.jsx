import axios from "axios";
import { useSelector } from "react-redux";

function Review() {
    const review = useSelector(store => store.totalFeedback)

    const submitFeedback = () => {
        axios({
            type: 'POST',
            url: '/feedback',
            data: {
                feeling: review[0],
                understanding: review[1],
                support: review[2],
                comments: review[3]
            }
        })
    }

    return (
        <>
        <h2>Here is your feedback</h2>
        <h3>Feelings: {review[0]}</h3>
        <h3>Understanding: {review[1]}</h3>
        <h3>Support: {review[2]}</h3>
        <h3>Comments: {review[3]}</h3>
        <button onClick={submitFeedback}>Submit Feedback</button>
        </>
    )
}

export default Review;