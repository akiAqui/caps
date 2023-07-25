import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import ReservationContext from "./ReservationContext";


const BookingConf = () => {
    const { reservation } = useContext(ReservationContext);
    const navigate1 =  useNavigate();
    const navigate2 =  useNavigate();

    const submitHandlerNext = (e) =>{
        navigate1('/done');
    }
    const submitHandlerPrev = (e) =>{
        navigate2('/reserve')
    }


    return (
        <>
            <div className="conf">
                <div className="header">
                    <div className="title">
                        <h1>Please confirm</h1>
                    </div>
                </div>
                <div className="card">
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
                    <button className="ll_button" onClick={submitHandlerPrev}>back</button>
                    <button className="ll_button" onClick={submitHandlerNext}>next</button>
                </div>

            </div>
        </>
    )
};

export default BookingConf;
