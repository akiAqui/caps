import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import QRCode from "react-qr-code";
import ReservationContext from "./ReservationContext";

const ConfirmBooking = (props) => {
    const { reservation } = useContext(ReservationContext);
    const navigate = useNavigate();
    const submitHandler = (e) => {
        navigate('/');
    }

    const code = v4();
    return (
        <div className='confirm-booking'>
            <div className='header'>
                <div className="title">
                    <h1>reservation has been made.</h1>
                </div>
            </div>
            <div className="code">
                <QRCode value={code} className="qr" />
                <div className='rid'>ID: {code}</div>
            </div>
            <div className='card'>
                <div className="row">
                    <div className="header">Date:</div>
                    <div className="value">{reservation.date}</div>
                </div>
                <div className="row">
                    <div className="header">Time:</div>
                    <div className="value">{reservation.time}</div>
                </div>
                <div className="row">
                    <div className="header">Guests:</div>
                    <div className="value">{reservation.guest}</div>
                </div>
            </div>
            <div className="button">
                <button className="ll_button" onClick={submitHandler}>HOME</button>
            </div>
        </div>
    )
}

export default ConfirmBooking;