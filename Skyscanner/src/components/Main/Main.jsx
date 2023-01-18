import React, { useEffect, useState } from "react";
import { useState } from "react";

function Main() {
    // str type
    const [Departure, setDeparture] = useState('');
    const [Destination, setDestination] = useState('');

    const today = new Date();
    console.log(today);
    // DepartDate, Returndate can't be in the past
    // DepartDate is 5 days from today - use built in function new Date()
    // obj type, int type
    const [DepartDateYear, setDepartDateYear] = useState(today.getFullYear());
    const [DepartDateMonth, setDepartDateMonth] = useState(today.getMonth());
    const [DepartDateDay, setDepartDateDay] = useState(today.getDate());
    // Returndate can't be earlier than DepartDate
    const [ReturndateYear, setReturndateYear] = useState(DepartDateYear);
    const [ReturndateMonth, setReturndateMonth] = useState(DepartDateMonth);
    const [ReturndateDay, setReturndateDay] = useState(DepartDateDay);
    // int type
    const [numberOfTravelers, setNumberOfTravelers] = useState(1);

}

export default Main;