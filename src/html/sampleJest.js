import { fireEvent, render, screen } from "@testing-library/react";
import FeedBackForm from './FeedBackForm';

describe("Feedback Form", () => {
    test("submission conditional test", () => {
        const handleSubmit = jest.fn();
        render(<FeedBackForm onSubmit={handleSubmit} />);

        const rangeInput = screen.getByLabelText(/Score/);
        fireEvent.change(rangeInput, { target: { value: '4' } });

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        expect(handleSubmit).notHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
    })
})

import { useState } from 'react';
const feedBackForm = ({ onSbmit }) => {
    const [score, setScore] = useState(5);
    const [comment, setComment] = useState("");

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <ht>Feedback Form:</ht>
                    <div className="Field">
                        <label>Score:{score}</label>
                        <input value={score}
                            onChange={(e) => {
                                setScore(e.target.value);
                            }}
                            type="range"
                            min="0"
                            max="10" />
                    </div>
                    <div className="Field">
                        <label>Comments:</label>
                        <textarea placeholder="aa"
                            name="comment"
                            value={comment}
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                            type="textarea" />
                    </div>
                </fieldset>
            </form>
        </div >

    );
}