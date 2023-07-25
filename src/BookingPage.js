import BookingForm from './BookingForm.js';

const BookingPage = (props) => {
    return (
        <div className="reserve">
            <div className="header">
                <div className="title">
                    <h1>Reserve your table</h1>
                </div>
            </div>
            <BookingForm dispatch={props.dispatch} />
        </div>
    )
}


export default BookingPage;
