import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useReducer, useEffect, useState } from 'react';

import Home from './Home.js';
import MenuPage from './MenuPage.js';
import About from './About.js';
import Login from './Login.js';
import BookingPage from './BookingPage.js';
import Footer from './Footer.js';
import BookingConf from './BookingConf.js';
import ConfirmBooking from './ConfirmBooking.js';

import './App.scss';
import logo from './img/Logo.svg';

import ReservationContext from "./ReservationContext.js";

let from = new Date();
let to = new Date();
to.setDate(from.getDate() + 7);
const min = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(from);
const max = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(to);


const initArg = min;
const initializeTimes = (arg) => {
  return { date: arg, times: [] }
}

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'Set_Date':
      console.log('Set_Date');
      return { ...state, date: action.date }
    case 'Set_Times':
      console.log('Set_Date');
      return { ...state, times: action.times }
    case 'Confirmed':
      return {date:'',times:[]}
    default:
      return state;
  }
}

function App() {

  const fetchAPI = async (date) => {
    return ["18:00", "20:00", "21:00", "22:00"]
  }
  const submitAPI = async (reservation) => {
    return true;
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initArg, initializeTimes);
  const [reservation, setReservation] = useState(
    {
      date: min,
      time: '',
      guest: '',
      occasion: '',
      from: min,
      to: max,
      times: availableTimes,
      isConfirmed: false,
    }
  )

  useEffect(() => {
    console.log('date effect');
    fetchAPI(availableTimes.date).then(times => {
      dispatch({ type: 'Set_Times', times: times })
    })
  }, [availableTimes.date])

  useEffect(() => {
    console.log('time effect');
    setReservation({...reservation,times:availableTimes.times})
  },[availableTimes.times])

  useEffect(() => {
    console.log('confirm effect');
    submitAPI(reservation).then(bool => {
      dispatch({ type: 'Confirmed' })
    })
  },[reservation.isConfirmed])


  return (
    <>
      <ReservationContext.Provider value={{ reservation, setReservation }}>
        <Router>
          <nav className="nav" role="navigation">
            <Link to="/" className="navItem"><img alt='logo' src={logo} className="navItem" /></Link>
            <Link to="/menu" className="navItem">Menu</Link>
            <Link to="/about" className="navItem">About</Link>
            <Link to="/reserve" className="navItem">Reserve</Link>
            <Link to="/login" className="navItem"> Login</Link>
          </nav>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/reserve" element={<BookingPage dispatch={dispatch} />} />
            <Route path="/confirm" element={<BookingConf />} />
            <Route path="/done" element={<ConfirmBooking/>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>

      </ReservationContext.Provider>

      <Footer />
    </>
  );
}

export default App;
