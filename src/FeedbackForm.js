import "./App.css";
import { useState } from "react";

function FeedbackForm ({onSubmit}) {
    const [score, setScore] = useState('10');
    const [comment, setComment] = useState('');

    const isDisabled = Number(score) < 5 && comment.length <= 10;

    const textAreaPlaceholder = isDisabled
        ? "Please provide a comment explaining wht the experience was not good. Minimum length is 10 characters."
        : "Optional Feedback";

    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit({score, comment});
    };

    return (
        <nav className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback form</h2>
                    <nav className="Field">
                        <label>Score: {score} </label>
                        <input
                            value={score}
                            onChange={(e) => {
                                setScore(e.target.value);
                            }}
                            type="range"
                            min="0"
                            max="10"
                        />
                    </nav>
                    <nav className="Field">
                        <label>Comments:</label>
                        <textarea>
                            placeholder={textAreaPlaceholder}
                            name="comment"
                            value={comment}
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                        </textarea>
                    </nav>
                    </fieldset>
                    </form>
        </nav>
    );
}