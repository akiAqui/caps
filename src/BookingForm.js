import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ReservationContext from './ReservationContext.js';

const BookingForm = (props) => {
    const { reservation, setReservation } = useContext(ReservationContext);
    const [guestsError, setGuestsError] = useState('');
    const [error, setError] = useState("");

    const dateHandler = (e) => {
        setReservation({ ...reservation, date: e.target.value });
        props.dispatch(
            {
                type: 'Set_Date',
                date: e.target.value,
            }
        )
    }

    const clearForm = () => {

    }
    const timeHander = (e) => {
        setReservation({ ...reservation, time: e.target.value });
    }

    const checkGuestInput = (strInput) => {
        if (isNaN(strInput)) {
            setGuestsError("Error: Guests must be an integer");
            return false;
        } else if (strInput.includes('.')) {
            setGuestsError("Error: Guests cannot include dot(.) ");
            return false;
        } else if (strInput.includes('e')) {
            setGuestsError("Error: Guests cannot include exp(e) ");
            return false;
        } else if (strInput.includes('-')) {
            setGuestsError("Error: Guests cannot include minus(-) ");
            return false;
        } else if (strInput.includes(',')) {
            setGuestsError("Error: Guests cannot include comma(,) ");
            return false;
        } else if (strInput < 1 || strInput > 10) {
            setGuestsError('Error: Guests should be from 1 to 10');
            return false;
        } else {
            setGuestsError("");
            return true;
        }
    }
    const guestValidator = (e) => {
        checkGuestInput(e.target.value);
    }
    const guestHandler = (e) => {
        setReservation({ ...reservation, guest: e.target.value });
    }
    const occasionHandler = (e) => {
        setReservation({ ...reservation, occasion: e.target.value });
    }
    /********************************************************************************** */
    const isFormValid = () => {
        setError('');
        if (!reservation.date) {
            setError('Error: Date should be selected')
        } else if (!reservation.time) {
            setError('Error: Time should be selected')
        } else if (!reservation.guest) {
            setError('Error: Guests should be input')
        }
        if (reservation.date &&
            reservation.time &&
            reservation.guest &&
            checkGuestInput(reservation.guest)) {
            setError('OK');
            return true;
        }
        return false;
    };
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            setError('OK');
            clearForm();
            navigate('/confirm', {
                state: reservation,
            })
        }
    };

    useEffect(() => {
        console.log('reservation=', reservation);
        console.log('props=', props);
    }, [])

    return (
        <div className="forms">
            <form onSubmit={submitHandler} className="submit">

                {/* DATE */}
                <div className="date">
                    <label id="lb_date" htmlFor="res-date" className="label"><sup className="must">*</sup>Date: </label>
                    <input id="res-date"
                        type="date"
                        min={reservation.from}
                        max={reservation.to}
                        value={reservation.date} // for today
                        onChange={dateHandler}
                        className="value"
                        aria-required="true"
                        aria-labelledby="lb_date" />
                </div>

                {/* TIME */}
                {/*value={time}をいれないと初期値がplease selectにならなかった！ */}
                <div className="time">
                    <label id="lb_time" htmlFor="res-time" className="label"><sup className="must">*</sup>Time:</label>
                    <select id="res-time"
                        disabled={!reservation.date}
                        value={reservation.time}
                        onChange={timeHander}
                        className="value"
                        aria-required="true"
                        aria-labelledby="lb_time">
                        <option value="" key="0" disabled>please select</option>
                        {reservation.times.map((time, index) => (
                            <option value={time} key={index + 1}> {time} </option>
                        )
                        )}
                    </select>
                </div>

                {/* setting the number of guests*/}
                <div className="guest">
                    <label id="lb_number" htmlFor="guests" className="label"><sup className="must">*</sup>Guests:</label>
                    <input type="text"
                        placeholder="1..10"
                        id="guests"
                        onBlur={guestValidator}
                        onChange={guestHandler}
                        className="value"
                        aria-required="true"
                        aria-labelledby="lb_number" />
                </div>

                {/* setting the occasion */}
                <div className="occasion">
                    <label id="lb_occasion" htmlFor="occasion" className="label">Occasion:</label>
                    <select id="occation"
                        onChange={occasionHandler}
                        className="value"
                        aria-required="false"
                        aria-labelledby="lb_occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                
                <button type="submit" className="button ll_button" onClick={submitHandler}>
                    Make Your reservation
                </button>
                <ul className="error" data-testid="error">
                    {guestsError && <li style={{ color: 'red' }}>{guestsError}</li>}
                    {error && <li style={{ color: 'red' }}>{error}</li>}
                </ul>

            </form>
        </div>
    );

}

export default BookingForm;
